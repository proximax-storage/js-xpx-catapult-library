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
* The BlockchainScoreDTO model module.
* @module model/BlockchainScoreDTO
* @version 1.0.13
*/
var BlockchainScoreDTO = function () {
    /**
    * Constructs a new <code>BlockchainScoreDTO</code>.
    * @alias module:model/BlockchainScoreDTO
    * @class
    * @param scoreHigh {module:model/UInt64DTO} 
    * @param scoreLow {module:model/UInt64DTO} 
    */

    function BlockchainScoreDTO(scoreHigh, scoreLow) {
        _classCallCheck(this, BlockchainScoreDTO);

        this.scoreHigh = undefined;
        this.scoreLow = undefined;


        this['scoreHigh'] = scoreHigh;this['scoreLow'] = scoreLow;
    }

    /**
    * Constructs a <code>BlockchainScoreDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BlockchainScoreDTO} obj Optional instance to populate.
    * @return {module:model/BlockchainScoreDTO} The populated <code>BlockchainScoreDTO</code> instance.
    */


    _createClass(BlockchainScoreDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new BlockchainScoreDTO();

                if (data.hasOwnProperty('scoreHigh')) {
                    obj['scoreHigh'] = _UInt64DTO2.default.constructFromObject(data['scoreHigh']);
                }
                if (data.hasOwnProperty('scoreLow')) {
                    obj['scoreLow'] = _UInt64DTO2.default.constructFromObject(data['scoreLow']);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/UInt64DTO} scoreHigh
        */

        /**
        * @member {module:model/UInt64DTO} scoreLow
        */

    }]);

    return BlockchainScoreDTO;
}();

exports.default = BlockchainScoreDTO;
//# sourceMappingURL=BlockchainScoreDTO.js.map