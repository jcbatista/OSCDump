var osc = require('osc-min'),
    udp = require('dgram'),
    inport = 13000;

console.log("starting osc dump...");    
sock = udp.createSocket("udp4", function(msg, rinfo) {
  var error;
  try {
    return console.log(osc.fromBuffer(msg));
  } catch (_error) {
    error = _error;
    return console.log("invalid OSC packet" + error);
  }
});

sock.bind(inport);