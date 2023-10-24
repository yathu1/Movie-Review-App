const express = require('express');

const { create,verifyEmail,resendEmailVerificationToken, forgetPassword, sendResetPasswordTokenStatus, resetPassword } = require('../controllers/user.js');
const { userValidator, validate, validatePassword } = require('../middlewares/validator');
const { isValidPassResetToken } = require('../middlewares/user.js');


const router = express.Router()

router.post('/create',userValidator,validate,create);
router.post('/verify-email',verifyEmail);
router.post('/resend-email-verification-token',resendEmailVerificationToken);
router.post('/forget-password',forgetPassword);
router.post('/verify-pass-reset-token',isValidPassResetToken,sendResetPasswordTokenStatus);
router.post('/reset-password',validatePassword,validate,isValidPassResetToken,resetPassword);

module.exports = router; 