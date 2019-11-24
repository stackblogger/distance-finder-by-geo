/**************************************************
 * 
 *  Author: Jameer Khan
 *  Created: 24 Nov 2019
 *  Description: This file is used to fetch Latitude 
 *  value from the given input coordinates by user.
 * 
 *************************************************/

import { UserInputCoordinates, LatitudeKey, LatitudeInputValue } from './types';

const getLatitude = (point: UserInputCoordinates) => {
    const latKey = LatitudeKey;

    const value = point[latKey as keyof LatitudeInputValue];

    return Number(value);
};

export default getLatitude;