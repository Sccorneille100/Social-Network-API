const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
  router 
    .route("/:id")
    .get(getThoughts)
    .put(updateThought)
    .delete(deleteThought);
// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;