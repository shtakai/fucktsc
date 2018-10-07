"use strict";
exports.__esModule = true;
var moduleValue_1 = require("./moduleValue"); //import for module v
var gV = globalValue; //works
gV.valueOf();
var importedFromModule = moduleValue_1.localValueFromModule;
importedFromModule.valueOf();
