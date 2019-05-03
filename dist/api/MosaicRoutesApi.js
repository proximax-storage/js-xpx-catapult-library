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

var _MosaicIds = require('../model/MosaicIds');

var _MosaicIds2 = _interopRequireDefault(_MosaicIds);

var _MosaicInfoDTO = require('../model/MosaicInfoDTO');

var _MosaicInfoDTO2 = _interopRequireDefault(_MosaicInfoDTO);

var _MosaicNameDTO = require('../model/MosaicNameDTO');

var _MosaicNameDTO2 = _interopRequireDefault(_MosaicNameDTO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* MosaicRoutes service.
* @module api/MosaicRoutesApi
* @version 1.0.13
*/
var MosaicRoutesApi = function () {

  /**
  * Constructs a new MosaicRoutesApi. 
  * @alias module:api/MosaicRoutesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MosaicRoutesApi(apiClient) {
    _classCallCheck(this, MosaicRoutesApi);

    this.apiClient = apiClient || _ApiClient2.default.instance;
  }

  /**
   * Get mosaic information
   * Gets the mosaic definition for a given mosaicId.
   * @param {String} mosaicId The mosaic identifier.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MosaicInfoDTO} and HTTP response
   */


  _createClass(MosaicRoutesApi, [{
    key: 'getMosaicWithHttpInfo',
    value: function getMosaicWithHttpInfo(mosaicId) {
      var postBody = null;

      // verify the required parameter 'mosaicId' is set
      if (mosaicId === undefined || mosaicId === null) {
        throw new Error("Missing the required parameter 'mosaicId' when calling getMosaic");
      }

      var pathParams = {
        'mosaicId': mosaicId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MosaicInfoDTO2.default;

      return this.apiClient.callApi('/mosaic/{mosaicId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get mosaic information
     * Gets the mosaic definition for a given mosaicId.
     * @param {String} mosaicId The mosaic identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MosaicInfoDTO}
     */

  }, {
    key: 'getMosaic',
    value: function getMosaic(mosaicId) {
      return this.getMosaicWithHttpInfo(mosaicId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get mosaics information for an array of mosaics
     * Gets an array of mosaic definition.
     * @param {module:model/MosaicIds} mosaicIds An array of mosaicIds.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/MosaicInfoDTO>} and HTTP response
     */

  }, {
    key: 'getMosaicsWithHttpInfo',
    value: function getMosaicsWithHttpInfo(mosaicIds) {
      var postBody = mosaicIds;

      // verify the required parameter 'mosaicIds' is set
      if (mosaicIds === undefined || mosaicIds === null) {
        throw new Error("Missing the required parameter 'mosaicIds' when calling getMosaics");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_MosaicInfoDTO2.default];

      return this.apiClient.callApi('/mosaic', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get mosaics information for an array of mosaics
     * Gets an array of mosaic definition.
     * @param {module:model/MosaicIds} mosaicIds An array of mosaicIds.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/MosaicInfoDTO>}
     */

  }, {
    key: 'getMosaics',
    value: function getMosaics(mosaicIds) {
      return this.getMosaicsWithHttpInfo(mosaicIds).then(function (response_and_data) {
        return response_and_data.data;
      });
    }

    /**
     * Get readable names for a set of mosaics
     * Returns friendly names for mosaics.
     * @param {module:model/MosaicIds} mosaicIds An array of mosaicIds.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/MosaicNameDTO>} and HTTP response
     */

  }, {
    key: 'getMosaicsNameWithHttpInfo',
    value: function getMosaicsNameWithHttpInfo(mosaicIds) {
      var postBody = mosaicIds;

      // verify the required parameter 'mosaicIds' is set
      if (mosaicIds === undefined || mosaicIds === null) {
        throw new Error("Missing the required parameter 'mosaicIds' when calling getMosaicsName");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_MosaicNameDTO2.default];

      return this.apiClient.callApi('/mosaic/names', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }

    /**
     * Get readable names for a set of mosaics
     * Returns friendly names for mosaics.
     * @param {module:model/MosaicIds} mosaicIds An array of mosaicIds.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/MosaicNameDTO>}
     */

  }, {
    key: 'getMosaicsName',
    value: function getMosaicsName(mosaicIds) {
      return this.getMosaicsNameWithHttpInfo(mosaicIds).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return MosaicRoutesApi;
}();

exports.default = MosaicRoutesApi;
//# sourceMappingURL=MosaicRoutesApi.js.map