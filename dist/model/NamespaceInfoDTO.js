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

var _NamespaceDTO = require('./NamespaceDTO');

var _NamespaceDTO2 = _interopRequireDefault(_NamespaceDTO);

var _NamespaceMetaDTO = require('./NamespaceMetaDTO');

var _NamespaceMetaDTO2 = _interopRequireDefault(_NamespaceMetaDTO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The NamespaceInfoDTO model module.
* @module model/NamespaceInfoDTO
* @version 1.0.13
*/
var NamespaceInfoDTO = function () {
    /**
    * Constructs a new <code>NamespaceInfoDTO</code>.
    * @alias module:model/NamespaceInfoDTO
    * @class
    * @param meta {module:model/NamespaceMetaDTO} 
    * @param namespace {module:model/NamespaceDTO} 
    */

    function NamespaceInfoDTO(meta, namespace) {
        _classCallCheck(this, NamespaceInfoDTO);

        this.meta = undefined;
        this.namespace = undefined;


        this['meta'] = meta;this['namespace'] = namespace;
    }

    /**
    * Constructs a <code>NamespaceInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NamespaceInfoDTO} obj Optional instance to populate.
    * @return {module:model/NamespaceInfoDTO} The populated <code>NamespaceInfoDTO</code> instance.
    */


    _createClass(NamespaceInfoDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new NamespaceInfoDTO();

                if (data.hasOwnProperty('meta')) {
                    obj['meta'] = _NamespaceMetaDTO2.default.constructFromObject(data['meta']);
                }
                if (data.hasOwnProperty('namespace')) {
                    obj['namespace'] = _NamespaceDTO2.default.constructFromObject(data['namespace']);
                }
            }
            return obj;
        }

        /**
        * @member {module:model/NamespaceMetaDTO} meta
        */

        /**
        * @member {module:model/NamespaceDTO} namespace
        */

    }]);

    return NamespaceInfoDTO;
}();

exports.default = NamespaceInfoDTO;
//# sourceMappingURL=NamespaceInfoDTO.js.map