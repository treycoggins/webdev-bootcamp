const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('CONNECTION OPEN!')
})
.catch(err => {
  console.log("OH NO, ERROR!");
  console.log(err)
});


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be positive, ya dodo!']
  },
  onSale: {
    type: Boolean,
    default: false
  },
  categories: {
    type: [String],
    default: ['cycling']
  },
  qty: {
      online: {
        type: Number,
        default: 0
      },
      inStore: {
        type: Number,
        default: 0
      }
    },
  size: {
    type: String,
    enum: ['S', 'M', 'L']
  }
});

// const bike = new Product({ name: 'Mountain Bike', price: 599 })
//   // .save() is required for inserting one document in the database
// bike.save()
//   .then(data => {
//     console.log("IT WORKED!");
//     console.log(data)
//   })
//   .catch(err => {
//     console.log("OH NO, ERROR!");
//     console.log(err);
//   });

// const bikeHelmet = new Product({ name: 'Bike Helmet', price: 29.50, categories: ['cycling', 'safety'] })
// bikeHelmet.save()
//   .then(data => {
//     console.log("IT WORKED!");
//     console.log(data)
//   })
//   .catch(err => {
//     console.log("OH NO, ERROR!");
//     console.log(err);
//   });


// const tirePump = new Product({ name: 'Tire Pump', price: 19.50, categories: ['cycling'] })
// tirePump.save()
//   .then(data => {
//     console.log("IT WORKED!");
//     console.log(data)
//   })
//   .catch(err => {
//     console.log("OH NO, ERROR!");
//     console.log(err);
//   });

// const jersey = new Product({name: 'Cycling Jersey', price: 28.50, categories: ['cycling'], size: 'XS'}) // Invalid size
// jersey.save()
//   .then(data => {
//     console.log("IT WORKED!");
//     console.log(data)
//   })
//   .catch(err => {
//     console.log("OH NO, ERROR!");
//     console.log(err);
//   });



///// Instance Methods and Static Methods




  // always use a traditional function expression when creating instance methods, because the value of this changes with the arrow function
productSchema.methods.greet = function() {
  console.log('Hello! Hi! Howdy!');
  console.log(` - from ${this.name}`);
};


// a function (instance method) to toggle a property on the product schema
productSchema.methods.toggleOnSale = function() {
  this.onSale = !this.onSale;
   // .save() is an asynchronous operation, thus toggleOnSale needs to await, and we can return the thenable object this.save()
  return this.save();
}

productSchema.methods.addCategory = function(newCat) {
  this.categories.push(newCat);
  return this.save();
}
 
  // Static Methods exist on the model itself, not on instances of the model
  // 'this' refers to the model Class
productSchema.statics.fireSale = function() {
  return this.updateMany({}, { onSale: true, price: 0 });
}


const Product = mongoose.model('Product', productSchema);


const findProduct = async () => {
  const foundProduct = await Product.findOne({name: 'Bike Helmet'});
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategory('Outdoors');
  console.log(foundProduct);
}

Product.fireSale().then(res => console.log(res));

// findProduct();




    // runValidators is required to enforce validation on update methods
Product.findOneAndUpdate({ name: 'Tire Pump'}, {price: 19.99 }, {new: true, runValidators: true})
  .then(data => {
    console.log("IT WORKED!");
    console.log(data)
  })
  .catch(err => {
    console.log("OH NO, ERROR!");
    console.log(err);
  });



  
 

