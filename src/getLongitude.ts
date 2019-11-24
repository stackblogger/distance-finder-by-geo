/**************************************************
 * 
 *  Author: Jameer Khan
 *  Created: 24 Nov 2019
 *  Description: This file is used to fetch Longitude 
 *  value from the given input coordinates by user.
 * 
 *************************************************/

import { UserInputCoordinates, LongitudeKey, LongitudeInputValue } from './types';

const getLongitude = (point: UserInputCoordinates) => {
    const lngKey = LongitudeKey;

    const value = point[lngKey as keyof LongitudeInputValue];

    return Number(value);
};

export default getLongitude;