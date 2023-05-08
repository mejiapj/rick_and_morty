let myFavorites = [];

function postFav(req, res) {
  const character = req.body;
  try {
    myFavorites.push(character);
    res.status(200).json(myFavorites);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

function deleteFav(req, res) {
  const {id} = req.params;

  try {
    const filtered = myFavorites.filter(
      (character) => character.id !== Number(id)
    );
    myFavorites = filtered;
    res.status(200).json(filtered);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

module.exports = {
  postFav,
  deleteFav,
};
