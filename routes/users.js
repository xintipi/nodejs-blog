var express = require('express');
var router = express.Router();
var UsersController = require('../controllers/usersController');

// Get user list
router.get('/', UsersController.list);

// Get user detail
router.get('/:id', UsersController.detail);

// Create user
router.post('/', UsersController.create);

// Update user
router.put('/:id', UsersController.update);

// Delete user
router.delete('/:id', UsersController.delete);

module.exports = router;
