const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const enrollSchema = new Schema({
   courseType: String,
   seatsAvailable: Number,
   courseStartDate: String,
   totalFees: Number,
   reservationFees: Number,
   remainingFees: Number 
});

const enrolls = mongoose.model('enrolls', enrollSchema);

module.exports = enrolls;

