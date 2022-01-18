const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const {promisify}=require('util');

const signToken = (id, isAdmin) => {
  return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
  };
  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    createSendToken(user, 200, res);
  } catch (err) {
    res.status(400).json({ status: "fail", message: err });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) return next();
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.authenticate(password, user.password)))
    return next();
  createSendToken(user, 200, res);
};

exports.logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 100),
    httpOnly: true
  });
  res.status(200).json({ status: 'success' });
};


exports.protect=(async(req,res,next)=>{
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
  {
    token=req.headers.authorization.split(' ')[1];
  }else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  if(!token)
  {
    return next('You Are Not Logged In....Please log in to get access.')
  }

  //verification of token


  const decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET);
  
  //check if user still exists or not

  const freshuser=await User.findById(decoded.id)
  if(!freshuser)
  {
    return next('The user belonging to this token does no longer exists')
  }

  //Grant Access to Protected routes
  req.user=freshuser;
  next();

});


exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      // 2) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }

      // THERE IS A LOGGED IN USER
      res.locals.user = currentUser;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};