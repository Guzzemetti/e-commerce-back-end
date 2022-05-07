const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get('/', (req, res) => {
  Tag.findAll({
    include: [Product]
  })
  .then((tag) => res.json(tag))
  .catch((err) => res.status(500).json(err))
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      // JOIN with Product
      include: [{ model: Product, through: ProductTag }]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;



// const router = require('express').Router();
// const { Traveller, Trip, Location } = require('../../models');

// // GET all travellers
// router.get('/', async (req, res) => {
//   try {
//     const travellerData = await Traveller.findAll();
//     res.status(200).json(travellerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // GET a single traveller
// router.get('/:id', async (req, res) => {
//   try {
//     const travellerData = await Traveller.findByPk(req.params.id, {
//       // JOIN with locations, using the Trip through table
//       include: [{ model: Location, through: Trip, as: 'planned_trips' }]
//     });

//     if (!travellerData) {
//       res.status(404).json({ message: 'No traveller found with this id!' });
//       return;
//     }

//     res.status(200).json(travellerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // CREATE a traveller
// router.post('/', async (req, res) => {
//   try {
//     const travellerData = await Traveller.create(req.body);
//     res.status(200).json(travellerData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // DELETE a traveller
// router.delete('/:id', async (req, res) => {
//   try {
//     const travellerData = await Traveller.destroy({
//       where: {
//         id: req.params.id
//       }
//     });

//     if (!travellerData) {
//       res.status(404).json({ message: 'No traveller found with this id!' });
//       return;
//     }

//     res.status(200).json(travellerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
