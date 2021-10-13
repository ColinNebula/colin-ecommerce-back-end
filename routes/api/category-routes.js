const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  include: [
    {
    model: Product,
    attributes: ['id']
    },
    {
      model: Product,
      attributes: ['product_id'],
      through: ProductTag,
      as: 'tag'
    }
  ]
  Category.findAll({
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get category by id
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, { 
      include: [{model: Product}],
    
});
    if (!categoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }

}catch(err)  {
  console.log(err);
  res.status(500).json(err);
  }
});

// Create route
router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_id: req.body.category_id,
    category_name: req.body.category_name,
    
    
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update Route
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  console.log(req.body)
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      console.log(dbUserData)
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete route
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Export all here
module.exports = router;
