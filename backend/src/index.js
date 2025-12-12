const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
require('./models/user');
require('./models/sweet');

const authRoutes = require('./routes/authRoutes');
const sweetRoutes = require('./routes/sweetRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Sweet Shop API running' });
});

app.use('/api/auth', authRoutes);
app.use('/api/sweets', sweetRoutes);

const PORT = process.env.PORT || 4000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}).catch((err) => {
  console.error('DB connection error:', err);
});
