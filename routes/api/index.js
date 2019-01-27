const router = require("express").Router();
const favoriteRoutes = require("./Favorites");
const userRoutes = require("./users");

//  routes
router.use("/Favorites", favoriteRoutes);
router.use("/users", userRoutes);

module.exports = router;