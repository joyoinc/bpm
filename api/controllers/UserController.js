/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add: function(req, res) {
		res.render('users/add.ejs');
	},
	
	createOne: function(req, res) {
		res.render('autoJump.ejs', { message:'create user success!', redirectUrl:'/user' });
	}
};

