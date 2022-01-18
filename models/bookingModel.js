const mongoose = require('mongoose');
const bookingSchema=new mongoose.Schema({
    book: {
        type: mongoose.Schema.ObjectId,
        ref: 'Book',
        required: [true, 'Issue must belong to a Book!']
      },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Issue must belong to a User!']
      },

});

bookingSchema.pre(/^find/, function(next) {
    this.populate('user').populate({
      path: 'book',
      select: 'name'
    });
    next();
  });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;