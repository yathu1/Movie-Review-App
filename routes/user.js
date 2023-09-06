const express = require('express');
const { createUser } = require('../controllers/user,js');

const router = express.Router()

router.post('/user-create',createUser);

module.exports = router; 