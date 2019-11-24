# DistanceFinderByGeo


Library to 

## Install

```sh
npm install distance-finder-by-geo
```

## Usage


```js
require('distance-finder-by-geo')
```

## General


### Supported values and formats

## Functions

### `getAllCustomersWithinRange(point, jsonFilePath, radius, orderBy = '')`


```js
getAllCustomersWithinRange(
    { lat: 53.339428, lng: -6.257664 },
     __dirname + '/Customers.txt',
     100,
     'user_id'
);
```

```js
// Working code sample
require('distance-finder-by-geo')
  .getAllCustomers({ lat: 53.339428, lng: -6.257664 }, __dirname + '/Customers.txt', 100, 'user_id')
  .then(result => {
    console.log(result);
  }).catch(ex => {
    console.log(ex);
  })
```

Returns the distance in meters as a numeric value.

