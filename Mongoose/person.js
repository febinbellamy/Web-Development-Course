const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shopApp");

const Cat = mongoose.model("Cat", { name: String });
const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function () {
    this.first = "first";
    this.last = "last";
    console.log("About to save")
})

personSchema.post('save', async function () {
    console.log("Saved")
})

const Person = mongoose.model('Person', personSchema);


