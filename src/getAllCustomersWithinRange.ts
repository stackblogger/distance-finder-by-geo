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

import * as fs from 'fs';
import * as lineReader from 'readline';
import { default as isWithinRange } from './isWithinRange';
import { UserInputCoordinates } from './types';

const getAllCustomersWithinRange = (
    point: UserInputCoordinates,
    filePath: string,
    radius: Number,
    orderBy: string = ''
) => {
    return new Promise((resolve, reject) => {
        try {
            const lr = lineReader.createInterface({
                input: fs.createReadStream(filePath)
            });

            var result: any[] = [];
            lr.on('line', function (line) {
                let json = JSON.parse(line);

                if (isWithinRange(point, { lat: json.latitude, lng: json.longitude }, radius)) result.push(json);
            });

            lr.on('close', function () {
                if (orderBy) {
                    result = result
                        .sort((a, b) => (a[orderBy] > b[orderBy]) ? 1 : ((b[orderBy] > a[orderBy]) ? -1 : 0));
                }
                resolve(result)
            });
        } catch (ex) {
            reject(ex);
        }
    });
}

export default getAllCustomersWithinRange;