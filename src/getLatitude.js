"use strict";
/**************************************************
 *
 *  Author: Jameer Khan
 *  Created: 24 Nov 2019
 *  Description: This file is used to fetch Latitude
 *  value from the given input coordinates by user.
 *
 *************************************************/
exports.__esModule = true;
var types_1 = require("./types");
var getLatitude = function (point) {
    var latKey = types_1.LatitudeKey;
    var value = point[latKey];
    return Number(value);
};
exports["default"] = getLatitude;
