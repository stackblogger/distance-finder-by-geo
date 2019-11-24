/*******************************************
 * 
 *  Author: Jameer Khan
 *  Email: jimcute8879@gmail.com
 *  Github: github.com/jimcute
 *  Created: 24 Nov 2019
 *  Description: This plugin is used to fetch customers by Latitude and Longitude within a range provided by user at
 *  the time of plugin call.
 *  About this file: This file is the entry point for the plugin.
 * 
 ******************************************/

// Check if a Geopoint is within the provided radius of the given coordinate
export { default as isWithinRange } from './isWithinRange';

//  Fetch all customers who fall under the provided radius
//  Coordinates are first converted into Radians and then matched with the given point
export { default as getAllCustomersWithinRange } from './getAllCustomersWithinRange';