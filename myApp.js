require('dotenv').config();
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [{body: String}]
});

let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  const johnnyBananas = new Person({name: 'Johnny Bananas', age: 45, favoriteFoods: ['bananas', 'pizza']});

  johnnyBananas.save(function(err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

const arrayOfPeople = [{name: 'Steven Seagal', age: 73, favoriteFoods: ['beef jerky', 'hamburger']}, {name: 'Wes Bergman', age: 41, favoriteFoods: ['whey protein', 'oranges']}, {name: 'Killa Kam', age: 29, favoriteFoods: ['pasta', 'sandwiches']}];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

const personName = 'Johnny Bananas';

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, names) {
    if (err) return console.log(err);
    done(null, names);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({name: 'Killa Kam'}, function(err, name) {
    if (err) return console.log(err);
    done(null, name);
  })
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
