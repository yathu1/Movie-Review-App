const express = require('express');

const { create,verifyEmail,resendEmailVerificationToken } = require('../controllers/user.js');
const { userValidator, validate } = require('../middlewares/validator');


const router = express.Router()

router.post('/create',userValidator,validate,create);
router.post('/verify-email',verifyEmail);
router.post('/resend-email-verification-token',resendEmailVerificationToken);

module.exports = router; 