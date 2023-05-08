const data = require("../utils/users");

function login(req, res) {
  const {email, password} = req.query;

  try {
    const found = data.find(
      (user) => user.email === email && user.password === password
    );

    const access = found ? true : false;
    res.status(200).json({access});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

module.exports = {login};
