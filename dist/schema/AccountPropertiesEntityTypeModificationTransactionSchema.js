'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Schema = require('./Schema');

/**
 * @module schema/AccountPropertiesEntityTypeModificationTransactionSchema
 */

/**
 * Account properties address transaction schema
 * @const {module:schema/Schema}
 */
exports.default = new _Schema.Schema([(0, _Schema.uint)('size'), (0, _Schema.array)('signature'), (0, _Schema.array)('signer'), (0, _Schema.ushort)('version'), (0, _Schema.ushort)('type'), (0, _Schema.array)('fee', _Schema.TypeSize.INT), (0, _Schema.array)('deadline', _Schema.TypeSize.INT), (0, _Schema.ubyte)('propertyType'), (0, _Schema.ubyte)('modificationCount'), (0, _Schema.tableArray)('modifications', [(0, _Schema.ubyte)('modificationType'), (0, _Schema.ushort)('value')])]); /*
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
//# sourceMappingURL=AccountPropertiesEntityTypeModificationTransactionSchema.js.map