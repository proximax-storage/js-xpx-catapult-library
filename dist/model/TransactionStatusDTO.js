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
* The TransactionStatusDTO model module.
* @module model/TransactionStatusDTO
* @version 1.0.13
*/
var TransactionStatusDTO = function () {
    /**
    * Constructs a new <code>TransactionStatusDTO</code>.
    * @alias module:model/TransactionStatusDTO
    * @class
    * @param status {String} 
    */

    function TransactionStatusDTO(status) {
        _classCallCheck(this, TransactionStatusDTO);

        this.group = undefined;
        this.status = undefined;
        this.hash = undefined;
        this.deadline = undefined;
        this.height = undefined;


        this['status'] = status;
    }

    /**
    * Constructs a <code>TransactionStatusDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TransactionStatusDTO} obj Optional instance to populate.
    * @return {module:model/TransactionStatusDTO} The populated <code>TransactionStatusDTO</code> instance.
    */


    _createClass(TransactionStatusDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new TransactionStatusDTO();

                if (data.hasOwnProperty('group')) {
                    obj['group'] = _ApiClient2.default.convertToType(data['group'], 'String');
                }
                if (data.hasOwnProperty('status')) {
                    obj['status'] = _ApiClient2.default.convertToType(data['status'], 'String');
                }
                if (data.hasOwnProperty('hash')) {
                    obj['hash'] = _ApiClient2.default.convertToType(data['hash'], 'String');
                }
                if (data.hasOwnProperty('deadline')) {
                    obj['deadline'] = _UInt64DTO2.default.constructFromObject(data['deadline']);
                }
                if (data.hasOwnProperty('height')) {
                    obj['height'] = _UInt64DTO2.default.constructFromObject(data['height']);
                }
            }
            return obj;
        }

        /**
        * @member {String} group
        */

        /**
        * @member {String} status
        */

        /**
        * @member {String} hash
        */

        /**
        * @member {module:model/UInt64DTO} deadline
        */

        /**
        * @member {module:model/UInt64DTO} height
        */

    }]);

    return TransactionStatusDTO;
}();

exports.default = TransactionStatusDTO;
//# sourceMappingURL=TransactionStatusDTO.js.map