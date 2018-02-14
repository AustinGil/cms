const express = require("express");
const router = express.Router();

const { Content } = require("../models");

router.post("/", async (req, res) => {
  try {
    const content = await Content.create(req.body);
    res.send(content);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      type: "error",
      message: "An error has occured trying to create the content"
    });
  }
});

router.get("/", async (req, res) => {
  try {
    let contents = null;
    const search = req.query.search;
    const ids = req.query.ids;

    const query = {
      limit: 10
    };
    const where = {};

    // if (search) {
    // 	contents = await Song.findAll({
    // 		where: {
    // 			$or: [
    // 				'title', 'artist', 'album', 'genre'
    // 			].map(key => ({
    // 				[key]: {
    // 					$like: `%${search}%`,

    // 				}
    // 			}))
    // 		}
    // 	})

    if (ids) {
      where.id = {
        $or: [ids]
      };
    }

    if (where) {
      query.where = where;
    }

    contents = await Content.findAll(query);
    res.send(contents);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      type: "error",
      message: "An error has occured trying to get the contents"
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const content = await Content.findOne({
      where: {
        id
      }
    });
    content.destroy();
    res.send(id);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      type: "error",
      message: "An error has occured trying to remove the content"
    });
  }
});

module.exports = router;
