const db = require("../models");

// Defining methods for the userController
module.exports = {
  getUserInfo: (req, res, next) => {
    // console.log(req.user);
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },
  register: (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    // ADD VALIDATION
    db.User.findOne({ 'email': email }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, already a user with the email: ${email}`
        });
      }
      const newUser = new db.User({
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'password': password
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        return res.json(savedUser);
      });
    });
  },
  logout: (req, res) => {
    if (req.user) {
      req.session.destroy();
      res.clearCookie('connect.sid'); // clean up!
      return res.json({ msg: 'logging you out' });
    } else {
      return res.json({ msg: 'no user to log out!' });
    }
  },
  auth: function(req, res, next) {
    // console.log("#################################auth function user controller")
		// console.log(req.body);
		next();
  },
  authenticate: (req, res) => {
    // console.log("######################################authenticate function user controller")
		const user = JSON.parse(JSON.stringify(req.body)); // hack
    console.log("****  In authenticate ****");
    const cleanUser = Object.assign({}, user);
		if (cleanUser) {
			// console.log(`Deleting ${cleanUser.password}`);
			delete cleanUser.password;
		}
		res.json({ user: cleanUser });
	}
};
