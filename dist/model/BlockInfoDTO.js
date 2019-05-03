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

var _BlockDTO = require('./BlockDTO');

var _BlockDTO2 = _interopRequireDefault(_BlockDTO);

var _BlockMetaDTO = require('./BlockMetaDTO');

var _BlockMetaDTO2 = _interopRequireDefault(_BlockMetaDTO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The BlockInfoDTO model module.
* @module model/BlockInfoDTO
* @version 1.0.13
*/
var BlockInfoDTO = function () {
    /**
    * Constructs a new <code>BlockInfoDTO</code>.
    * @alias module:model/BlockInfoDTO
    * @class
    * @param meta {module:model/BlockMetaDTO} 
    * @param block {module:model/BlockDTO} 
    */

    function BlockInfoDTO(meta, block) {
        _classCallCheck(this, BlockInfoDTO);

        this.meta = undefined;
        this.block = undefined;


        this['meta'] = meta;this['block'] = block;
    }

    /**
    * Constructs a <code>BlockInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BlockInfoDTO} obj Optional instance to populate.
    * @return {module:model/BlockInfoDTO} The populated <code>BlockInfoDTO</code> instance.
    */


    _createClass(BlockInfoDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new BlockInfoDTO();

                if (data.hasOwnProperty('meta')) {
                    obj['meta'] = _BlockMetaDTO2.default.constructFromObject(data['meta']);
                }
                if (data.hasOwnProperty('block')) {
                    obj['block'] = _BlockDTO2.default.constructFromObject(data['block']);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/BlockMetaDTO} meta
        */

        /**
        * @member {module:model/BlockDTO} block
        */

    }]);

    return BlockInfoDTO;
}();

exports.default = BlockInfoDTO;
//# sourceMappingURL=BlockInfoDTO.js.map