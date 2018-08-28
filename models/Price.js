var mongoose = require('mongoose');
var PriceSchema = new mongoose.Schema({
	_id: Number,//ID field
	label: String,//A,B,C,D,E,F
    WinePrice :[mongoose.Schema.Types.Decimal128]//Array of prices for Vintages
},{_id:false});
module.exports = mongoose.model('Price', PriceSchema);