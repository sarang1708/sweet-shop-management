const Sweet = require('../models/sweet');

exports.createSweet = async (req, res) => {
  try {
    const { name, category, price, quantity } = req.body;
    if (!name || !category || price == null || quantity == null) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const sweet = await Sweet.create({ name, category, price, quantity });
    res.status(201).json(sweet);
  } catch (err) {
    console.error('Create sweet error', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getSweets = async (req, res) => {
  try {
    const sweets = await Sweet.findAll();
    res.json(sweets);
  } catch (err) {
    console.error('Get sweets error', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.searchSweets = async (req, res) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query;
    const where = {};

    if (name) where.name = name;
    if (category) where.category = category;
    if (minPrice) where.price = { ...where.price, $gte: Number(minPrice) };
    if (maxPrice) where.price = { ...where.price, $lte: Number(maxPrice) };

    const sweets = await Sweet.findAll({ where });
    res.json(sweets);
  } catch (err) {
    console.error('Search sweets error', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateSweet = async (req, res) => {
  try {
    const { id } = req.params;
    const sweet = await Sweet.findByPk(id);
    if (!sweet) return res.status(404).json({ message: 'Sweet not found' });

    const { name, category, price, quantity } = req.body;
    if (name !== undefined) sweet.name = name;
    if (category !== undefined) sweet.category = category;
    if (price !== undefined) sweet.price = price;
    if (quantity !== undefined) sweet.quantity = quantity;

    await sweet.save();
    res.json(sweet);
  } catch (err) {
    console.error('Update sweet error', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteSweet = async (req, res) => {
  try {
    const { id } = req.params;
    const sweet = await Sweet.findByPk(id);
    if (!sweet) return res.status(404).json({ message: 'Sweet not found' });

    await sweet.destroy();
    res.status(204).send();
  } catch (err) {
    console.error('Delete sweet error', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.purchaseSweet = async (req, res) => {
  try {
    const { id } = req.params;
    const sweet = await Sweet.findByPk(id);
    if (!sweet) return res.status(404).json({ message: 'Sweet not found' });

    if (sweet.quantity <= 0) {
      return res.status(400).json({ message: 'Out of stock' });
    }

    sweet.quantity -= 1;
    await sweet.save();
    res.json(sweet);
  } catch (err) {
    console.error('Purchase sweet error', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.restockSweet = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;
    const sweet = await Sweet.findByPk(id);
    if (!sweet) return res.status(404).json({ message: 'Sweet not found' });

    const inc = Number(amount) || 1;
    sweet.quantity += inc;
    await sweet.save();
    res.json(sweet);
  } catch (err) {
    console.error('Restock sweet error', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
