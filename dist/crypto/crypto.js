'use strict';

var _convert = require('../coders/convert');

var _convert2 = _interopRequireDefault(_convert);

var _nacl_catapult = require('./nacl_catapult');

var _nacl_catapult2 = _interopRequireDefault(_nacl_catapult);

var _cryptoJs = require('crypto-js');

var _cryptoJs2 = _interopRequireDefault(_cryptoJs);

var _sha3Hasher = require('./sha3Hasher');

var _sha3Hasher2 = _interopRequireDefault(_sha3Hasher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Encrypt a private key for mobile apps (AES_PBKF2)
 *
 * @param {string} password - A wallet password
 * @param {string} privateKey - An account private key
 *
 * @return {object} - The encrypted data
 */
/*
 * Copyright 2018 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var toMobileKey = function toMobileKey(password, privateKey) {
    // Errors
    if (!password || !privateKey) throw new Error('Missing argument !');
    //if (!Helpers.isPrivateKeyValid(privateKey)) throw new Error('Private key is not valid !');
    // Processing
    var salt = _cryptoJs2.default.lib.WordArray.random(256 / 8);
    var key = _cryptoJs2.default.PBKDF2(password, salt, {
        keySize: 256 / 32,
        iterations: 2000
    });
    var iv = _nacl_catapult2.default.randomBytes(16);
    var encIv = {
        iv: ua2words(iv, 16)
    };
    var encrypted = _cryptoJs2.default.AES.encrypt(_cryptoJs2.default.enc.Hex.parse(privateKey), key, encIv);
    // Result
    return {
        encrypted: _convert2.default.uint8ToHex(iv) + encrypted.ciphertext,
        salt: salt.toString()
    };
};

/**
 * Derive a private key from a password using count iterations of SHA3-256
 *
 * @param {string} password - A wallet password
 * @param {number} count - A number of iterations above 0
 *
 * @return {object} - The derived private key
 */
var derivePassSha = function derivePassSha(password, count) {
    // Errors
    if (!password) throw new Error('Missing argument !');
    if (!count || count <= 0) throw new Error('Please provide a count number above 0');
    // Processing
    var data = password;
    console.time('sha3^n generation time');
    for (var i = 0; i < count; ++i) {
        data = _cryptoJs2.default.SHA3(data, {
            outputLength: 256
        });
    }
    console.timeEnd('sha3^n generation time');
    // Result
    return {
        'priv': _cryptoJs2.default.enc.Hex.stringify(data)
    };
};

/**
 * Reveal the private key of an account or derive it from the wallet password
 *
 * @param {object} common- An object containing password and privateKey field
 * @param {object} walletAccount - A wallet account object
 * @param {string} algo - A wallet algorithm
 *
 * @return {object|boolean} - The account private key in and object or false
 */
var passwordToPrivatekey = function passwordToPrivatekey(common, walletAccount, algo) {
    // Errors
    if (!common || !common.password || !walletAccount || !algo) throw new Error('Missing argument !');
    // Processing
    var r = undefined;
    if (algo === "pass:6k") {
        // Brain wallets
        if (!walletAccount.encrypted && !walletAccount.iv) {
            // Account private key is generated simply using a passphrase so it has no encrypted and iv
            r = derivePassSha(common.password, 6000);
        } else if (!walletAccount.encrypted || !walletAccount.iv) {
            // Else if one is missing there is a problem
            //console.log("Account might be compromised, missing encrypted or iv");
            return false;
        } else {
            // Else child accounts have encrypted and iv so we decrypt
            var pass = derivePassSha(common.password, 20);
            var obj = {
                ciphertext: _cryptoJs2.default.enc.Hex.parse(walletAccount.encrypted),
                iv: _convert2.default.hexToUint8(walletAccount.iv),
                key: _convert2.default.hexToUint8(pass.priv)
            };
            var d = decrypt(obj);
            r = { 'priv': d };
        }
    } else if (algo === "pass:bip32") {
        // Wallets from PRNG
        var _pass = derivePassSha(common.password, 20);
        var _obj = {
            ciphertext: _cryptoJs2.default.enc.Hex.parse(walletAccount.encrypted),
            iv: _convert2.default.hexToUint8(walletAccount.iv),
            key: _convert2.default.hexToUint8(_pass.priv)
        };
        var _d = decrypt(_obj);
        r = { 'priv': _d };
    } else if (algo === "pass:enc") {
        // Private Key wallets
        var _pass2 = derivePassSha(common.password, 20);
        var _obj2 = {
            ciphertext: _cryptoJs2.default.enc.Hex.parse(walletAccount.encrypted),
            iv: _convert2.default.hexToUint8(walletAccount.iv),
            key: _convert2.default.hexToUint8(_pass2.priv)
        };
        var _d2 = decrypt(_obj2);
        r = { 'priv': _d2 };
    } else if (algo === "trezor") {
        // HW wallet
        r = { 'priv': '' };
        common.isHW = true;
    } else {
        //console.log("Unknown wallet encryption method");
        return false;
    }
    // Result
    common.privateKey = r.priv;
    return true;
};

function hashfunc(dest, data, dataLength) {
    // OLD sha3 that uses keccak algo
    // let convertedData = ua2words(data, dataLength);
    // let hash = CryptoJS.SHA3(convertedData, {
    //     outputLength: 512
    // });
    // words2ua(dest, hash);

    var sha3_512 = _sha3Hasher2.default.createHasher(64);
    sha3_512.reset();
    sha3_512.update(data);
    sha3_512.finalize(dest);
}

function key_derive(shared, salt, sk, pk) {
    _nacl_catapult2.default.lowlevel.crypto_shared_key_hash(shared, pk, sk, hashfunc);
    for (var i = 0; i < salt.length; i++) {
        shared[i] ^= salt[i];
    }

    // OLD sha3 that uses keccak algo
    // let hash = CryptoJS.SHA3(ua2words(shared, 32), {
    //     outputLength: 256
    // });
    // return hash;

    var hash = new Uint8Array(32);
    var sha3_256 = _sha3Hasher2.default.createHasher(32);
    sha3_256.reset();
    sha3_256.update(shared);
    sha3_256.finalize(hash);
    return ua2words(hash, 32);
}

/**
 * Generate a random key
 *
 * @return {Uint8Array} - A random key
 */
var randomKey = function randomKey() {
    var rkey = _nacl_catapult2.default.randomBytes(32);
    return rkey;
};

/**
 * Encrypt hex data using a key
 *
 * @param {string} data - An hex string
 * @param {Uint8Array} key - An Uint8Array key
 *
 * @return {object} - The encrypted data
 */
var encrypt = function encrypt(data, key) {
    // Errors
    if (!data || !key) throw new Error('Missing argument !');
    // Processing
    var iv = _nacl_catapult2.default.randomBytes(16);
    var encKey = ua2words(key, 32);
    var encIv = {
        iv: ua2words(iv, 16)
    };
    var encrypted = _cryptoJs2.default.AES.encrypt(_cryptoJs2.default.enc.Hex.parse(data), encKey, encIv);
    // Result
    return {
        ciphertext: encrypted.ciphertext,
        iv: iv,
        key: key
    };
};

/**
 * Decrypt data
 *
 * @param {object} data - An encrypted data object
 *
 * @return {string} - The decrypted hex string
 */
var decrypt = function decrypt(data) {
    // Errors
    if (!data) throw new Error('Missing argument !');
    // Processing
    var encKey = ua2words(data.key, 32);
    var encIv = {
        iv: ua2words(data.iv, 16)
    };
    // Result
    return _cryptoJs2.default.enc.Hex.stringify(_cryptoJs2.default.AES.decrypt(data, encKey, encIv));
};

/**
 * Encode a private key using a password
 *
 * @param {string} privateKey - An hex private key
 * @param {string} password - A password
 *
 * @return {object} - The encoded data
 */
var encodePrivKey = function encodePrivKey(privateKey, password) {
    // Errors
    if (!privateKey || !password) throw new Error('Missing argument !');
    //if (!Helpers.isPrivateKeyValid(privateKey)) throw new Error('Private key is not valid !');
    // Processing
    var pass = derivePassSha(password, 20);
    var r = encrypt(privateKey, _convert2.default.hexToUint8(pass.priv));
    // Result
    return {
        ciphertext: _cryptoJs2.default.enc.Hex.stringify(r.ciphertext),
        iv: _convert2.default.uint8ToHex(r.iv)
    };
};

/***
 * Encode a message, separated from encode() to help testing
 *
 * @param {string} senderPriv - A sender private key
 * @param {string} recipientPub - A recipient public key
 * @param {string} msg - A text message
 * @param {Uint8Array} iv - An initialization vector
 * @param {Uint8Array} salt - A salt
 *
 * @return {string} - The encoded message
 */
var _encode = function _encode(senderPriv, recipientPub, msg, iv, salt) {
    // Errors
    if (!senderPriv || !recipientPub || !msg || !iv || !salt) throw new Error('Missing argument !');
    //if (!Helpers.isPrivateKeyValid(senderPriv)) throw new Error('Private key is not valid !');
    //if (!Helpers.isPublicKeyValid(recipientPub)) throw new Error('Public key is not valid !');
    // Processing
    var sk = _convert2.default.hexToUint8Reverse(senderPriv);
    var pk = _convert2.default.hexToUint8(recipientPub);
    var shared = new Uint8Array(32);
    var r = key_derive(shared, salt, sk, pk);
    var encKey = r;
    var encIv = {
        iv: ua2words(iv, 16)
    };
    var encrypted = _cryptoJs2.default.AES.encrypt(_cryptoJs2.default.enc.Hex.parse(_convert2.default.utf8ToHex(msg)), encKey, encIv);
    // Result
    var result = _convert2.default.uint8ToHex(salt) + _convert2.default.uint8ToHex(iv) + _cryptoJs2.default.enc.Hex.stringify(encrypted.ciphertext);
    return result;
};

/**
 *
 * @param {string} senderPriv
 * @param {string} recipientPub
 * @param {Uint8Array} bytes
 * @param {Uint8Array} iv
 * @param {Uint8Array} salt
 */
var _nemencode = function _nemencode(senderPriv, recipientPub, bytes, iv, salt) {
    if (!senderPriv || !recipientPub || !bytes || !iv || !salt) throw new Error('Missing argument !');

    var sk = _convert2.default.hexToUint8Reverse(senderPriv);
    var pk = _convert2.default.hexToUint8(recipientPub);
    var shared = new Uint8Array(32);
    var r = key_derive(shared, salt, sk, pk);
    /* console.log('key ' + r);
     console.log('salt ' + salt);
     console.log('iv ' + iv);
     console.log('payload ' + bytes)*/
    var encKey = r;
    var encIv = {
        iv: ua2words(iv, 16)
    };

    var data = ua2words(bytes, bytes.length);
    //let data = convertUint8ArrayToWordArray(bytes);
    //console.log("Converted input bytes to wordArray ");
    //console.log(data);

    var encrypted = _cryptoJs2.default.AES.encrypt(data, encKey, encIv);
    //console.log(encrypted.ciphertext.sigBytes);

    // convert to Uint8Array
    var encryptedData = words2ua(new Uint8Array(encrypted.ciphertext.sigBytes), encrypted.ciphertext);

    // merge salt , iv and encrypted data in Uint8Array
    var result = mergeArray(salt, iv, encryptedData);
    //console.log("Merged salt iv and ciphertext");
    //console.log(result);
    return result;
};

/**
 * Encrypt data using nem keys
 * @param {string} senderPriv A sender private key
 * @param {string} recipientPub A recipient public key
 * @param {Uint8Array} bytes the array of bytes in Uint8Array
 */
var nemencrypt = function nemencrypt(senderPriv, recipientPub, bytes) {
    // Errors
    if (!senderPriv || !recipientPub || !bytes) throw new Error('Missing argument !');

    // Processing
    var iv = _nacl_catapult2.default.randomBytes(16);
    var salt = _nacl_catapult2.default.randomBytes(32);

    // OLD - no need to reverse private key
    // let sk = convert.hexToUint8Reverse(senderPriv);
    var sk = _convert2.default.hexToUint8(senderPriv);
    var pk = _convert2.default.hexToUint8(recipientPub);
    var shared = new Uint8Array(32);
    var r = key_derive(shared, salt, sk, pk);
    var encKey = r;
    var encIv = {
        iv: ua2words(iv, 16)
    };

    var payload = ua2words(bytes, bytes.length);
    var encrypted = _cryptoJs2.default.AES.encrypt(payload, encKey, encIv);
    var encryptedData = words2ua(new Uint8Array(encrypted.ciphertext.sigBytes), encrypted.ciphertext);
    var result = mergeArray(salt, iv, encryptedData);

    // Result
    return result;
};

/**
 *
 * @param {string} recipientPrivate the recipient private key
 * @param {string} senderPublic the recipient public key
 * @param {Uint8Array} bytes the array of bytes in Uint8Array
 */
var nemdecrypt = function nemdecrypt(recipientPrivate, senderPublic, bytes) {
    // Errorsp
    if (!recipientPrivate || !senderPublic || !bytes) throw new Error('Missing argument !');

    // Processing
    var salt = bytes.slice(0, 32);
    var iv = bytes.slice(32, 48);
    var payload = bytes.slice(48, bytes.length);

    // OLD - no need to reverse private key
    // let sk = convert.hexToUint8Reverse(recipientPrivate);
    var sk = _convert2.default.hexToUint8(recipientPrivate);
    var pk = _convert2.default.hexToUint8(senderPublic);
    var shared = new Uint8Array(32);
    var r = key_derive(shared, salt, sk, pk);

    var encKey = r;
    var encIv = {
        iv: ua2words(iv, 16)
    };

    var encrypted = {
        'ciphertext': ua2words(payload, payload.length)
    };

    var plain = _cryptoJs2.default.AES.decrypt(encrypted, encKey, encIv);

    var result = words2ua(new Uint8Array(plain.sigBytes), plain);

    // Result
    return result;
};

/**
 * Encode a message
 *
 * @param {string} senderPriv - A sender private key
 * @param {string} recipientPub - A recipient public key
 * @param {string} msg - A text message
 *
 * @return {string} - The encoded message
 */
var encode = function encode(senderPriv, recipientPub, msg) {
    // Errors
    if (!senderPriv || !recipientPub || !msg) throw new Error('Missing argument !');
    //if (!Helpers.isPrivateKeyValid(senderPriv)) throw new Error('Private key is not valid !');
    //if (!Helpers.isPublicKeyValid(recipientPub)) throw new Error('Public key is not valid !');
    // Processing
    var iv = _nacl_catapult2.default.randomBytes(16);
    //console.log("IV:", convert.uint8ToHex(iv));
    var salt = _nacl_catapult2.default.randomBytes(32);
    var encoded = _encode(senderPriv, recipientPub, msg, iv, salt);
    // Result
    return encoded;
};

/**
 * Decode an encrypted message payload
 *
 * @param {string} recipientPrivate - A recipient private key
 * @param {string} senderPublic - A sender public key
 * @param {string} _payload - An encrypted message payload
 *
 * @return {string} - The decoded payload as hex
 */
var decode = function decode(recipientPrivate, senderPublic, _payload) {
    // Errorsp
    if (!recipientPrivate || !senderPublic || !_payload) throw new Error('Missing argument !');
    //if (!Helpers.isPrivateKeyValid(recipientPrivate)) throw new Error('Private key is not valid !');
    //if (!Helpers.isPublicKeyValid(senderPublic)) throw new Error('Public key is not valid !');
    // Processing
    var binPayload = _convert2.default.hexToUint8(_payload);
    var salt = new Uint8Array(binPayload.buffer, 0, 32);
    var iv = new Uint8Array(binPayload.buffer, 32, 16);
    var payload = new Uint8Array(binPayload.buffer, 48);
    var sk = _convert2.default.hexToUint8Reverse(recipientPrivate);
    var pk = _convert2.default.hexToUint8(senderPublic);
    var shared = new Uint8Array(32);
    var r = key_derive(shared, salt, sk, pk);
    var encKey = r;
    var encIv = {
        iv: ua2words(iv, 16)
    };
    var encrypted = {
        'ciphertext': ua2words(payload, payload.length)
    };
    var plain = _cryptoJs2.default.AES.decrypt(encrypted, encKey, encIv);
    // Result
    var hexplain = _cryptoJs2.default.enc.Hex.stringify(plain);
    return hexplain;
};

/**
 * Convert an Uint8Array to WordArray
 *
 * @param {Uint8Array} ua - An Uint8Array
 * @param {number} uaLength - The Uint8Array length
 *
 * @return {WordArray}
 */
var ua2words = function ua2words(ua, uaLength) {
    var temp = [];
    for (var i = 0; i < uaLength; i += 4) {
        var x = ua[i] * 0x1000000 + (ua[i + 1] || 0) * 0x10000 + (ua[i + 2] || 0) * 0x100 + (ua[i + 3] || 0);
        temp.push(x > 0x7fffffff ? x - 0x100000000 : x);
    }
    return _cryptoJs2.default.lib.WordArray.create(temp, uaLength);
};

/**
 * Convert a wordArray to Uint8Array
 *
 * @param {Uint8Array} destUa - A destination Uint8Array
 * @param {WordArray} cryptowords - A wordArray
 *
 * @return {Uint8Array}
 */
var words2ua = function words2ua(destUa, cryptowords) {
    for (var i = 0; i < destUa.length; i += 4) {
        var v = cryptowords.words[i / 4];
        if (v < 0) v += 0x100000000;
        destUa[i] = v >>> 24;
        destUa[i + 1] = v >>> 16 & 0xff;
        destUa[i + 2] = v >>> 8 & 0xff;
        destUa[i + 3] = v & 0xff;
    }
    return destUa;
};

var mergeArray = function mergeArray() {
    for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
        arrays[_key] = arguments[_key];
    }

    var size = arrays.reduce(function (a, b) {
        return a + b.byteLength;
    }, 0);
    // Allcolate a new buffer
    var result = new Uint8Array(size);

    // Build the new array
    var offset = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arrays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var arr = _step.value;

            result.set(arr, offset);
            offset += arr.byteLength;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return result;
};

module.exports = {
    toMobileKey: toMobileKey,
    derivePassSha: derivePassSha,
    passwordToPrivatekey: passwordToPrivatekey,
    randomKey: randomKey,
    decrypt: decrypt,
    encrypt: encrypt,
    encodePrivKey: encodePrivKey,
    _encode: _encode,
    encode: encode,
    decode: decode,
    nemencrypt: nemencrypt,
    nemdecrypt: nemdecrypt
};
//# sourceMappingURL=crypto.js.map