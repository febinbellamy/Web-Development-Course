const Product = require("./models/product");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/farmStand");
const Cat = mongoose.model("Cat", { name: String });
const kitty = new Cat({ name: "testing" });
kitty.save().then(() => console.log("Mongo connecton open"));

const p = new Product({
  name: "Ruby Grapefruit",
  price: 1.99,
  category: "fruit",
});
p.save()
  .then((p) => {
    console.log(p);
  })
  .catch((e) => {
    console.log(e);
  });

const seedProducts = [
  {
    name: "Eggplant",
    price: 1.0,
    category: "vegetable",
  },
  {
    name: "Melon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Organic Celery",
    price: 2.99,
    category: "vegetable",
  },
  {
    name: "Chocolate Milk",
    price: 2.99,
    category: "dairy",
  },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
