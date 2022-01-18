const Book = require("../models/bookModel");


exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ status: "success", data: { books } });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getBook = async (req, res) => {
  try{
    const book = await Book.findOne({title:req.params.title});
    res.status(200).json({ status: "success", data: {book}});
  } catch(err){
      res.status(404).json({
        status: "fail",
        message: err
      })
  }
}


exports.createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(200).json({ status: "suceess", data: { book: newBook } });
  } catch (err) {
    res.status(404).json({ status: "fail", message: err });
  }
};

exports.updateBook = async (req, res) => {
  try{
    const book=await Book.findOneAndUpdate({title:req.body.title},req.body,{new:true});
    console.log(book);
    res.status(200).json({ status: "success", data: {book}});
  } catch(err){
      res.status(404).json({
        status: "fail",
        message: err
      })
  }
}

exports.deleteBook = async (req, res) => {
  try{
    await Book.findOneAndDelete({title:req.body.title});
    res.status(200).json({ status: "success", data:null});
  } catch(err){
      res.status(404).json({
        status: "fail",
        message: err
      })
  }
}


