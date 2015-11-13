requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});

requirejs(
  ["jquery", "hbs", "bootstrap", "get-books"], 
  function($, Handlebars, bootstrap, books) {
 
//Here's some pseudo-code for how it should look once you start using promises
    types.load()
      .then(function(types) {
        console.log("API-types call successful and responded with", types);
        books.load();
      })
      .then(function(books) {
          console.log("API-books call successful and responded with", books);
          
          types = Object.keys( types ).map(key => types[ key ]);
          books = Object.keys( books ).map(key => books[ key ]);

  console.log("types ", types);
  console.log("books ", books);
       
//I'm using the lodash `find()` method here. https://lodash.com/docs#find              
// add the type key to each book that is currently being performed in the get-books file

          var books = books.map(book => {
            book.type = _.find(types, { id:book.booktype }).label;
            return book;
          });

        // then bind the template to the data ----Call a format.js template module"
        // (p.s. make the handlebar template a module dependency)
          format.formatData(books:bookArray);

    });
// Fail gets executed when promise is rejected
      .fail(function(error) {
        console.log("API call failed with error", error);
      });


// firstXHR()
//   .then(function(data1) {
//     return secondXHR(data1);
//   })
//   .then(function(data2) {
//     return thirdXHR(data2);
//   })
//   .done();
});

