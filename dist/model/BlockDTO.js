'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2019 NEM
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
 * Catapult REST API Reference
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.13
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _UInt64DTO = require('./UInt64DTO');

var _UInt64DTO2 = _interopRequireDefault(_UInt64DTO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The BlockDTO model module.
* @module model/BlockDTO
* @version 1.0.13
*/
var BlockDTO = function () {
    /**
    * Constructs a new <code>BlockDTO</code>.
    * @alias module:model/BlockDTO
    * @class
    * @param signature {String} 
    * @param signer {String} 
    * @param version {Number} 
    * @param type {Number} 
    * @param height {module:model/UInt64DTO} 
    * @param timestamp {module:model/UInt64DTO} 
    * @param difficulty {module:model/UInt64DTO} 
    * @param feeMultiplier {Number} 
    * @param previousBlockHash {String} 
    * @param blockTransactionsHash {String} 
    * @param blockReceiptsHash {String} 
    * @param stateHash {String} 
    * @param beneficiaryPublicKey {String} 
    */

    function BlockDTO(signature, signer, version, type, height, timestamp, difficulty, feeMultiplier, previousBlockHash, blockTransactionsHash, blockReceiptsHash, stateHash, beneficiaryPublicKey) {
        _classCallCheck(this, BlockDTO);

        this.signature = undefined;
        this.signer = undefined;
        this.version = undefined;
        this.type = undefined;
        this.height = undefined;
        this.timestamp = undefined;
        this.difficulty = undefined;
        this.feeMultiplier = undefined;
        this.previousBlockHash = undefined;
        this.blockTransactionsHash = undefined;
        this.blockReceiptsHash = undefined;
        this.stateHash = undefined;
        this.beneficiaryPublicKey = undefined;


        this['signature'] = signature;this['signer'] = signer;this['version'] = version;this['type'] = type;this['height'] = height;this['timestamp'] = timestamp;this['difficulty'] = difficulty;this['feeMultiplier'] = feeMultiplier;this['previousBlockHash'] = previousBlockHash;this['blockTransactionsHash'] = blockTransactionsHash;this['blockReceiptsHash'] = blockReceiptsHash;this['stateHash'] = stateHash;this['beneficiaryPublicKey'] = beneficiaryPublicKey;
    }

    /**
    * Constructs a <code>BlockDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BlockDTO} obj Optional instance to populate.
    * @return {module:model/BlockDTO} The populated <code>BlockDTO</code> instance.
    */


    _createClass(BlockDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new BlockDTO();

                if (data.hasOwnProperty('signature')) {
                    obj['signature'] = _ApiClient2.default.convertToType(data['signature'], 'String');
                }
                if (data.hasOwnProperty('signer')) {
                    obj['signer'] = _ApiClient2.default.convertToType(data['signer'], 'String');
                }
                if (data.hasOwnProperty('version')) {
                    obj['version'] = _ApiClient2.default.convertToType(data['version'], 'Number');
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'Number');
                }
                if (data.hasOwnProperty('height')) {
                    obj['height'] = _UInt64DTO2.default.constructFromObject(data['height']);
                }
                if (data.hasOwnProperty('timestamp')) {
                    obj['timestamp'] = _UInt64DTO2.default.constructFromObject(data['timestamp']);
                }
                if (data.hasOwnProperty('difficulty')) {
                    obj['difficulty'] = _UInt64DTO2.default.constructFromObject(data['difficulty']);
                }
                if (data.hasOwnProperty('feeMultiplier')) {
                    obj['feeMultiplier'] = _ApiClient2.default.convertToType(data['feeMultiplier'], 'Number');
                }
                if (data.hasOwnProperty('previousBlockHash')) {
                    obj['previousBlockHash'] = _ApiClient2.default.convertToType(data['previousBlockHash'], 'String');
                }
                if (data.hasOwnProperty('blockTransactionsHash')) {
                    obj['blockTransactionsHash'] = _ApiClient2.default.convertToType(data['blockTransactionsHash'], 'String');
                }
                if (data.hasOwnProperty('blockReceiptsHash')) {
                    obj['blockReceiptsHash'] = _ApiClient2.default.convertToType(data['blockReceiptsHash'], 'String');
                }
                if (data.hasOwnProperty('stateHash')) {
                    obj['stateHash'] = _ApiClient2.default.convertToType(data['stateHash'], 'String');
                }
                if (data.hasOwnProperty('beneficiaryPublicKey')) {
                    obj['beneficiaryPublicKey'] = _ApiClient2.default.convertToType(data['beneficiaryPublicKey'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {String} signature
        */

        /**
        * @member {String} signer
        */

        /**
        * @member {Number} version
        */

        /**
        * @member {Number} type
        */

        /**
        * @member {module:model/UInt64DTO} height
        */

        /**
        * @member {module:model/UInt64DTO} timestamp
        */

        /**
        * @member {module:model/UInt64DTO} difficulty
        */

        /**
        * @member {Number} feeMultiplier
        */

        /**
        * @member {String} previousBlockHash
        */

        /**
        * @member {String} blockTransactionsHash
        */

        /**
        * @member {String} blockReceiptsHash
        */

        /**
        * @member {String} stateHash
        */

        /**
        * @member {String} beneficiaryPublicKey
        */

    }]);

    return BlockDTO;
}();

exports.default = BlockDTO;
//# sourceMappingURL=BlockDTO.js.map