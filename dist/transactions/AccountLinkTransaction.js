'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VerifiableTransaction = require('./VerifiableTransaction');

var _VerifiableTransaction2 = _interopRequireDefault(_VerifiableTransaction);

var _AccountLinkTransactionBuffer = require('../buffers/AccountLinkTransactionBuffer');

var _AccountLinkTransactionBuffer2 = _interopRequireDefault(_AccountLinkTransactionBuffer);

var _AccountLinkTransactionSchema = require('../schema/AccountLinkTransactionSchema');

var _AccountLinkTransactionSchema2 = _interopRequireDefault(_AccountLinkTransactionSchema);

var _convert = require('../coders/convert');

var _convert2 = _interopRequireDefault(_convert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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
 * @module transactions/AccountLinkTransaction
 */


var _require = require('flatbuffers'),
    flatbuffers = _require.flatbuffers;

var AccountLinkTransactionBuffer = _AccountLinkTransactionBuffer2.default.Buffers.AccountLinkTransactionBuffer;

var AccountLinkTransaction = function (_VerifiableTransactio) {
	_inherits(AccountLinkTransaction, _VerifiableTransactio);

	function AccountLinkTransaction() {
		_classCallCheck(this, AccountLinkTransaction);

		return _possibleConstructorReturn(this, (AccountLinkTransaction.__proto__ || Object.getPrototypeOf(AccountLinkTransaction)).apply(this, arguments));
	}

	_createClass(AccountLinkTransaction, null, [{
		key: 'Builder',
		get: function get() {
			var Builder = function () {
				function Builder() {
					_classCallCheck(this, Builder);

					this.fee = [0, 0];
					this.version = 36867;
					this.type = 0x414C;
				}

				_createClass(Builder, [{
					key: 'addFee',
					value: function addFee(fee) {
						this.fee = fee;
						return this;
					}
				}, {
					key: 'addVersion',
					value: function addVersion(version) {
						this.version = version;
						return this;
					}
				}, {
					key: 'addType',
					value: function addType(type) {
						this.type = type;
						return this;
					}
				}, {
					key: 'addDeadline',
					value: function addDeadline(deadline) {
						this.deadline = deadline;
						return this;
					}
				}, {
					key: 'addRemoteAccountKey',
					value: function addRemoteAccountKey(remoteAccountKey) {
						this.remoteAccountKey = _convert2.default.hexToUint8(remoteAccountKey);
						return this;
					}
				}, {
					key: 'addLinkAction',
					value: function addLinkAction(linkAction) {
						this.linkAction = linkAction;
						return this;
					}
				}, {
					key: 'build',
					value: function build() {
						var builder = new flatbuffers.Builder(1);

						// Create vectors
						var signatureVector = AccountLinkTransactionBuffer.createSignatureVector(builder, Array.apply(undefined, _toConsumableArray(Array(64))).map(Number.prototype.valueOf, 0));
						var signerVector = AccountLinkTransactionBuffer.createSignerVector(builder, Array.apply(undefined, _toConsumableArray(Array(32))).map(Number.prototype.valueOf, 0));
						var deadlineVector = AccountLinkTransactionBuffer.createDeadlineVector(builder, this.deadline);
						var feeVector = AccountLinkTransactionBuffer.createFeeVector(builder, this.fee);
						var remoteAccountKeyVector = AccountLinkTransactionBuffer.createRemoteAccountKeyVector(builder, this.remoteAccountKey);

						AccountLinkTransactionBuffer.startAccountLinkTransactionBuffer(builder);
						AccountLinkTransactionBuffer.addSize(builder, 154);
						AccountLinkTransactionBuffer.addSignature(builder, signatureVector);
						AccountLinkTransactionBuffer.addSigner(builder, signerVector);
						AccountLinkTransactionBuffer.addVersion(builder, this.version);
						AccountLinkTransactionBuffer.addType(builder, this.type);
						AccountLinkTransactionBuffer.addFee(builder, feeVector);
						AccountLinkTransactionBuffer.addDeadline(builder, deadlineVector);
						AccountLinkTransactionBuffer.addRemoteAccountKey(builder, remoteAccountKeyVector);
						AccountLinkTransactionBuffer.addLinkAction(builder, this.linkAction);

						// Calculate size

						var codedTransfer = AccountLinkTransactionBuffer.endAccountLinkTransactionBuffer(builder);
						builder.finish(codedTransfer);

						var bytes = builder.asUint8Array();
						return new AccountLinkTransaction(bytes, _AccountLinkTransactionSchema2.default);
					}
				}]);

				return Builder;
			}();

			return Builder;
		}
	}]);

	return AccountLinkTransaction;
}(_VerifiableTransaction2.default);

exports.default = AccountLinkTransaction;
//# sourceMappingURL=AccountLinkTransaction.js.map