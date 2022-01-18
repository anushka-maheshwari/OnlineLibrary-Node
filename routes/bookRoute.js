const router = require("express").Router();
const { getAllBooks, createBook,getBook,updateBook,deleteBook} = require("../controllers/bookController");
const authController=require("../controllers/authController");
const viewController=require("../controllers/authController");
router.route("/").get(getAllBooks)
router.route("/createBook").post(createBook);
router.route("/detail").get(getBook);
router.route("/updateBook").patch(updateBook);
router.route("/deleteBook").delete(deleteBook);
module.exports = router;
