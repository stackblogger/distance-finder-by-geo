"use strict";
/**************************************************
 *
 *  Author: Jameer Khan
 *  Created: 24 Nov 2019
 *  Description: This file Boolean value if the distance
 *  of two coordinates are within the given radius.
 *
 *************************************************/
exports.__esModule = true;
var getDistance_1 = require("./getDistance");
var isWithinRange = function (point, coord, radius, distanceFn) {
    if (distanceFn === void 0) { distanceFn = getDistance_1["default"]; }
    distanceFn = typeof distanceFn === 'function' ? distanceFn : getDistance_1["default"];
    return distanceFn(point, coord) <= radius ? true : false;
};
exports["default"] = isWithinRange;
