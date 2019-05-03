'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VerifiableTransaction = require('./VerifiableTransaction');

var _VerifiableTransaction2 = _interopRequireDefault(_VerifiableTransaction);

var _SecretProofTransactionBuffer = require('../buffers/SecretProofTransactionBuffer');

var SecretProofTransactionBufferPackage = _interopRequireWildcard(_SecretProofTransactionBuffer);

var _SecretProofTransactionSchema = require('../schema/SecretProofTransactionSchema');

var _SecretProofTransactionSchema2 = _interopRequireDefault(_SecretProofTransactionSchema);

var _convert = require('../coders/convert');

var _convert2 = _interopRequireDefault(_convert);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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

/**
 * @module transactions/SecretProofTransaction
 */


var _require = require('flatbuffers'),
    flatbuffers = _require.flatbuffers;

var SecretProofTransactionBuffer = SecretProofTransactionBufferPackage.default.Buffers.SecretProofTransactionBuffer;

var SecretProofTransaction = function (_VerifiableTransactio) {
	_inherits(SecretProofTransaction, _VerifiableTransactio);

	function SecretProofTransaction() {
		_classCallCheck(this, SecretProofTransaction);

		return _possibleConstructorReturn(this, (SecretProofTransaction.__proto__ || Object.getPrototypeOf(SecretProofTransaction)).apply(this, arguments));
	}

	_createClass(SecretProofTransaction, null, [{
		key: 'Builder',
		get: function get() {
			var Builder = function () {
				function Builder() {
					_classCallCheck(this, Builder);

					this.fee = [0, 0];
					this.version = 36865;
					this.type = 0x434C;
				}

				_createClass(Builder, [{
					key: 'addFee',
					value: function addFee(fee) {
						this.fee = fee;
						return this;
					}
				}, {
					key: 'addVersion',
					value: function addVersion(version) {
						this.version = version;
						return this;
					}
				}, {
					key: 'addType',
					value: function addType(type) {
						this.type = type;
						return this;
					}
				}, {
					key: 'addDeadline',
					value: function addDeadline(deadline) {
						this.deadline = deadline;
						return this;
					}
				}, {
					key: 'addHashAlgorithm',
					value: function addHashAlgorithm(hashAlgorithm) {
						this.hashAlgorithm = hashAlgorithm;
						return this;
					}
				}, {
					key: 'addSecret',
					value: function addSecret(secret) {
						this.secret = secret;
						return this;
					}
				}, {
					key: 'addProof',
					value: function addProof(proof) {
						this.proof = proof;
						return this;
					}
				}, {
					key: 'build',
					value: function build() {
						var builder = new flatbuffers.Builder(1);

						// Create vectors
						var signatureVector = SecretProofTransactionBuffer.createSignatureVector(builder, Array.apply(undefined, _toConsumableArray(Array(64))).map(Number.prototype.valueOf, 0));
						var signerVector = SecretProofTransactionBuffer.createSignerVector(builder, Array.apply(undefined, _toConsumableArray(Array(32))).map(Number.prototype.valueOf, 0));
						var deadlineVector = SecretProofTransactionBuffer.createDeadlineVector(builder, this.deadline);
						var feeVector = SecretProofTransactionBuffer.createFeeVector(builder, this.fee);
						var byteSecret = _convert2.default.hexToUint8(this.secret);
						var secretVector = SecretProofTransactionBuffer.createSecretVector(builder, byteSecret);
						var byteProof = _convert2.default.hexToUint8(this.proof);
						var proofVector = SecretProofTransactionBuffer.createProofVector(builder, byteProof);

						SecretProofTransactionBuffer.startSecretProofTransactionBuffer(builder);
						SecretProofTransactionBuffer.addSize(builder, 155 + byteProof.length);
						SecretProofTransactionBuffer.addSignature(builder, signatureVector);
						SecretProofTransactionBuffer.addSigner(builder, signerVector);
						SecretProofTransactionBuffer.addVersion(builder, this.version);
						SecretProofTransactionBuffer.addType(builder, this.type);
						SecretProofTransactionBuffer.addFee(builder, feeVector);
						SecretProofTransactionBuffer.addDeadline(builder, deadlineVector);
						SecretProofTransactionBuffer.addHashAlgorithm(builder, this.hashAlgorithm);
						SecretProofTransactionBuffer.addSecret(builder, secretVector);
						SecretProofTransactionBuffer.addProofSize(builder, byteProof.length);
						SecretProofTransactionBuffer.addProof(builder, proofVector);

						var codedSecretProof = SecretProofTransactionBuffer.endSecretProofTransactionBuffer(builder);
						builder.finish(codedSecretProof);

						var bytes = builder.asUint8Array();
						return new SecretProofTransaction(bytes, _SecretProofTransactionSchema2.default);
					}
				}]);

				return Builder;
			}();

			return Builder;
		}
	}]);

	return SecretProofTransaction;
}(_VerifiableTransaction2.default);

exports.default = SecretProofTransaction;
//# sourceMappingURL=SecretProofTransaction.js.map