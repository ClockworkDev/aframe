var fs = require('fs');
var interfaceCode = fs.readFileSync("clockwork/interface.js");
var aFrameCode = fs.readFileSync("dist/aframe-v0.5.0.js");

var finalCode = "//This is the interface for attaching A-Frame to Clockwork\n\n\n"
    + interfaceCode
    + "//And this is A-Frame itself\n\n\n"
    + aFrameCode;
fs.writeFileSync("clockwork/aframe-clockwork.js", finalCode);