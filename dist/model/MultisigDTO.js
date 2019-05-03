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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The MultisigDTO model module.
* @module model/MultisigDTO
* @version 1.0.13
*/
var MultisigDTO = function () {
    /**
    * Constructs a new <code>MultisigDTO</code>.
    * @alias module:model/MultisigDTO
    * @class
    * @param account {String} 
    * @param minApproval {Number} 
    * @param minRemoval {Number} 
    * @param cosignatories {Array.<String>} 
    * @param multisigAccounts {Array.<String>} 
    */

    function MultisigDTO(account, minApproval, minRemoval, cosignatories, multisigAccounts) {
        _classCallCheck(this, MultisigDTO);

        this.account = undefined;
        this.accountAddress = undefined;
        this.minApproval = undefined;
        this.minRemoval = undefined;
        this.cosignatories = undefined;
        this.multisigAccounts = undefined;


        this['account'] = account;this['minApproval'] = minApproval;this['minRemoval'] = minRemoval;this['cosignatories'] = cosignatories;this['multisigAccounts'] = multisigAccounts;
    }

    /**
    * Constructs a <code>MultisigDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MultisigDTO} obj Optional instance to populate.
    * @return {module:model/MultisigDTO} The populated <code>MultisigDTO</code> instance.
    */


    _createClass(MultisigDTO, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new MultisigDTO();

                if (data.hasOwnProperty('account')) {
                    obj['account'] = _ApiClient2.default.convertToType(data['account'], 'String');
                }
                if (data.hasOwnProperty('accountAddress')) {
                    obj['accountAddress'] = _ApiClient2.default.convertToType(data['accountAddress'], 'String');
                }
                if (data.hasOwnProperty('minApproval')) {
                    obj['minApproval'] = _ApiClient2.default.convertToType(data['minApproval'], 'Number');
                }
                if (data.hasOwnProperty('minRemoval')) {
                    obj['minRemoval'] = _ApiClient2.default.convertToType(data['minRemoval'], 'Number');
                }
                if (data.hasOwnProperty('cosignatories')) {
                    obj['cosignatories'] = _ApiClient2.default.convertToType(data['cosignatories'], ['String']);
                }
                if (data.hasOwnProperty('multisigAccounts')) {
                    obj['multisigAccounts'] = _ApiClient2.default.convertToType(data['multisigAccounts'], ['String']);
                }
            }
            return obj;
        }

        /**
        * @member {String} account
        */

        /**
        * @member {String} accountAddress
        */

        /**
        * @member {Number} minApproval
        */

        /**
        * @member {Number} minRemoval
        */

        /**
        * @member {Array.<String>} cosignatories
        */

        /**
        * @member {Array.<String>} multisigAccounts
        */

    }]);

    return MultisigDTO;
}();

exports.default = MultisigDTO;
//# sourceMappingURL=MultisigDTO.js.map