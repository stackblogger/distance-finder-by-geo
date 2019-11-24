/**************************************************
 * 
 *  Author: Jameer Khan
 *  Created: 24 Nov 2019
 *  Description: This file is has all the Types and Constants
 *  being used in the library.
 * 
 *************************************************/

export type LongitudeInputValue = number | string;
export type LatitudeInputValue = number | string;

export const LongitudeKey = 'lng';
export const LatitudeKey = 'lat';

export type InputLongitude =
    | { lng: LongitudeInputValue }
    | { lon: LongitudeInputValue }
    | { longitude: LongitudeInputValue };

export type InputLatitude =
    | { lat: LatitudeInputValue }
    | { latitude: LatitudeInputValue };

export type UserInputCoordinates = InputLongitude &
    InputLatitude;

export type DistanceFn = (
    point: UserInputCoordinates,
    dest: UserInputCoordinates
) => number;