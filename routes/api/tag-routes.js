const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    },
   
  })
    .then(dbProductTagData => {
      if (!dbProductTagData) {
        res.status(404).json({ message: 'No Tag found with this id' });
        return;
      }
      res.json(dbProductTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    product_id: req.body.tag_id,
    
  })
    .then(dbProductTagData => res.json(dbProductTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update the tag
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbProductTagData => {
      if (!dbProductTagData[0]) {
        res.status(404).json({ message: 'No Tag found with this id' });
        return;
      }
      res.json(dbProductTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbProductTagData => {
      if (!dbProductTagData) {
        res.status(404).json({ message: 'No Tag found with this id' });
        return;
      }
      res.json(dbProductTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
