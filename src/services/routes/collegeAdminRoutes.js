const haversine = require("../utils/haversine");

router.post("/collegedistance", (req, res) => {
  const { userLocation } = req.body;

  if (
    !userLocation ||
    userLocation.latitude == null ||
    userLocation.longitude == null
  ) {
    return res.status(400).json({ error: "User location is required." });
  }

  const userLat = parseFloat(userLocation.latitude);
  const userLon = parseFloat(userLocation.longitude);
  const RADIUS = 5; // 5 km radius

  // Query to fetch all colleges
  const query = `SELECT name, address, latitude, longitude FROM admin_colleges`;

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch colleges." });
    }

    // Calculate distance for each college and filter by radius
    const collegesWithinRadius = results
      .map((college) => {
        const { latitude, longitude, ...rest } = college;
        const distance = haversine(
          userLat,
          userLon,
          parseFloat(latitude),
          parseFloat(longitude)
        );
        return {
          ...rest,
          latitude,
          longitude,
          distance,
        };
      })
      .filter((college) => college.distance <= RADIUS);

    // Sort colleges by distance
    collegesWithinRadius.sort((a, b) => a.distance - b.distance);

    res.json(collegesWithinRadius);
  });
});
