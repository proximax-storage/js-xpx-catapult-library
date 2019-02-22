/**
 * Catapult REST API Reference
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.11
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import BlockDTO from './BlockDTO';
import BlockMetaDTO from './BlockMetaDTO';





/**
* The BlockInfoDTO model module.
* @module model/BlockInfoDTO
* @version 1.0.11
*/
export default class BlockInfoDTO {
    /**
    * Constructs a new <code>BlockInfoDTO</code>.
    * @alias module:model/BlockInfoDTO
    * @class
    * @param meta {module:model/BlockMetaDTO} 
    * @param block {module:model/BlockDTO} 
    */

    constructor(meta, block) {
        

        
        

        this['meta'] = meta;this['block'] = block;

        
    }

    /**
    * Constructs a <code>BlockInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BlockInfoDTO} obj Optional instance to populate.
    * @return {module:model/BlockInfoDTO} The populated <code>BlockInfoDTO</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BlockInfoDTO();

            
            
            

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = BlockMetaDTO.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('block')) {
                obj['block'] = BlockDTO.constructFromObject(data['block']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/BlockMetaDTO} meta
    */
    meta = undefined;
    /**
    * @member {module:model/BlockDTO} block
    */
    block = undefined;








}


