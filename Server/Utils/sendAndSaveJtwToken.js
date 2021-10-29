const { sendAccountCreateEmail } = require("./JetmailEmail.js")

/**
 * !Creating and sending jwt token
 */
const sendJwtToken = async (user, statusCode, res) => {
  const token = await user.getJwtToken()

  /**
   * *Options for cookie
   */
  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
  }
  // sendAccountCreateEmail(user.email, user.name)
  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    user,
    token
  })
}

module.exports = sendJwtToken