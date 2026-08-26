const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3002;

// Body parsing middleware
app.use(express.json());

// Root test route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Route middleware
app.use('/products', productRoutes);

// Server startup listener
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});