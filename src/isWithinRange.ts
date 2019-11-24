/**************************************************
 * 
 *  Author: Jameer Khan
 *  Created: 24 Nov 2019
 *  Description: This file Boolean value if the distance
 *  of two coordinates are within the given radius.
 * 
 *************************************************/

import getDistance from './getDistance';
import { UserInputCoordinates } from './types';

type DistanceFn = (
    point: UserInputCoordinates,
    dest: UserInputCoordinates
) => number;

const isWithinRange = (
    point: UserInputCoordinates,
    coord: UserInputCoordinates,
    radius: Number,
    distanceFn: DistanceFn = getDistance
) => {
    distanceFn = typeof distanceFn === 'function' ? distanceFn : getDistance;

    return distanceFn(point, coord) <= radius ? true : false;
};

export default isWithinRange;