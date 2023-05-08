const {Router} = require("express");
const {getCharById} = require("../controllers/getCharById");
const {login} = require("../controllers/login");
const {postFav, deleteFav} = require("../controllers/myfavorites");

const router = Router();

router.get("/character/:id", getCharById);
// router.get("/detail/:id", getCharDetail);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
