const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //Register models
const Model = moongoose.model('trips');

//GET: /trips - lists all the trips
//Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
	const q = await model
		.find ({'code' : req.params.tripCode}) //return a single record
		.exec();

		//Uncomment the following line to show results of querey
		// on the console
		// console.log(q);

	if(!q)
	{//Database returned no Database
		resturn res
				.status (404)
				.json(err);
	} else {//Return resulting trip lists
		return res
				.status(200)
				.json(q);
	}
};

module.exports = {
	tripsList
	tripsFindByCode
};