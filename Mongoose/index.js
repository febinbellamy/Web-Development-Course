const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/movieApp");

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const movie = mongoose.model('Movie', movieSchema);
const amadeus = new movie({title: 'Amadeus', year: 1986, score: 9.2, rating: "R"});
amadeus.save();

movie.insertMany([
    {title: 'Amadeus', year: 1986, score: 9.2, rating: "R"},
    {title: 'Alien', year: 1953, score: 4.6, rating: "PG"},
    {title: 'Iron', year: 1996, score: 5.5, rating: "R"},
    {title: 'Lion', year: 1990, score: 9.0, rating: "PG"}
]) 
.then (data => {
    console.log("It worked!")
    console.log(data)
})



