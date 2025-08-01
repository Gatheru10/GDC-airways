const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  departureDate: {
    type: Date,
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
  },
  travelClass: {
    type: String,
    enum: ['Economy', 'Business', 'First Class'],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stops: {                 
    type: [String],
    default: [],
  },
  seatsAvailable: {         
    type: Number,
    required: true,
    default: 0,
  },
  flightNumber: { 
    type: String, 
    required: true,
   },
   airline: { 
    type: String, 
    required: true 
  },
});

module.exports = mongoose.model('Flight', flightSchema);
