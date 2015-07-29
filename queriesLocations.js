db.locations.createIndex({ loc: "2dsphere"}, { name: "loc_"})

db.locations.find({
  "loc": {
    $geoIntersects: {
      $geometry: {
        type: "Point" ,
        coordinates: [-51.2125487, -30.03128]
      }
    }
  }
})


db.locations.find({
  "loc": {
    $geoIntersects: {
      $geometry: {
        type: "Point" ,
        coordinates: [-46.6749596, -23.598877]
      }
    }
  }
})

db.locations.find({
  "level": "City",
  "loc": {
    $near: {
      $geometry: { type: "Point", coordinates: [-50.8586806,-29.3851463] },
      $minDistance: 1,
      $maxDistance: 300000,
    },
  }
})

db.locations.find({
  "level": "City",
  "loc": {
    $near: {
      $geometry: { type: "Point", coordinates: [-47.0562422, -22.9084404] },
      $minDistance: 60000,
      $maxDistance: 80000,
    }
  }
})

db.locations.find({
  "loc": {
    $geoIntersects: {
      $geometry: {
        type: "Point",
        coordinates: [-46.6749596, -23.598877]
      }
    }
  }
})


db.playlists.find({
  $or: [
    { "location": { $not: { $exists: true } } },
    { "location.sourceid": "54f4bd437da3100f4454e812" },
    { "location.sourceid": "54f4bd5b7da3100f4454e82c" },
    { "location.sourceid": "54f4bd5d7da3100f4454e846" },
  ],
}, {
  "playlist.name": 1,
  "location.name": 1
})
