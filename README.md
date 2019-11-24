# DistanceFinderByGeo


Library to find data which falls under a given radius (km). The library uses Geopoint calculations using Radians to get distance between two coordinates and then find out which data falls under the given radius.

## Install

```sh
npm install distance-finder-by-geo
```

## Usage


```js
require('distance-finder-by-geo')
```

#### Download Sample Customers.txt file for testing

<a href="https://raw.githubusercontent.com/jimcute/distance-finder-by-geo/master/Customers.txt">Click to Download the file</a>

## Functions

Get All the Customers within Radius Range provided at the time of function call.

### `getAllCustomersWithinRange(point, jsonFilePath, radius, orderBy = '')`

#### Paramaters:
- point: The base Geopoint from where we need to find distance of other Coordinates
- jsonFilePath: Customers.txt file path which has the Coordinates data
- radius: The distance radius
- orderBy: (Optional) Pass the field name exist in Customers.txt file by which you want the Ascending Ordering


```js
// Working code sample
require('distance-finder-by-geo')
  .getAllCustomersWithinRange({ lat: 53.339428, lng: -6.257664 }, __dirname + '/Customers.txt', 100, 'user_id')
  .then(result => {
    console.log(result);
  }).catch(ex => {
    console.log(ex);
  })
```

Get all the data in Success Callback and Exception in Error Callback.

