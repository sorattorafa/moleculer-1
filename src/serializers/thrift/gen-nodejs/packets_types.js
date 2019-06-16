//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

let thrift = require("thrift");
let Thrift = thrift.Thrift;
let Q = thrift.Q;


let ttypes = module.exports = {};
/* istanbul ignore next */
let PacketEvent = module.exports.PacketEvent = function(args) {
	this.ver = null;
	this.sender = null;
	this.event = null;
	this.data = null;
	this.groups = null;
	this.broadcast = null;
	if (args) {
		if (args.ver !== undefined && args.ver !== null) {
			this.ver = args.ver;
		}
		if (args.sender !== undefined && args.sender !== null) {
			this.sender = args.sender;
		}
		if (args.event !== undefined && args.event !== null) {
			this.event = args.event;
		}
		if (args.data !== undefined && args.data !== null) {
			this.data = args.data;
		}
		if (args.groups !== undefined && args.groups !== null) {
			this.groups = Thrift.copyList(args.groups, [null]);
		}
		if (args.broadcast !== undefined && args.broadcast !== null) {
			this.broadcast = args.broadcast;
		}
	}
};
PacketEvent.prototype = {};
PacketEvent.prototype.read = function(input) {
	input.readStructBegin();
	while (true)
	{
		let ret = input.readFieldBegin();
		let fname = ret.fname;
		let ftype = ret.ftype;
		let fid = ret.fid;
		if (ftype == Thrift.Type.STOP) {
			break;
		}
		switch (fid)
		{
			case 1:
				if (ftype == Thrift.Type.STRING) {
					this.ver = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 2:
				if (ftype == Thrift.Type.STRING) {
					this.sender = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 3:
				if (ftype == Thrift.Type.STRING) {
					this.event = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 4:
				if (ftype == Thrift.Type.STRING) {
					this.data = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 5:
				if (ftype == Thrift.Type.LIST) {
					let _size0 = 0;
					var _rtmp34;
					this.groups = [];
					let _etype3 = 0;
					_rtmp34 = input.readListBegin();
					_etype3 = _rtmp34.etype;
					_size0 = _rtmp34.size;
					for (let _i5 = 0; _i5 < _size0; ++_i5)
					{
						let elem6 = null;
						elem6 = input.readString();
						this.groups.push(elem6);
					}
					input.readListEnd();
				} else {
					input.skip(ftype);
				}
				break;
			case 6:
				if (ftype == Thrift.Type.BOOL) {
					this.broadcast = input.readBool();
				} else {
					input.skip(ftype);
				}
				break;
			default:
				input.skip(ftype);
		}
		input.readFieldEnd();
	}
	input.readStructEnd();
	return;
};

PacketEvent.prototype.write = function(output) {
	output.writeStructBegin("PacketEvent");
	if (this.ver !== null && this.ver !== undefined) {
		output.writeFieldBegin("ver", Thrift.Type.STRING, 1);
		output.writeString(this.ver);
		output.writeFieldEnd();
	}
	if (this.sender !== null && this.sender !== undefined) {
		output.writeFieldBegin("sender", Thrift.Type.STRING, 2);
		output.writeString(this.sender);
		output.writeFieldEnd();
	}
	if (this.event !== null && this.event !== undefined) {
		output.writeFieldBegin("event", Thrift.Type.STRING, 3);
		output.writeString(this.event);
		output.writeFieldEnd();
	}
	if (this.data !== null && this.data !== undefined) {
		output.writeFieldBegin("data", Thrift.Type.STRING, 4);
		output.writeString(this.data);
		output.writeFieldEnd();
	}
	if (this.groups !== null && this.groups !== undefined) {
		output.writeFieldBegin("groups", Thrift.Type.LIST, 5);
		output.writeListBegin(Thrift.Type.STRING, this.groups.length);
		for (let iter7 in this.groups)
		{
			if (this.groups.hasOwnProperty(iter7))
			{
				iter7 = this.groups[iter7];
				output.writeString(iter7);
			}
		}
		output.writeListEnd();
		output.writeFieldEnd();
	}
	if (this.broadcast !== null && this.broadcast !== undefined) {
		output.writeFieldBegin("broadcast", Thrift.Type.BOOL, 6);
		output.writeBool(this.broadcast);
		output.writeFieldEnd();
	}
	output.writeFieldStop();
	output.writeStructEnd();
	return;
};

let PacketRequest = module.exports.PacketRequest = function(args) {
	this.ver = null;
	this.sender = null;
	this.id = null;
	this.action = null;
	this.params = null;
	this.meta = null;
	this.timeout = null;
	this.level = null;
	this.tracing = null;
	this.parentID = null;
	this.requestID = null;
	this.stream = null;
	this.seq = null;
	this.caller = null;
	if (args) {
		if (args.ver !== undefined && args.ver !== null) {
			this.ver = args.ver;
		}
		if (args.sender !== undefined && args.sender !== null) {
			this.sender = args.sender;
		}
		if (args.id !== undefined && args.id !== null) {
			this.id = args.id;
		}
		if (args.action !== undefined && args.action !== null) {
			this.action = args.action;
		}
		if (args.params !== undefined && args.params !== null) {
			this.params = args.params;
		}
		if (args.meta !== undefined && args.meta !== null) {
			this.meta = args.meta;
		}
		if (args.timeout !== undefined && args.timeout !== null) {
			this.timeout = args.timeout;
		}
		if (args.level !== undefined && args.level !== null) {
			this.level = args.level;
		}
		if (args.tracing !== undefined && args.tracing !== null) {
			this.tracing = args.tracing;
		}
		if (args.parentID !== undefined && args.parentID !== null) {
			this.parentID = args.parentID;
		}
		if (args.requestID !== undefined && args.requestID !== null) {
			this.requestID = args.requestID;
		}
		if (args.stream !== undefined && args.stream !== null) {
			this.stream = args.stream;
		}
		if (args.seq !== undefined && args.seq !== null) {
			this.seq = args.seq;
		}
		if (args.caller !== undefined && args.caller !== null) {
			this.caller = args.caller;
		}
	}
};
PacketRequest.prototype = {};
PacketRequest.prototype.read = function(input) {
	input.readStructBegin();
	while (true)
	{
		let ret = input.readFieldBegin();
		let fname = ret.fname;
		let ftype = ret.ftype;
		let fid = ret.fid;
		if (ftype == Thrift.Type.STOP) {
			break;
		}
		switch (fid)
		{
			case 1:
				if (ftype == Thrift.Type.STRING) {
					this.ver = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 2:
				if (ftype == Thrift.Type.STRING) {
					this.sender = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 3:
				if (ftype == Thrift.Type.STRING) {
					this.id = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 4:
				if (ftype == Thrift.Type.STRING) {
					this.action = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 5:
				if (ftype == Thrift.Type.STRING) {
					this.params = input.readBinary();
				} else {
					input.skip(ftype);
				}
				break;
			case 6:
				if (ftype == Thrift.Type.STRING) {
					this.meta = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 7:
				if (ftype == Thrift.Type.DOUBLE) {
					this.timeout = input.readDouble();
				} else {
					input.skip(ftype);
				}
				break;
			case 8:
				if (ftype == Thrift.Type.I32) {
					this.level = input.readI32();
				} else {
					input.skip(ftype);
				}
				break;
			case 9:
				if (ftype == Thrift.Type.BOOL) {
					this.tracing = input.readBool();
				} else {
					input.skip(ftype);
				}
				break;
			case 10:
				if (ftype == Thrift.Type.STRING) {
					this.parentID = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 11:
				if (ftype == Thrift.Type.STRING) {
					this.requestID = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 12:
				if (ftype == Thrift.Type.BOOL) {
					this.stream = input.readBool();
				} else {
					input.skip(ftype);
				}
				break;
			case 13:
				if (ftype == Thrift.Type.I32) {
					this.seq = input.readI32();
				} else {
					input.skip(ftype);
				}
				break;
			case 14:
				if (ftype == Thrift.Type.STRING) {
					this.caller = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			default:
				input.skip(ftype);
		}
		input.readFieldEnd();
	}
	input.readStructEnd();
	return;
};

PacketRequest.prototype.write = function(output) {
	output.writeStructBegin("PacketRequest");
	if (this.ver !== null && this.ver !== undefined) {
		output.writeFieldBegin("ver", Thrift.Type.STRING, 1);
		output.writeString(this.ver);
		output.writeFieldEnd();
	}
	if (this.sender !== null && this.sender !== undefined) {
		output.writeFieldBegin("sender", Thrift.Type.STRING, 2);
		output.writeString(this.sender);
		output.writeFieldEnd();
	}
	if (this.id !== null && this.id !== undefined) {
		output.writeFieldBegin("id", Thrift.Type.STRING, 3);
		output.writeString(this.id);
		output.writeFieldEnd();
	}
	if (this.action !== null && this.action !== undefined) {
		output.writeFieldBegin("action", Thrift.Type.STRING, 4);
		output.writeString(this.action);
		output.writeFieldEnd();
	}
	if (this.params !== null && this.params !== undefined) {
		output.writeFieldBegin("params", Thrift.Type.STRING, 5);
		output.writeBinary(this.params);
		output.writeFieldEnd();
	}
	if (this.meta !== null && this.meta !== undefined) {
		output.writeFieldBegin("meta", Thrift.Type.STRING, 6);
		output.writeString(this.meta);
		output.writeFieldEnd();
	}
	if (this.timeout !== null && this.timeout !== undefined) {
		output.writeFieldBegin("timeout", Thrift.Type.DOUBLE, 7);
		output.writeDouble(this.timeout);
		output.writeFieldEnd();
	}
	if (this.level !== null && this.level !== undefined) {
		output.writeFieldBegin("level", Thrift.Type.I32, 8);
		output.writeI32(this.level);
		output.writeFieldEnd();
	}
	if (this.tracing !== null && this.tracing !== undefined) {
		output.writeFieldBegin("tracing", Thrift.Type.BOOL, 9);
		output.writeBool(this.tracing);
		output.writeFieldEnd();
	}
	if (this.parentID !== null && this.parentID !== undefined) {
		output.writeFieldBegin("parentID", Thrift.Type.STRING, 10);
		output.writeString(this.parentID);
		output.writeFieldEnd();
	}
	if (this.requestID !== null && this.requestID !== undefined) {
		output.writeFieldBegin("requestID", Thrift.Type.STRING, 11);
		output.writeString(this.requestID);
		output.writeFieldEnd();
	}
	if (this.stream !== null && this.stream !== undefined) {
		output.writeFieldBegin("stream", Thrift.Type.BOOL, 12);
		output.writeBool(this.stream);
		output.writeFieldEnd();
	}
	if (this.seq !== null && this.seq !== undefined) {
		output.writeFieldBegin("seq", Thrift.Type.I32, 13);
		output.writeI32(this.seq);
		output.writeFieldEnd();
	}
	if (this.caller !== null && this.caller !== undefined) {
		output.writeFieldBegin("caller", Thrift.Type.STRING, 14);
		output.writeString(this.caller);
		output.writeFieldEnd();
	}
	output.writeFieldStop();
	output.writeStructEnd();
	return;
};

let PacketResponse = module.exports.PacketResponse = function(args) {
	this.ver = null;
	this.sender = null;
	this.id = null;
	this.success = null;
	this.data = null;
	this.error = null;
	this.meta = null;
	this.stream = null;
	this.seq = null;
	if (args) {
		if (args.ver !== undefined && args.ver !== null) {
			this.ver = args.ver;
		}
		if (args.sender !== undefined && args.sender !== null) {
			this.sender = args.sender;
		}
		if (args.id !== undefined && args.id !== null) {
			this.id = args.id;
		}
		if (args.success !== undefined && args.success !== null) {
			this.success = args.success;
		}
		if (args.data !== undefined && args.data !== null) {
			this.data = args.data;
		}
		if (args.error !== undefined && args.error !== null) {
			this.error = args.error;
		}
		if (args.meta !== undefined && args.meta !== null) {
			this.meta = args.meta;
		}
		if (args.stream !== undefined && args.stream !== null) {
			this.stream = args.stream;
		}
		if (args.seq !== undefined && args.seq !== null) {
			this.seq = args.seq;
		}
	}
};
PacketResponse.prototype = {};
PacketResponse.prototype.read = function(input) {
	input.readStructBegin();
	while (true)
	{
		let ret = input.readFieldBegin();
		let fname = ret.fname;
		let ftype = ret.ftype;
		let fid = ret.fid;
		if (ftype == Thrift.Type.STOP) {
			break;
		}
		switch (fid)
		{
			case 1:
				if (ftype == Thrift.Type.STRING) {
					this.ver = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 2:
				if (ftype == Thrift.Type.STRING) {
					this.sender = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 3:
				if (ftype == Thrift.Type.STRING) {
					this.id = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 4:
				if (ftype == Thrift.Type.BOOL) {
					this.success = input.readBool();
				} else {
					input.skip(ftype);
				}
				break;
			case 5:
				if (ftype == Thrift.Type.STRING) {
					this.data = input.readBinary();
				} else {
					input.skip(ftype);
				}
				break;
			case 6:
				if (ftype == Thrift.Type.STRING) {
					this.error = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 7:
				if (ftype == Thrift.Type.STRING) {
					this.meta = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 8:
				if (ftype == Thrift.Type.BOOL) {
					this.stream = input.readBool();
				} else {
					input.skip(ftype);
				}
				break;
			case 9:
				if (ftype == Thrift.Type.I32) {
					this.seq = input.readI32();
				} else {
					input.skip(ftype);
				}
				break;
			default:
				input.skip(ftype);
		}
		input.readFieldEnd();
	}
	input.readStructEnd();
	return;
};

PacketResponse.prototype.write = function(output) {
	output.writeStructBegin("PacketResponse");
	if (this.ver !== null && this.ver !== undefined) {
		output.writeFieldBegin("ver", Thrift.Type.STRING, 1);
		output.writeString(this.ver);
		output.writeFieldEnd();
	}
	if (this.sender !== null && this.sender !== undefined) {
		output.writeFieldBegin("sender", Thrift.Type.STRING, 2);
		output.writeString(this.sender);
		output.writeFieldEnd();
	}
	if (this.id !== null && this.id !== undefined) {
		output.writeFieldBegin("id", Thrift.Type.STRING, 3);
		output.writeString(this.id);
		output.writeFieldEnd();
	}
	if (this.success !== null && this.success !== undefined) {
		output.writeFieldBegin("success", Thrift.Type.BOOL, 4);
		output.writeBool(this.success);
		output.writeFieldEnd();
	}
	if (this.data !== null && this.data !== undefined) {
		output.writeFieldBegin("data", Thrift.Type.STRING, 5);
		output.writeBinary(this.data);
		output.writeFieldEnd();
	}
	if (this.error !== null && this.error !== undefined) {
		output.writeFieldBegin("error", Thrift.Type.STRING, 6);
		output.writeString(this.error);
		output.writeFieldEnd();
	}
	if (this.meta !== null && this.meta !== undefined) {
		output.writeFieldBegin("meta", Thrift.Type.STRING, 7);
		output.writeString(this.meta);
		output.writeFieldEnd();
	}
	if (this.stream !== null && this.stream !== undefined) {
		output.writeFieldBegin("stream", Thrift.Type.BOOL, 8);
		output.writeBool(this.stream);
		output.writeFieldEnd();
	}
	if (this.seq !== null && this.seq !== undefined) {
		output.writeFieldBegin("seq", Thrift.Type.I32, 9);
		output.writeI32(this.seq);
		output.writeFieldEnd();
	}
	output.writeFieldStop();
	output.writeStructEnd();
	return;
};

let PacketDiscover = module.exports.PacketDiscover = function(args) {
	this.ver = null;
	this.sender = null;
	if (args) {
		if (args.ver !== undefined && args.ver !== null) {
			this.ver = args.ver;
		}
		if (args.sender !== undefined && args.sender !== null) {
			this.sender = args.sender;
		}
	}
};
PacketDiscover.prototype = {};
PacketDiscover.prototype.read = function(input) {
	input.readStructBegin();
	while (true)
	{
		let ret = input.readFieldBegin();
		let fname = ret.fname;
		let ftype = ret.ftype;
		let fid = ret.fid;
		if (ftype == Thrift.Type.STOP) {
			break;
		}
		switch (fid)
		{
			case 1:
				if (ftype == Thrift.Type.STRING) {
					this.ver = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 2:
				if (ftype == Thrift.Type.STRING) {
					this.sender = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			default:
				input.skip(ftype);
		}
		input.readFieldEnd();
	}
	input.readStructEnd();
	return;
};

PacketDiscover.prototype.write = function(output) {
	output.writeStructBegin("PacketDiscover");
	if (this.ver !== null && this.ver !== undefined) {
		output.writeFieldBegin("ver", Thrift.Type.STRING, 1);
		output.writeString(this.ver);
		output.writeFieldEnd();
	}
	if (this.sender !== null && this.sender !== undefined) {
		output.writeFieldBegin("sender", Thrift.Type.STRING, 2);
		output.writeString(this.sender);
		output.writeFieldEnd();
	}
	output.writeFieldStop();
	output.writeStructEnd();
	return;
};

let Client = module.exports.Client = function(args) {
	this.type = null;
	this.version = null;
	this.langVersion = null;
	if (args) {
		if (args.type !== undefined && args.type !== null) {
			this.type = args.type;
		}
		if (args.version !== undefined && args.version !== null) {
			this.version = args.version;
		}
		if (args.langVersion !== undefined && args.langVersion !== null) {
			this.langVersion = args.langVersion;
		}
	}
};
Client.prototype = {};
Client.prototype.read = function(input) {
	input.readStructBegin();
	while (true)
	{
		let ret = input.readFieldBegin();
		let fname = ret.fname;
		let ftype = ret.ftype;
		let fid = ret.fid;
		if (ftype == Thrift.Type.STOP) {
			break;
		}
		switch (fid)
		{
			case 1:
				if (ftype == Thrift.Type.STRING) {
					this.type = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 2:
				if (ftype == Thrift.Type.STRING) {
					this.version = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 3:
				if (ftype == Thrift.Type.STRING) {
					this.langVersion = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			default:
				input.skip(ftype);
		}
		input.readFieldEnd();
	}
	input.readStructEnd();
	return;
};

Client.prototype.write = function(output) {
	output.writeStructBegin("Client");
	if (this.type !== null && this.type !== undefined) {
		output.writeFieldBegin("type", Thrift.Type.STRING, 1);
		output.writeString(this.type);
		output.writeFieldEnd();
	}
	if (this.version !== null && this.version !== undefined) {
		output.writeFieldBegin("version", Thrift.Type.STRING, 2);
		output.writeString(this.version);
		output.writeFieldEnd();
	}
	if (this.langVersion !== null && this.langVersion !== undefined) {
		output.writeFieldBegin("langVersion", Thrift.Type.STRING, 3);
		output.writeString(this.langVersion);
		output.writeFieldEnd();
	}
	output.writeFieldStop();
	output.writeStructEnd();
	return;
};

let PacketInfo = module.exports.PacketInfo = function(args) {
	this.ver = null;
	this.sender = null;
	this.services = null;
	this.config = null;
	this.ipList = null;
	this.hostname = null;
	this.client = null;
	this.seq = null;
	this.instanceID = null;
	this.metadata = null;
	if (args) {
		if (args.ver !== undefined && args.ver !== null) {
			this.ver = args.ver;
		}
		if (args.sender !== undefined && args.sender !== null) {
			this.sender = args.sender;
		}
		if (args.services !== undefined && args.services !== null) {
			this.services = args.services;
		}
		if (args.config !== undefined && args.config !== null) {
			this.config = args.config;
		}
		if (args.ipList !== undefined && args.ipList !== null) {
			this.ipList = Thrift.copyList(args.ipList, [null]);
		}
		if (args.hostname !== undefined && args.hostname !== null) {
			this.hostname = args.hostname;
		}
		if (args.client !== undefined && args.client !== null) {
			this.client = new ttypes.Client(args.client);
		}
		if (args.seq !== undefined && args.seq !== null) {
			this.seq = args.seq;
		}
		if (args.instanceID !== undefined && args.instanceID !== null) {
			this.instanceID = args.instanceID;
		}
		if (args.metadata !== undefined && args.metadata !== null) {
			this.metadata = args.metadata;
		}
	}
};
PacketInfo.prototype = {};
PacketInfo.prototype.read = function(input) {
	input.readStructBegin();
	while (true)
	{
		let ret = input.readFieldBegin();
		let fname = ret.fname;
		let ftype = ret.ftype;
		let fid = ret.fid;
		if (ftype == Thrift.Type.STOP) {
			break;
		}
		switch (fid)
		{
			case 1:
				if (ftype == Thrift.Type.STRING) {
					this.ver = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 2:
				if (ftype == Thrift.Type.STRING) {
					this.sender = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 3:
				if (ftype == Thrift.Type.STRING) {
					this.services = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 4:
				if (ftype == Thrift.Type.STRING) {
					this.config = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 5:
				if (ftype == Thrift.Type.LIST) {
					let _size8 = 0;
					var _rtmp312;
					this.ipList = [];
					let _etype11 = 0;
					_rtmp312 = input.readListBegin();
					_etype11 = _rtmp312.etype;
					_size8 = _rtmp312.size;
					for (let _i13 = 0; _i13 < _size8; ++_i13)
					{
						let elem14 = null;
						elem14 = input.readString();
						this.ipList.push(elem14);
					}
					input.readListEnd();
				} else {
					input.skip(ftype);
				}
				break;
			case 6:
				if (ftype == Thrift.Type.STRING) {
					this.hostname = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 7:
				if (ftype == Thrift.Type.STRUCT) {
					this.client = new ttypes.Client();
					this.client.read(input);
				} else {
					input.skip(ftype);
				}
				break;
			case 8:
				if (ftype == Thrift.Type.I32) {
					this.seq = input.readI32();
				} else {
					input.skip(ftype);
				}
				break;
			case 9:
				if (ftype == Thrift.Type.STRING) {
					this.instanceID = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 10:
				if (ftype == Thrift.Type.STRING) {
					this.metadata = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			default:
				input.skip(ftype);
		}
		input.readFieldEnd();
	}
	input.readStructEnd();
	return;
};

PacketInfo.prototype.write = function(output) {
	output.writeStructBegin("PacketInfo");
	if (this.ver !== null && this.ver !== undefined) {
		output.writeFieldBegin("ver", Thrift.Type.STRING, 1);
		output.writeString(this.ver);
		output.writeFieldEnd();
	}
	if (this.sender !== null && this.sender !== undefined) {
		output.writeFieldBegin("sender", Thrift.Type.STRING, 2);
		output.writeString(this.sender);
		output.writeFieldEnd();
	}
	if (this.services !== null && this.services !== undefined) {
		output.writeFieldBegin("services", Thrift.Type.STRING, 3);
		output.writeString(this.services);
		output.writeFieldEnd();
	}
	if (this.config !== null && this.config !== undefined) {
		output.writeFieldBegin("config", Thrift.Type.STRING, 4);
		output.writeString(this.config);
		output.writeFieldEnd();
	}
	if (this.ipList !== null && this.ipList !== undefined) {
		output.writeFieldBegin("ipList", Thrift.Type.LIST, 5);
		output.writeListBegin(Thrift.Type.STRING, this.ipList.length);
		for (let iter15 in this.ipList)
		{
			if (this.ipList.hasOwnProperty(iter15))
			{
				iter15 = this.ipList[iter15];
				output.writeString(iter15);
			}
		}
		output.writeListEnd();
		output.writeFieldEnd();
	}
	if (this.hostname !== null && this.hostname !== undefined) {
		output.writeFieldBegin("hostname", Thrift.Type.STRING, 6);
		output.writeString(this.hostname);
		output.writeFieldEnd();
	}
	if (this.client !== null && this.client !== undefined) {
		output.writeFieldBegin("client", Thrift.Type.STRUCT, 7);
		this.client.write(output);
		output.writeFieldEnd();
	}
	if (this.seq !== null && this.seq !== undefined) {
		output.writeFieldBegin("seq", Thrift.Type.I32, 8);
		output.writeI32(this.seq);
		output.writeFieldEnd();
	}
	if (this.instanceID !== null && this.instanceID !== undefined) {
		output.writeFieldBegin("instanceID", Thrift.Type.STRING, 9);
		output.writeString(this.instanceID);
		output.writeFieldEnd();
	}
	if (this.metadata !== null && this.metadata !== undefined) {
		output.writeFieldBegin("metadata", Thrift.Type.STRING, 10);
		output.writeString(this.metadata);
		output.writeFieldEnd();
	}
	output.writeFieldStop();
	output.writeStructEnd();
	return;
};

let PacketDisconnect = module.exports.PacketDisconnect = function(args) {
	this.ver = null;
	this.sender = null;
	if (args) {
		if (args.ver !== undefined && args.ver !== null) {
			this.ver = args.ver;
		}
		if (args.sender !== undefined && args.sender !== null) {
			this.sender = args.sender;
		}
	}
};
PacketDisconnect.prototype = {};
PacketDisconnect.prototype.read = function(input) {
	input.readStructBegin();
	while (true)
	{
		let ret = input.readFieldBegin();
		let fname = ret.fname;
		let ftype = ret.ftype;
		let fid = ret.fid;
		if (ftype == Thrift.Type.STOP) {
			break;
		}
		switch (fid)
		{
			case 1:
				if (ftype == Thrift.Type.STRING) {
					this.ver = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 2:
				if (ftype == Thrift.Type.STRING) {
					this.sender = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			default:
				input.skip(ftype);
		}
		input.readFieldEnd();
	}
	input.readStructEnd();
	return;
};

PacketDisconnect.prototype.write = function(output) {
	output.writeStructBegin("PacketDisconnect");
	if (this.ver !== null && this.ver !== undefined) {
		output.writeFieldBegin("ver", Thrift.Type.STRING, 1);
		output.writeString(this.ver);
		output.writeFieldEnd();
	}
	if (this.sender !== null && this.sender !== undefined) {
		output.writeFieldBegin("sender", Thrift.Type.STRING, 2);
		output.writeString(this.sender);
		output.writeFieldEnd();
	}
	output.writeFieldStop();
	output.writeStructEnd();
	return;
};

let PacketHeartbeat = module.exports.PacketHeartbeat = function(args) {
	this.ver = null;
	this.sender = null;
	this.cpu = null;
	if (args) {
		if (args.ver !== undefined && args.ver !== null) {
			this.ver = args.ver;
		}
		if (args.sender !== undefined && args.sender !== null) {
			this.sender = args.sender;
		}
		if (args.cpu !== undefined && args.cpu !== null) {
			this.cpu = args.cpu;
		}
	}
};
PacketHeartbeat.prototype = {};
PacketHeartbeat.prototype.read = function(input) {
	input.readStructBegin();
	while (true)
	{
		let ret = input.readFieldBegin();
		let fname = ret.fname;
		let ftype = ret.ftype;
		let fid = ret.fid;
		if (ftype == Thrift.Type.STOP) {
			break;
		}
		switch (fid)
		{
			case 1:
				if (ftype == Thrift.Type.STRING) {
					this.ver = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 2:
				if (ftype == Thrift.Type.STRING) {
					this.sender = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 3:
				if (ftype == Thrift.Type.DOUBLE) {
					this.cpu = input.readDouble();
				} else {
					input.skip(ftype);
				}
				break;
			default:
				input.skip(ftype);
		}
		input.readFieldEnd();
	}
	input.readStructEnd();
	return;
};

PacketHeartbeat.prototype.write = function(output) {
	output.writeStructBegin("PacketHeartbeat");
	if (this.ver !== null && this.ver !== undefined) {
		output.writeFieldBegin("ver", Thrift.Type.STRING, 1);
		output.writeString(this.ver);
		output.writeFieldEnd();
	}
	if (this.sender !== null && this.sender !== undefined) {
		output.writeFieldBegin("sender", Thrift.Type.STRING, 2);
		output.writeString(this.sender);
		output.writeFieldEnd();
	}
	if (this.cpu !== null && this.cpu !== undefined) {
		output.writeFieldBegin("cpu", Thrift.Type.DOUBLE, 3);
		output.writeDouble(this.cpu);
		output.writeFieldEnd();
	}
	output.writeFieldStop();
	output.writeStructEnd();
	return;
};

let PacketPing = module.exports.PacketPing = function(args) {
	this.ver = null;
	this.sender = null;
	this.time = null;
	this.id = null;
	if (args) {
		if (args.ver !== undefined && args.ver !== null) {
			this.ver = args.ver;
		}
		if (args.sender !== undefined && args.sender !== null) {
			this.sender = args.sender;
		}
		if (args.time !== undefined && args.time !== null) {
			this.time = args.time;
		}
		if (args.id !== undefined && args.id !== null) {
			this.id = args.id;
		}
	}
};
PacketPing.prototype = {};
PacketPing.prototype.read = function(input) {
	input.readStructBegin();
	while (true)
	{
		let ret = input.readFieldBegin();
		let fname = ret.fname;
		let ftype = ret.ftype;
		let fid = ret.fid;
		if (ftype == Thrift.Type.STOP) {
			break;
		}
		switch (fid)
		{
			case 1:
				if (ftype == Thrift.Type.STRING) {
					this.ver = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 2:
				if (ftype == Thrift.Type.STRING) {
					this.sender = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 3:
				if (ftype == Thrift.Type.I64) {
					this.time = input.readI64();
				} else {
					input.skip(ftype);
				}
				break;
			case 4:
				if (ftype == Thrift.Type.STRING) {
					this.id = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			default:
				input.skip(ftype);
		}
		input.readFieldEnd();
	}
	input.readStructEnd();
	return;
};

PacketPing.prototype.write = function(output) {
	output.writeStructBegin("PacketPing");
	if (this.ver !== null && this.ver !== undefined) {
		output.writeFieldBegin("ver", Thrift.Type.STRING, 1);
		output.writeString(this.ver);
		output.writeFieldEnd();
	}
	if (this.sender !== null && this.sender !== undefined) {
		output.writeFieldBegin("sender", Thrift.Type.STRING, 2);
		output.writeString(this.sender);
		output.writeFieldEnd();
	}
	if (this.time !== null && this.time !== undefined) {
		output.writeFieldBegin("time", Thrift.Type.I64, 3);
		output.writeI64(this.time);
		output.writeFieldEnd();
	}
	if (this.id !== null && this.id !== undefined) {
		output.writeFieldBegin("id", Thrift.Type.STRING, 4);
		output.writeString(this.id);
		output.writeFieldEnd();
	}
	output.writeFieldStop();
	output.writeStructEnd();
	return;
};

let PacketPong = module.exports.PacketPong = function(args) {
	this.ver = null;
	this.sender = null;
	this.time = null;
	this.arrived = null;
	this.id = null;
	if (args) {
		if (args.ver !== undefined && args.ver !== null) {
			this.ver = args.ver;
		}
		if (args.sender !== undefined && args.sender !== null) {
			this.sender = args.sender;
		}
		if (args.time !== undefined && args.time !== null) {
			this.time = args.time;
		}
		if (args.arrived !== undefined && args.arrived !== null) {
			this.arrived = args.arrived;
		}
		if (args.id !== undefined && args.id !== null) {
			this.id = args.id;
		}
	}
};
PacketPong.prototype = {};
PacketPong.prototype.read = function(input) {
	input.readStructBegin();
	while (true)
	{
		let ret = input.readFieldBegin();
		let fname = ret.fname;
		let ftype = ret.ftype;
		let fid = ret.fid;
		if (ftype == Thrift.Type.STOP) {
			break;
		}
		switch (fid)
		{
			case 1:
				if (ftype == Thrift.Type.STRING) {
					this.ver = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 2:
				if (ftype == Thrift.Type.STRING) {
					this.sender = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 3:
				if (ftype == Thrift.Type.I64) {
					this.time = input.readI64();
				} else {
					input.skip(ftype);
				}
				break;
			case 4:
				if (ftype == Thrift.Type.I64) {
					this.arrived = input.readI64();
				} else {
					input.skip(ftype);
				}
				break;
			case 5:
				if (ftype == Thrift.Type.STRING) {
					this.id = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			default:
				input.skip(ftype);
		}
		input.readFieldEnd();
	}
	input.readStructEnd();
	return;
};

PacketPong.prototype.write = function(output) {
	output.writeStructBegin("PacketPong");
	if (this.ver !== null && this.ver !== undefined) {
		output.writeFieldBegin("ver", Thrift.Type.STRING, 1);
		output.writeString(this.ver);
		output.writeFieldEnd();
	}
	if (this.sender !== null && this.sender !== undefined) {
		output.writeFieldBegin("sender", Thrift.Type.STRING, 2);
		output.writeString(this.sender);
		output.writeFieldEnd();
	}
	if (this.time !== null && this.time !== undefined) {
		output.writeFieldBegin("time", Thrift.Type.I64, 3);
		output.writeI64(this.time);
		output.writeFieldEnd();
	}
	if (this.arrived !== null && this.arrived !== undefined) {
		output.writeFieldBegin("arrived", Thrift.Type.I64, 4);
		output.writeI64(this.arrived);
		output.writeFieldEnd();
	}
	if (this.id !== null && this.id !== undefined) {
		output.writeFieldBegin("id", Thrift.Type.STRING, 5);
		output.writeString(this.id);
		output.writeFieldEnd();
	}
	output.writeFieldStop();
	output.writeStructEnd();
	return;
};

let PacketGossipHello = module.exports.PacketGossipHello = function(args) {
	this.ver = null;
	this.sender = null;
	this.host = null;
	this.port = null;
	if (args) {
		if (args.ver !== undefined && args.ver !== null) {
			this.ver = args.ver;
		}
		if (args.sender !== undefined && args.sender !== null) {
			this.sender = args.sender;
		}
		if (args.host !== undefined && args.host !== null) {
			this.host = args.host;
		}
		if (args.port !== undefined && args.port !== null) {
			this.port = args.port;
		}
	}
};
PacketGossipHello.prototype = {};
PacketGossipHello.prototype.read = function(input) {
	input.readStructBegin();
	while (true)
	{
		let ret = input.readFieldBegin();
		let fname = ret.fname;
		let ftype = ret.ftype;
		let fid = ret.fid;
		if (ftype == Thrift.Type.STOP) {
			break;
		}
		switch (fid)
		{
			case 1:
				if (ftype == Thrift.Type.STRING) {
					this.ver = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 2:
				if (ftype == Thrift.Type.STRING) {
					this.sender = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 3:
				if (ftype == Thrift.Type.STRING) {
					this.host = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 4:
				if (ftype == Thrift.Type.I32) {
					this.port = input.readI32();
				} else {
					input.skip(ftype);
				}
				break;
			default:
				input.skip(ftype);
		}
		input.readFieldEnd();
	}
	input.readStructEnd();
	return;
};

PacketGossipHello.prototype.write = function(output) {
	output.writeStructBegin("PacketGossipHello");
	if (this.ver !== null && this.ver !== undefined) {
		output.writeFieldBegin("ver", Thrift.Type.STRING, 1);
		output.writeString(this.ver);
		output.writeFieldEnd();
	}
	if (this.sender !== null && this.sender !== undefined) {
		output.writeFieldBegin("sender", Thrift.Type.STRING, 2);
		output.writeString(this.sender);
		output.writeFieldEnd();
	}
	if (this.host !== null && this.host !== undefined) {
		output.writeFieldBegin("host", Thrift.Type.STRING, 3);
		output.writeString(this.host);
		output.writeFieldEnd();
	}
	if (this.port !== null && this.port !== undefined) {
		output.writeFieldBegin("port", Thrift.Type.I32, 4);
		output.writeI32(this.port);
		output.writeFieldEnd();
	}
	output.writeFieldStop();
	output.writeStructEnd();
	return;
};

let PacketGossipRequest = module.exports.PacketGossipRequest = function(args) {
	this.ver = null;
	this.sender = null;
	this.online = null;
	this.offline = null;
	if (args) {
		if (args.ver !== undefined && args.ver !== null) {
			this.ver = args.ver;
		}
		if (args.sender !== undefined && args.sender !== null) {
			this.sender = args.sender;
		}
		if (args.online !== undefined && args.online !== null) {
			this.online = args.online;
		}
		if (args.offline !== undefined && args.offline !== null) {
			this.offline = args.offline;
		}
	}
};
PacketGossipRequest.prototype = {};
PacketGossipRequest.prototype.read = function(input) {
	input.readStructBegin();
	while (true)
	{
		let ret = input.readFieldBegin();
		let fname = ret.fname;
		let ftype = ret.ftype;
		let fid = ret.fid;
		if (ftype == Thrift.Type.STOP) {
			break;
		}
		switch (fid)
		{
			case 1:
				if (ftype == Thrift.Type.STRING) {
					this.ver = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 2:
				if (ftype == Thrift.Type.STRING) {
					this.sender = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 3:
				if (ftype == Thrift.Type.STRING) {
					this.online = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 4:
				if (ftype == Thrift.Type.STRING) {
					this.offline = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			default:
				input.skip(ftype);
		}
		input.readFieldEnd();
	}
	input.readStructEnd();
	return;
};

PacketGossipRequest.prototype.write = function(output) {
	output.writeStructBegin("PacketGossipRequest");
	if (this.ver !== null && this.ver !== undefined) {
		output.writeFieldBegin("ver", Thrift.Type.STRING, 1);
		output.writeString(this.ver);
		output.writeFieldEnd();
	}
	if (this.sender !== null && this.sender !== undefined) {
		output.writeFieldBegin("sender", Thrift.Type.STRING, 2);
		output.writeString(this.sender);
		output.writeFieldEnd();
	}
	if (this.online !== null && this.online !== undefined) {
		output.writeFieldBegin("online", Thrift.Type.STRING, 3);
		output.writeString(this.online);
		output.writeFieldEnd();
	}
	if (this.offline !== null && this.offline !== undefined) {
		output.writeFieldBegin("offline", Thrift.Type.STRING, 4);
		output.writeString(this.offline);
		output.writeFieldEnd();
	}
	output.writeFieldStop();
	output.writeStructEnd();
	return;
};

let PacketGossipResponse = module.exports.PacketGossipResponse = function(args) {
	this.ver = null;
	this.sender = null;
	this.online = null;
	this.offline = null;
	if (args) {
		if (args.ver !== undefined && args.ver !== null) {
			this.ver = args.ver;
		}
		if (args.sender !== undefined && args.sender !== null) {
			this.sender = args.sender;
		}
		if (args.online !== undefined && args.online !== null) {
			this.online = args.online;
		}
		if (args.offline !== undefined && args.offline !== null) {
			this.offline = args.offline;
		}
	}
};
PacketGossipResponse.prototype = {};
PacketGossipResponse.prototype.read = function(input) {
	input.readStructBegin();
	while (true)
	{
		let ret = input.readFieldBegin();
		let fname = ret.fname;
		let ftype = ret.ftype;
		let fid = ret.fid;
		if (ftype == Thrift.Type.STOP) {
			break;
		}
		switch (fid)
		{
			case 1:
				if (ftype == Thrift.Type.STRING) {
					this.ver = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 2:
				if (ftype == Thrift.Type.STRING) {
					this.sender = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 3:
				if (ftype == Thrift.Type.STRING) {
					this.online = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			case 4:
				if (ftype == Thrift.Type.STRING) {
					this.offline = input.readString();
				} else {
					input.skip(ftype);
				}
				break;
			default:
				input.skip(ftype);
		}
		input.readFieldEnd();
	}
	input.readStructEnd();
	return;
};

PacketGossipResponse.prototype.write = function(output) {
	output.writeStructBegin("PacketGossipResponse");
	if (this.ver !== null && this.ver !== undefined) {
		output.writeFieldBegin("ver", Thrift.Type.STRING, 1);
		output.writeString(this.ver);
		output.writeFieldEnd();
	}
	if (this.sender !== null && this.sender !== undefined) {
		output.writeFieldBegin("sender", Thrift.Type.STRING, 2);
		output.writeString(this.sender);
		output.writeFieldEnd();
	}
	if (this.online !== null && this.online !== undefined) {
		output.writeFieldBegin("online", Thrift.Type.STRING, 3);
		output.writeString(this.online);
		output.writeFieldEnd();
	}
	if (this.offline !== null && this.offline !== undefined) {
		output.writeFieldBegin("offline", Thrift.Type.STRING, 4);
		output.writeString(this.offline);
		output.writeFieldEnd();
	}
	output.writeFieldStop();
	output.writeStructEnd();
	return;
};

