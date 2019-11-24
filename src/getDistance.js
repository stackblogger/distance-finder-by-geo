"use strict";
/**************************************************
 *
 *  Author: Jameer Khan
 *  Created: 24 Nov 2019
 *  Description: This file is used to calculate the
 *  distance between the two coordinate points.
 *
 *************************************************/
exports.__esModule = true;
var getLatitude_1 = require("./getLatitude");
var getLongitude_1 = require("./getLongitude");
var toRad_1 = require("./toRad");
// Calculates the distance between two points.
var getDistance = function (from, to) {
    // Get Latitude value from Coordinate input 1
    var fromLat = getLatitude_1["default"](from);
    // Get Longitude value from Coordinate input 1
    var fromLon = getLongitude_1["default"](from);
    // Get Latitude value from Coordinate input 2
    var toLat = getLatitude_1["default"](to);
    // Get Longitude value from Coordinate input 2
    var toLon = getLongitude_1["default"](to);
    // Return 0 if Coordinate 1 & Coordinate 2 Latitude 
    // and Longitude values match with each other
    if ((fromLat == toLat) && (fromLon == toLon)) {
        return 0;
    }
    else {
        // Convert Input 1 Latitude into Radian
        var radlat1 = toRad_1["default"](fromLat);
        // Convert Input 2 Latitude into Radian
        var radlat2 = toRad_1["default"](toLat);
        // Get difference of Input 1 Longitude and Input 2 Longitude
        var theta = fromLon - toLon;
        // Convert the diff into Radian
        var radtheta = toRad_1["default"](theta);
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344;
        return dist; // Return the distance between two Geopoints
    }
};
exports["default"] = getDistance;
