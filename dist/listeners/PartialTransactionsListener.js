'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Listener2 = require('./Listener');

var _Listener3 = _interopRequireDefault(_Listener2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 NEM
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
 * Partial transactions listener
 * @module listeners/PartialTransactionsListener
 */
var PartialTransactionsListener = function (_Listener) {
  _inherits(PartialTransactionsListener, _Listener);

  function PartialTransactionsListener() {
    _classCallCheck(this, PartialTransactionsListener);

    return _possibleConstructorReturn(this, (PartialTransactionsListener.__proto__ || Object.getPrototypeOf(PartialTransactionsListener)).apply(this, arguments));
  }

  _createClass(PartialTransactionsListener, [{
    key: 'addedToAccount',

    /**
     * Returns partial transactions for a given address when they are created
     * @param {string} address address to subscribe
     * @param {WebSocketCallback} callback called when a new partial transaction is announced into the network
     */
    value: function addedToAccount(address, callback) {
      this.subscribeToChannel('partialAdded/' + address, callback);
    }

    /**
     * Returns partial transactions hashes for a given address when they are confirmed
     * @param {string} address address to subscribe
     * @param {WebSocketCallback} callback called when a new partial transaction is announced into the network
     */

  }, {
    key: 'removedFromAccount',
    value: function removedFromAccount(address, callback) {
      this.subscribeToChannel('partialRemoved/' + address, callback);
    }
  }]);

  return PartialTransactionsListener;
}(_Listener3.default);

exports.default = PartialTransactionsListener;
//# sourceMappingURL=PartialTransactionsListener.js.map