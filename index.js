'use strict';

var ContentStream = require('contentstream');
var EventEmitter = require('events').EventEmitter;
var em = new EventEmitter;
var util=require('util');
var binary = require('binary');
var buf=new Buffer([0x00,0x00,0x01,0x01,0x00,0x26,0x4f,0x4b,0x3a,0x50,0x44,0x53,0x52,0x0d,0x0a,0x24,0x50,0x44,0x53,0x52,0x3d,0x32,0x30,0x2c,0x33,0x30,0x2c,0x35,0x30,0x2c,0x33,0x30,0x2c,0x33,0x2c,0x30,0x2c,0x30,0x2c,0x31,0x2c,0x30,0x0d,0x0a]);
var buf2=new Buffer(
            'BEGINMSGcmd\x0a'
            + 'BEGINMSGcmd\x04'
            + 'GARBAGEDATAXXXX'
            + 'BEGINMSGcmd\x02'
            + 'BEGINMSGcmd\x03'
            + 'BEGINMSGcmd\x04'
            + 'BEGINMSGend\x08'
        );
var buf3=new Buffer([0x00,0x00,0x01,0x01,0x00,0x1d,0x42,0x72,0x61,0x6e,0x64,0x20,0x6e,0x61,0x6d,0x65,0x20,0x20,0x20,0x20,0x20,0x20,0x3a,0x20,0x53,0x26,0x54,0x20,0x43,0x41,0x52,0x45,0x55,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x18,0x4d,0x6f,0x64,0x65,0x6c,0x20,0x6e,0x61,0x6d,0x65,0x20,0x20,0x20,0x20,0x20,0x20,0x3a,0x20,0x55,0x43,0x41,0x4e,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x1b,0x46,0x69,0x72,0x6d,0x77,0x61,0x72,0x65,0x20,0x76,0x65,0x72,0x73,0x69,0x6f,0x6e,0x3a,0x20,0x76,0x31,0x2e,0x33,0x72,0x30,0x35,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x19,0x48,0x61,0x72,0x64,0x77,0x61,0x72,0x65,0x20,0x76,0x65,0x72,0x73,0x69,0x6f,0x6e,0x3a,0x20,0x52,0x45,0x56,0x2e,0x41,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x42,0x75,0x69,0x6c,0x64,0x20,0x44,0x61,0x74,0x65,0x20,0x20,0x20,0x20,0x20,0x20,0x3a,0x20,0x44,0x65,0x63,0x20,0x31,0x39,0x20,0x32,0x30,0x31,0x34,0x2c,0x20,0x31,0x35,0x3a,0x30,0x36,0x3a,0x35,0x37,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x2e,0x41,0x56,0x4c,0x20,0x73,0x65,0x72,0x69,0x61,0x6c,0x20,0x6e,0x75,0x6d,0x2e,0x20,0x3a,0x20,0x30,0x78,0x34,0x33,0x32,0x30,0x37,0x34,0x33,0x38,0x33,0x35,0x33,0x36,0x34,0x45,0x33,0x34,0x30,0x35,0x43,0x45,0x46,0x46,0x33,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x12,0x50,0x61,0x72,0x61,0x6d,0x2e,0x20,0x20,0x55,0x70,0x64,0x61,0x74,0x65,0x64,0x20,0x3a,0x20,0x00,0x00,0x01,0x01,0x00,0x16,0x32,0x30,0x31,0x35,0x2f,0x30,0x33,0x2f,0x30,0x33,0x20,0x20,0x30,0x32,0x3a,0x32,0x38,0x3a,0x34,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x0a,0x0d,0x0a,0x4f,0x4b,0x3a,0x41,0x54,0x49,0x0d,0x0a]);
var buf4=new Buffer([0x00,0x00,0x01,0x01,0x00,0x0b,0x4f,0x4b,0x3a,0x52,0x45,0x50,0x4f,0x52,0x54,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x30,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x30,0x31,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x30,0x32,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x30,0x33,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x30,0x34,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x30,0x35,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x30,0x36,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x30,0x37,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x30,0x38,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x30,0x39,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x31,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x31,0x31,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x31,0x32,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x31,0x33,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x31,0x34,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x31,0x35,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x31,0x36,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x31,0x37,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x31,0x38,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x31,0x39,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x32,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x2c,0x30,0x0d,0x0a,0x00,0x00,0x01,0x01,0x00,0x29,0x24,0x52,0x45,0x50,0x4f,0x52,0x54,0x3d,0x35,0x32,0x31,0x2c,0x30,0x2c]);
var msg=[];


 binary.stream(em)

	.loop(function(end,vars){
		console.time('hi');
		// console.log(util.inspect(vars));
		this
			.word16bu('a')
			.word8bu('b')
			.word8bu('c')
			.word16bu('d')
			// .tap(function(vars){
			// 	// console.log(vars);

			// })

			.scan('x','\x0d\x0a')
			// .scan('filler', 'BEGINMSG')
   //          .buffer('cmd', 3)
   //          .word8('num')			
			.tap(function(vars){
				// console.log(vars);
				msg.push(vars.x.toString());
				delete vars.x;
				// console.log(msg);
				console.timeEnd('hi');
				// if (vars.cmd.toString() == 'end') end();
			});

	})
	.tap(function(vars){
		console.log(vars);
		console.log(msg);
	});

    setTimeout(function () {
        em.emit('data', buf);
    }, 10);

    setTimeout(function () {
        em.emit('data', buf3);
    }, 10);


    setTimeout(function () {
        em.emit('data', buf4);
    }, 10);


// var cluster = require('cluster');
// var http = require('http');
// var numCPUs = require('os').cpus().length;

// if (cluster.isMaster) {
//   // Fork workers.
//   for (var i = 0; i < numCPUs; i++) {
//     cluster.fork();
//     console.log(i);
//   }
// ////
//   cluster.on('exit', function(worker, code, signal) {
//     console.log('worker ' + worker.process.pid + ' died');
//   });
// } else {
//   // Workers can share any TCP connection
//   // In this case its a HTTP server
//   console.log('I am worker #' + cluster.worker.id);
//   log.info('hi');
// // log.warn({lang: 'fr'}, 'au revoir');
//   http.createServer(function(req, res) {
//   	setTimeout(function(){
// 	    res.writeHead(200);
//     	res.end("hello world"+cluster.worker.id+"\n");
//     	log.info('done page load');
//   	},1000);

//   }).listen(8000);
// }

// var a = [{'a':1,'b':2}];
// var b = {'a':3,'b':4,'c':5};
// var c = {'a':6,'b':7};
// var d = {'a':8,'b':9,'d':12};
// var e = {'a':10,'b':11};

// var obj={};
// var data = [];
// console.log(data);
// obj=a;
// data.push(obj);
// console.log(data);
// obj=b;
// data.push(obj);
// obj=c;
// console.log(data);
// obj={};
// data.push(obj);
// console.log(data);
// data.push(obj);
// console.log(data);
// data.push(obj);
// console.log(data);