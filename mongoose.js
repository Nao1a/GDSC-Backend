const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/libraryDB')


const bookschema = new mongoose.Schema({
    title: {type:String, required:true},
    author: {type:String, required:true},
    yearpublished: {type:Number, required:true},
    genres: [String],
    availableCopies: {type:Number, default:5}
    
});

const book = mongoose.model('Book', bookschema);


const newbook1 = new book({
    title: "things fall apart",
    author: "chinua achebe",
    yearpublished: 1958,
    genres: "",
    availableCopies: 6
});

const newbook2 = new book ({
    title:"Fairy tales",
    author: "hans christian andersen",
    yearpublished: 1836,
    genres: "",
    availableCopies: 2
});

const newbook3 = new book ({
    title:"the divine comedy",
    author: "dante aligheieri",
    yearpublished: 1315,
    genres: "",
    availableCopies: 3
});

const newbook4 = new book ({
    title:"sumer and akkadian empire",
    author:"Unknown", 
    yearpublished: -1700,
    genres:"",
    availableCopies: 5
});

function addbook (title, author, yearpublished, genres, availableCopies){
    const newbook = new book({
        title:title,
        author:author,
        yearpublished:yearpublished,
        genres:genres,
        availableCopies:availableCopies
    })
    newbook.save()
    .then(Book => console.log(Book))
    .catch(err => console.log(err))
};

function updateAvailableCopies (title, availableCopies){
    book.findOneAndUpdate({title:title}, {availableCopies:availableCopies}, {new: true})
    .then(Book => console.log(Book))
    .catch(err => console.log(err))
};

function findBook(title){
    book.findOne({title:title})
    .then(Book => console.log(Book))
    .then(err => console.log(err))
};

function deleteBook(title){
    book.findOneAndDelete({title:title})
    .catch(err => console.log(err))
};