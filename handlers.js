var Book = require('./models/book.js');


module.exports.handelBook = {
  // get book from data base
	showbook: function(req, res)  {
		Book.getBooks(function(err, books)  {
			if(err){
				throw err;
			}
			res.json(books);
		});
	},

  updatebook: function(req,res){
    var book = req.body;
    console.log(book)
    Book.updateBooks({_id:req.body._id},req.body,function (err, book){
      if(err){
        throw err;
      }
      res.json(book);
    });
  },
  // add book to data base
	addbook : function(req, res)  {
   console.log(req.body.price)
		var book = req.body;
		Book.addBook(book, function (err, book) {
			if(err){
				throw err;
			}
			res.json(book);
		});
	},
}

