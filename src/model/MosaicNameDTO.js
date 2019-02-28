/*
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
 * OpenAPI spec version: 1.0.12
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import UInt64DTO from './UInt64DTO';





/**
* The MosaicNameDTO model module.
* @module model/MosaicNameDTO
* @version 1.0.12
*/
export default class MosaicNameDTO {
    /**
    * Constructs a new <code>MosaicNameDTO</code>.
    * @alias module:model/MosaicNameDTO
    * @class
    * @param parentId {module:model/UInt64DTO} 
    * @param mosaicId {module:model/UInt64DTO} 
    * @param name {String} 
    */

    constructor(parentId, mosaicId, name) {
        

        
        

        this['parentId'] = parentId;this['mosaicId'] = mosaicId;this['name'] = name;

        
    }

    /**
    * Constructs a <code>MosaicNameDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/MosaicNameDTO} obj Optional instance to populate.
    * @return {module:model/MosaicNameDTO} The populated <code>MosaicNameDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MosaicNameDTO();

            
            
            

            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = UInt64DTO.constructFromObject(data['parentId']);
            }
            if (data.hasOwnProperty('mosaicId')) {
                obj['mosaicId'] = UInt64DTO.constructFromObject(data['mosaicId']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/UInt64DTO} parentId
    */
    parentId = undefined;
    /**
    * @member {module:model/UInt64DTO} mosaicId
    */
    mosaicId = undefined;
    /**
    * @member {String} name
    */
    name = undefined;








}


