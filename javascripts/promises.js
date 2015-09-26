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

    books.load(function(bookArray) {
      require(['hbs!../templates/books'], function(bookTpl) {
        $("#bookList").html(bookTpl({ books:bookArray }));
      });
    });

    /*
      getBookTypes()
        .then(function(types) {
          getBooks(types);
        })
        .then(function(books) {
          // add the type key to each book that is currently
          // being performed in the get-books file

          // then bind the template to the data
          require(['hbs!../templates/books'], function(bookTpl) {
            $("#bookList").html(bookTpl({ books:bookArray }));
          });

        })
     */

  }
);
