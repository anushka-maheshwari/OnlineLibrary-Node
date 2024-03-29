const router = require("express").Router();
const { getLogin, getSignUp,getBooks ,getBook,createBook,deleteBook,updateBook,getAccount,getprofile} = require("../controllers/viewController");
const authController=require('../controllers/authController');
const bookingController=require('../controllers/bookingController');
router.get("/",bookingController.createBookingCheckout);
router.use(authController.isLoggedIn);
router.get("/",getBooks);
router.get('/book/:title',authController.protect, getBook);
router.get("/login", getLogin);
router.get("/signup", getSignUp);
router.get("/createBook",createBook);
router.get("/deleteBook",deleteBook);
router.get("/my-profile",authController.protect,getprofile);
router.get('/me',authController.protect,getAccount);
router.get("/:title",updateBook);
module.exports = router;
