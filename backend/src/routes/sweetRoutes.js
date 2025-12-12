const express = require('express');
const {
  createSweet,
  getSweets,
  searchSweets,
  updateSweet,
  deleteSweet,
  purchaseSweet,
  restockSweet
} = require('../controllers/sweetController');
const { authRequired, requireAdmin } = require('../middleware/auth');

const router = express.Router();

router.use(authRequired);

router.post('/', requireAdmin, createSweet);
router.get('/', getSweets);
router.get('/search', searchSweets);
router.put('/:id', requireAdmin, updateSweet);
router.delete('/:id', requireAdmin, deleteSweet);
router.post('/:id/purchase', purchaseSweet);
router.post('/:id/restock', requireAdmin, restockSweet);

module.exports = router;
