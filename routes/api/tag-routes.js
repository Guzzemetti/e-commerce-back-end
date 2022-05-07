const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: [Product],
  })
  .then((tags) => res.json(tags))
  .catch((err) => res.status(500).json(err));
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
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
