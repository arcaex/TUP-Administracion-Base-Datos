'use strict';
const User = require('../model/app.model.user.mongo');

exports.getUsers = function (request, response) {
	User.getlistUsers(function (error, User) {
		if (error) {
			response.send(error);
		} else {
			response.json(User);
		}
	});
};

exports.delUser = function (request, response) {
	const body = request.body;
	User.deleteUser(body.id, function (error, User) {
		if (error) {
			response.send(error);
		} else {
			response.json(User);
		}
	});
};

exports.addUser = function (request, response) {
	const body = request.body;
	User.addUser(body, function (error, User) {
		if (error) {
			response.send(error);
		} else {
			response.json(User);
		}
	});
};

exports.modifyUser = function (request, response) {
	const body = request.body;
	User.modifyUser(body, function (error, User) {
		if (error) {
			response.send(error);
		} else {
			response.json(User);
		}
	});
};
