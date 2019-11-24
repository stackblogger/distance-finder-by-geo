"use strict";
/**************************************************
 *
 *  Author: Jameer Khan
 *  Created: 24 Nov 2019
 *  Description: This file is used to Query through all
 *  the customers which are given in the json file and
 *  check their distance with the given Geopoint.
 *  If they fall under the radius provide, add them in
 *  result and return the complete result to user.
 *
 *************************************************/
exports.__esModule = true;
var fs = require("fs");
var lineReader = require("readline");
var isWithinRange_1 = require("./isWithinRange");
var getAllCustomersWithinRange = function (point, filePath, radius, orderBy) {
    if (orderBy === void 0) { orderBy = ''; }
    return new Promise(function (resolve, reject) {
        try {
            var lr = lineReader.createInterface({
                input: fs.createReadStream(filePath)
            });
            var result = [];
            lr.on('line', function (line) {
                var json = JSON.parse(line);
                if (isWithinRange_1["default"](point, { lat: json.latitude, lng: json.longitude }, radius))
                    result.push(json);
            });
            lr.on('close', function () {
                if (orderBy) {
                    result = result
                        .sort(function (a, b) { return (a[orderBy] > b[orderBy]) ? 1 : ((b[orderBy] > a[orderBy]) ? -1 : 0); });
                }
                resolve(result);
            });
        }
        catch (ex) {
            reject(ex);
        }
    });
};
exports["default"] = getAllCustomersWithinRange;
