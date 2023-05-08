const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

function getCharDetail(req, res) {
  // axios
  //   .get(`https://rickandmortyapi.com/api/character/${id}`)
  //   .then((response) => {
  //     const {name, image, gender, species, status, origin} = response.data;
  //     res.writeHead(200, {"Content-Type": "application/json"});
  //     res.end(JSON.stringify({name, image, gender, species, status, origin}));
  //   })
  //   .catch((error) => {
  //     res.writeHead(500, {"Content-Type": "tex/plain"});
  //     res.end(error.message);
  //   });

  const {id} = req.params;

  try {
    axios.get(`${URL}${id}`).then((response) => {
      const {id, name, image, gender, species, origin} = response.data;
      res.status(200).json({id, name, image, gender, species, origin});
    });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

module.exports = {getCharDetail};
