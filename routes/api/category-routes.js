const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [Product],
  })
  .then((categories) => res.json(categories))
  .catch((err) => res.status(500).json(err));
  // be sure to include its associated Products

});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

  if(!categoryData) {
    res.status(404).json({ message: 'No Category with that ID' })
    return;
  }
  res.status(200).json(categoryData);
  }catch(err) {
    res.status(500).json(err);
  }
});


router.post('/', async (req, res) => {
  // create a new category
    try {
      const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
    }catch(err) {
      res.status(500).json(err);
    }
  });

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
