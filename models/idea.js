const mongoose = require('mongoose');

const ideaSchema = mongoose.Schema({
	name:{
		type: String,
		required: true,
		// unique: true
	},
	idea:{
		type: String,
		required: true,
		// unique: true
	}
})
const O = module.exports = mongoose.model('ideas', ideaSchema);

// Get Orders from mongo data base

// Add Order to mongo data base
module.exports.addidea = (idea, callback) => {
	O.create(idea, callback);
}