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
* The MosaicNameDTO model module.
* @module model/MosaicNameDTO
* @version 1.0.13
*/
var MosaicNameDTO = function () {
    /**
    * Constructs a new <code>MosaicNameDTO</code>.
    * @alias module:model/MosaicNameDTO
    * @class
    * @param parentId {module:model/UInt64DTO} 
    * @param mosaicId {module:model/UInt64DTO} 
    * @param name {String} 
    */

    function MosaicNameDTO(parentId, mosaicId, name) {
        _classCallCheck(this, MosaicNameDTO);

        this.parentId = undefined;
        this.mosaicId = undefined;
        this.name = undefined;


        this['parentId'] = parentId;this['mosaicId'] = mosaicId;this['name'] = name;
    }

    /**
    * Constructs a <code>MosaicNameDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MosaicNameDTO} obj Optional instance to populate.
    * @return {module:model/MosaicNameDTO} The populated <code>MosaicNameDTO</code> instance.
    */


    _createClass(MosaicNameDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new MosaicNameDTO();

                if (data.hasOwnProperty('parentId')) {
                    obj['parentId'] = _UInt64DTO2.default.constructFromObject(data['parentId']);
                }
                if (data.hasOwnProperty('mosaicId')) {
                    obj['mosaicId'] = _UInt64DTO2.default.constructFromObject(data['mosaicId']);
                }
                if (data.hasOwnProperty('name')) {
                    obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
                }
            }
            return obj;
        }

        /**
        * @member {module:model/UInt64DTO} parentId
        */

        /**
        * @member {module:model/UInt64DTO} mosaicId
        */

        /**
        * @member {String} name
        */

    }]);

    return MosaicNameDTO;
}();

exports.default = MosaicNameDTO;
//# sourceMappingURL=MosaicNameDTO.js.map