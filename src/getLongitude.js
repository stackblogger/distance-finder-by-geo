"use strict";
/**************************************************
 *
 *  Author: Jameer Khan
 *  Created: 24 Nov 2019
 *  Description: This file is used to fetch Longitude
 *  value from the given input coordinates by user.
 *
 *************************************************/
exports.__esModule = true;
var types_1 = require("./types");
var getLongitude = function (point) {
    var lngKey = types_1.LongitudeKey;
    var value = point[lngKey];
    return Number(value);
};
exports["default"] = getLongitude;
