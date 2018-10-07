"use strict";
var AdvertisementLogger;
(function (AdvertisementLogger) {
    function log(parameters) {
        var msg = parameters.msg;
        console.log(msg);
    }
    AdvertisementLogger.log = log;
    function error(parameters) {
        var msg = parameters.msg;
        console.error(msg);
    }
    AdvertisementLogger.error = error;
})(AdvertisementLogger || (AdvertisementLogger = {}));
// usage
AdvertisementLogger.log({ msg: 'Clicked ad id = 1' });
AdvertisementLogger.error({ msg: 'Problem when clicked ad id = 2' });
