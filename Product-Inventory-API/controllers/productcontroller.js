let products = require('../data/products');

// Helper function for body validation
const validateProduct = (body) => {
  if (!body || Object.keys(body).length === 0) return false;
  const { name, price, quantity, category } = body;
  if (!name || typeof name !== 'string') return false;
  if (price === undefined || typeof price !== 'number' || price <= 0) return false;
  if (quantity === undefined || typeof quantity !== 'number' || quantity < 0) return false;
  if (!category || typeof category !== 'string') return false;
  return true;
};

// 1. Get All Products
exports.getAllProducts = (req, res) => {
  res.status(200).json(products);
};

//  Search Products by Name
exports.searchProducts = (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(200).json(products);
  
  const filtered = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  res.status(200).json(filtered);
};

//  Low Stock Products (< 5)
exports.getLowStock = (req, res) => {
  const lowStock = products.filter(p => p.quantity < 5);
  res.status(200).json(lowStock);
};

//  Total Inventory Value
exports.getTotalValue = (req, res) => {
  const totalInventoryValue = products.reduce((acc, p) => acc + (p.price * p.quantity), 0);
  res.status(200).json({ totalInventoryValue });
};

//  Filter by Category
exports.getByCategory = (req, res) => {
  const category = req.params.category;
  const filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  res.status(200).json(filtered);
};

//  Products Under Price
exports.getUnderPrice = (req, res) => {
  const maxPrice = parseFloat(req.params.price);
  if (isNaN(maxPrice)) {
    return res.status(400).json({ message: "Invalid price parameter" });
  }
  const filtered = products.filter(p => p.price < maxPrice);
  res.status(200).json(filtered);
};

// 2. Get Product by ID
exports.getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json(product);
};

// 3. Add New Product
exports.createProduct = (req, res) => {
  if (!validateProduct(req.body)) {
    return res.status(400).json({ message: "Validation failed" });
  }

  const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
  const newProduct = { id: newId, ...req.body };

  products.push(newProduct);
  res.status(201).json(newProduct);
};

// 4. Update Product
exports.updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (!validateProduct(req.body)) {
    return res.status(400).json({ message: "Validation failed" });
  }

  products[index] = { id, ...req.body };
  res.status(200).json(products[index]);
};

// 5. Delete Product
exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(index, 1);
  res.status(200).json({ message: "Product deleted successfully" });
};