const Book=require("../models/bookModel");
const Booking = require('../models/bookingModel');

exports.getLogin = (req, res) => {
  res.status(200).render("login");
};

exports.getSignUp = (req, res) => {
  res.status(200).render("signup");
};

exports.getBooks =async (req, res) => {
  const books=await Book.find();
  res.status(200).render("books",{books});
};

exports.getBook = async (req, res, next) => {
  const book = await Book.findOne({ title: req.params.title })
  if (!book) {
    return next('There is no book with that name.');
  }
  res.status(200).render('bookDetail', {book});
};

exports.createBook=(req,res)=>{
  res.status(200).render("BookCreate");
}
exports.deleteBook=(req,res)=>{
  res.status(200).render("BookDelete");
}
exports.updateBook=async(req,res)=>{
  const book = await Book.findOne({ title: req.params.title })
  if (!book) {
    return next('There is no book with that name.');
  }
  res.status(200).render("BookUpdate",{book});
}
exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account'
  });
};

exports.getprofile = async (req, res, next) => {
  const bookings = await Booking.find({ user: req.user.id });
  const bookIDs = bookings.map(el => el.book);
  const books = await Book.find({ _id: { $in: bookIDs } });
  res.status(200).render('books', {
    title: 'My Books',
    books
  });
};
