const Booking = require('../models/bookingModel');

exports.createBookingCheckout = async (req, res, next) => {
    const { book, user } = req.query;
    if (!book && !user ) return next();
    await Booking.create({ book, user });
    res.redirect('/');
  };
  