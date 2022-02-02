const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shopApp");

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ["s", "m", "l"],
  },
});

const Product = mongoose.model("Product", productSchema);

const bikeH = new Product({
  name: "Bike Helmet",
  price: 19.5,
  categories: ["cycling", "safety"],
  size: "XS",
});

bikeH
  .save()
  .then((data) => {
    console.log("It worked");
    console.log(data);
  })
  .catch((err) => {
    console.log("Error!");
    console.log(err);
  });
