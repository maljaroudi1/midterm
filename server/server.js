const mongoose = require('mongoose');
const cors = require('cors');
const app = require('express')();
const bodyParser = require('express').json;

require('dotenv').config();

const mongoURI = process.env.MONGO_URI;



// Student name: Mohammed Aljaroudi
// Student number: 301269584
// Date: 10/12/2023



const port = '5000';
async function startApp() {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4
      });
      console.log('db running');
    } catch (error) {
      console.error('db connection error:', error);
    }
}

  startApp();



const ProductSchemea = new mongoose.Schema({
    product:{
        type: String
    },
    name:{
        type: String
    },
    description:{
        type: String
    },
    price: {
        type: Number
    },
    quantity:{
        type: Number
    },
    category:{
        type: String
    }
})



//ExpressJS
app.use(bodyParser());




app.use(cors({
    origin:'http://localhost:5173',
    allowedHeaders: 'Content-Type,Authorization',
    allowMethods: '*'
}));

const Product = mongoose.model('product', ProductSchemea);


//add product
app.post('/api/product', async (req, res) => {
    try{
      const newProduct = await Product.create(req.body);
      res.status(201).json(newProduct)
      console.log('Welcome to Products App ')
    }catch (err){
      console.error(err);
      res.status(500).json({ message: 'Error product.' });
    }
});

//Find all products
app.get('/api/product', async (req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    }catch(error){
        console.log(error)
    }

});

//find by ID
app.get('/api/product/:id', async (req, res) => {
    const productId = req.params._id; // Get the product ID from the URL parameters

    try {
        const product = await Product.findOne({  productId });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//find all products by name
app.get('/api/product/find/:name', async (req, res) => {
    const  name = req.params.name;

    try {
        const products = await Product.find({ name });



        if (!products || products.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



//update by product ID
app.put('/api/product/put/:id', async (req, res) => {
    const productId = req.params.id; // Get the 'id' parameter from the URL
    const category = req.query.category; // Get the 'category' query parameter from the URL

    try {
      // Use productId and category in your update logic
      const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
        new: true,
      });

      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.json(updatedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});



//delete by product ID
app.delete('/api/product/:id', async (req, res) => {
    const productId = req.params.id;

    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);

      if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }

});


//delete all products
app.delete('/api/product', async (req, res) => {
   const deleteResult = await Product.deleteMany({});
   try{
    if (deleteResult.deletedCount === 0) {
        return res.status(404).json({ message: 'No products found to delete' });
    }

    res.json({ message: 'All products deleted successfully' });
   } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
   }
});



app.listen(port, () => {
    console.log(`Server Running on port ${port}`);

});
