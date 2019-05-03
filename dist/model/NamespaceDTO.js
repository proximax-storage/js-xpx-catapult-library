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

var _AliasDTO = require('./AliasDTO');

var _AliasDTO2 = _interopRequireDefault(_AliasDTO);

var _UInt64DTO = require('./UInt64DTO');

var _UInt64DTO2 = _interopRequireDefault(_UInt64DTO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The NamespaceDTO model module.
* @module model/NamespaceDTO
* @version 1.0.13
*/
var NamespaceDTO = function () {
    /**
    * Constructs a new <code>NamespaceDTO</code>.
    * @alias module:model/NamespaceDTO
    * @class
    * @param owner {String} 
    * @param startHeight {module:model/UInt64DTO} 
    * @param endHeight {module:model/UInt64DTO} 
    * @param depth {Number} 
    * @param level0 {module:model/UInt64DTO} 
    * @param type {Number} 
    * @param alias {module:model/AliasDTO} 
    * @param parentId {module:model/UInt64DTO} 
    */

    function NamespaceDTO(owner, startHeight, endHeight, depth, level0, type, alias, parentId) {
        _classCallCheck(this, NamespaceDTO);

        this.owner = undefined;
        this.ownerAddress = undefined;
        this.startHeight = undefined;
        this.endHeight = undefined;
        this.depth = undefined;
        this.level0 = undefined;
        this.level1 = undefined;
        this.level2 = undefined;
        this.type = undefined;
        this.alias = undefined;
        this.parentId = undefined;


        this['owner'] = owner;this['startHeight'] = startHeight;this['endHeight'] = endHeight;this['depth'] = depth;this['level0'] = level0;this['type'] = type;this['alias'] = alias;this['parentId'] = parentId;
    }

    /**
    * Constructs a <code>NamespaceDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NamespaceDTO} obj Optional instance to populate.
    * @return {module:model/NamespaceDTO} The populated <code>NamespaceDTO</code> instance.
    */


    _createClass(NamespaceDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new NamespaceDTO();

                if (data.hasOwnProperty('owner')) {
                    obj['owner'] = _ApiClient2.default.convertToType(data['owner'], 'String');
                }
                if (data.hasOwnProperty('ownerAddress')) {
                    obj['ownerAddress'] = _ApiClient2.default.convertToType(data['ownerAddress'], 'String');
                }
                if (data.hasOwnProperty('startHeight')) {
                    obj['startHeight'] = _UInt64DTO2.default.constructFromObject(data['startHeight']);
                }
                if (data.hasOwnProperty('endHeight')) {
                    obj['endHeight'] = _UInt64DTO2.default.constructFromObject(data['endHeight']);
                }
                if (data.hasOwnProperty('depth')) {
                    obj['depth'] = _ApiClient2.default.convertToType(data['depth'], 'Number');
                }
                if (data.hasOwnProperty('level0')) {
                    obj['level0'] = _UInt64DTO2.default.constructFromObject(data['level0']);
                }
                if (data.hasOwnProperty('level1')) {
                    obj['level1'] = _UInt64DTO2.default.constructFromObject(data['level1']);
                }
                if (data.hasOwnProperty('level2')) {
                    obj['level2'] = _UInt64DTO2.default.constructFromObject(data['level2']);
                }
                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'Number');
                }
                if (data.hasOwnProperty('alias')) {
                    obj['alias'] = _AliasDTO2.default.constructFromObject(data['alias']);
                }
                if (data.hasOwnProperty('parentId')) {
                    obj['parentId'] = _UInt64DTO2.default.constructFromObject(data['parentId']);
                }
            }
            return obj;
        }

        /**
        * @member {String} owner
        */

        /**
        * @member {String} ownerAddress
        */

        /**
        * @member {module:model/UInt64DTO} startHeight
        */

        /**
        * @member {module:model/UInt64DTO} endHeight
        */

        /**
        * @member {Number} depth
        */

        /**
        * @member {module:model/UInt64DTO} level0
        */

        /**
        * @member {module:model/UInt64DTO} level1
        */

        /**
        * @member {module:model/UInt64DTO} level2
        */

        /**
        * @member {Number} type
        */

        /**
        * @member {module:model/AliasDTO} alias
        */

        /**
        * @member {module:model/UInt64DTO} parentId
        */

    }]);

    return NamespaceDTO;
}();

exports.default = NamespaceDTO;
//# sourceMappingURL=NamespaceDTO.js.map