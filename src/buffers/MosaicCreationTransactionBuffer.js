/*
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

// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var Catapult = Catapult || {};

/**
 * @const
 * @namespace
 */
Catapult.Buffers = Catapult.Buffers || {};

/**
 * @constructor
 */
Catapult.Buffers.MosaicCreationTransactionBuffer = function () {
	/**
	 * @type {flatbuffers.ByteBuffer}
	 */
	this.bb = null;

	/**
	 * @type {number}
	 */
	this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Catapult.Buffers.MosaicCreationTransactionBuffer}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.__init = function (i, bb) {
	this.bb_pos = i;
	this.bb = bb;
	return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Catapult.Buffers.MosaicCreationTransactionBuffer=} obj
 * @returns {Catapult.Buffers.MosaicCreationTransactionBuffer}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.getRootAsMosaicCreationTransactionBuffer = function (bb, obj) {
	return (obj || new Catapult.Buffers.MosaicCreationTransactionBuffer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.size = function () {
	var offset = this.bb.__offset(this.bb_pos, 4);
	return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.signature = function (index) {
	var offset = this.bb.__offset(this.bb_pos, 6);
	return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.signatureLength = function () {
	var offset = this.bb.__offset(this.bb_pos, 6);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.signatureArray = function () {
	var offset = this.bb.__offset(this.bb_pos, 6);
	return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.signer = function (index) {
	var offset = this.bb.__offset(this.bb_pos, 8);
	return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.signerLength = function () {
	var offset = this.bb.__offset(this.bb_pos, 8);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.signerArray = function () {
	var offset = this.bb.__offset(this.bb_pos, 8);
	return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.version = function () {
	var offset = this.bb.__offset(this.bb_pos, 10);
	return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.type = function () {
	var offset = this.bb.__offset(this.bb_pos, 12);
	return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.fee = function (index) {
	var offset = this.bb.__offset(this.bb_pos, 14);
	return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.feeLength = function () {
	var offset = this.bb.__offset(this.bb_pos, 14);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.feeArray = function () {
	var offset = this.bb.__offset(this.bb_pos, 14);
	return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.deadline = function (index) {
	var offset = this.bb.__offset(this.bb_pos, 16);
	return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.deadlineLength = function () {
	var offset = this.bb.__offset(this.bb_pos, 16);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.deadlineArray = function () {
	var offset = this.bb.__offset(this.bb_pos, 16);
	return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.nonce = function (index) {
	var offset = this.bb.__offset(this.bb_pos, 18);
	return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.nonceLength = function () {
	var offset = this.bb.__offset(this.bb_pos, 18);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.nonceArray = function () {
	var offset = this.bb.__offset(this.bb_pos, 18);
	return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.mosaicId = function (index) {
	var offset = this.bb.__offset(this.bb_pos, 20);
	return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.mosaicIdLength = function () {
	var offset = this.bb.__offset(this.bb_pos, 20);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.mosaicIdArray = function () {
	var offset = this.bb.__offset(this.bb_pos, 20);
	return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.numOptionalProperties = function () {
	var offset = this.bb.__offset(this.bb_pos, 22);
	return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.flags = function () {
	var offset = this.bb.__offset(this.bb_pos, 24);
	return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.divisibility = function () {
	var offset = this.bb.__offset(this.bb_pos, 26);
	return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.indicateDuration = function () {
	var offset = this.bb.__offset(this.bb_pos, 28);
	return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.duration = function (index) {
	var offset = this.bb.__offset(this.bb_pos, 30);
	return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.durationLength = function () {
	var offset = this.bb.__offset(this.bb_pos, 30);
	return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.prototype.durationArray = function () {
	var offset = this.bb.__offset(this.bb_pos, 30);
	return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.startMosaicCreationTransactionBuffer = function (builder) {
	 builder.startObject(14);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} size
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.addSize = function (builder, size) {
	 builder.addFieldInt32(0, size, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signatureOffset
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.addSignature = function (builder, signatureOffset) {
	 builder.addFieldOffset(1, signatureOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.createSignatureVector = function (builder, data) {
	builder.startVector(1, data.length, 1);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt8(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.startSignatureVector = function (builder, numElems) {
	builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signerOffset
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.addSigner = function (builder, signerOffset) {
	builder.addFieldOffset(2, signerOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.createSignerVector = function (builder, data) {
	builder.startVector(1, data.length, 1);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt8(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.startSignerVector = function (builder, numElems) {
	builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} version
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.addVersion = function (builder, version) {
	builder.addFieldInt16(3, version, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.addType = function (builder, type) {
	builder.addFieldInt16(4, type, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} feeOffset
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.addFee = function (builder, feeOffset) {
	builder.addFieldOffset(5, feeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.createFeeVector = function (builder, data) {
	builder.startVector(4, data.length, 4);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt32(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.startFeeVector = function (builder, numElems) {
	builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} deadlineOffset
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.addDeadline = function (builder, deadlineOffset) {
	builder.addFieldOffset(6, deadlineOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.createDeadlineVector = function (builder, data) {
	builder.startVector(4, data.length, 4);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt32(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.startDeadlineVector = function (builder, numElems) {
	builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} nonce
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.addNonce = function (builder, nonceOffset) {

	builder.addFieldOffset(7, nonceOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.createNonceVector = function (builder, data) {
	builder.startVector(1, data.length, 1);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt8(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.startNonceVector = function (builder, numElems) {
	builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} mosaicIdOffset
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.addMosaicId = function (builder, mosaicIdOffset) {
	builder.addFieldOffset(8, mosaicIdOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.createMosaicIdVector = function (builder, data) {
	builder.startVector(4, data.length, 4);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt32(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.startMosaicIdVector = function (builder, numElems) {
	builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numOptionalProperties
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.addNumOptionalProperties = function (builder, numOptionalProperties) {
	builder.addFieldInt8(9, numOptionalProperties, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} flags
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.addFlags = function (builder, flags) {
	builder.addFieldInt8(10, flags, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} divisibility
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.addDivisibility = function (builder, divisibility) {
	builder.addFieldInt8(11, divisibility, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} indicateDuration
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.addIndicateDuration = function (builder, indicateDuration) {
	builder.addFieldInt8(12, indicateDuration, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} durationOffset
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.addDuration = function (builder, durationOffset) {
	builder.addFieldOffset(13, durationOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.createDurationVector = function (builder, data) {
	builder.startVector(4, data.length, 4);
	for (var i = data.length - 1; i >= 0; i--) {
		builder.addInt32(data[i]);
	}
	return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.startDurationVector = function (builder, numElems) {
	builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.endMosaicCreationTransactionBuffer = function (builder) {
	var offset = builder.endObject();
	return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Catapult.Buffers.MosaicCreationTransactionBuffer.finishMosaicCreationTransactionBufferBuffer = function (builder, offset) {
	builder.finish(offset);
};

// Exports for Node.js and RequireJS
export default Catapult;
