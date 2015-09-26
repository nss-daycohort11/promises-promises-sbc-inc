define(function(require) {
  var _ = require("lodash");

  return {
    load: function(fn) {
      // This AJAX call should be in its own require module, not here
      $.ajax("https://nss-book-store.firebaseio.com/booktypes.json").done(function(types) {
        $.ajax("https://nss-book-store.firebaseio.com/books.json").done(function(books) {

          // This code is dependent upon two XHRs and violates
          // the Single Responsibility Principle
          types = Object.keys( types ).map(key => types[ key ]);
          books = Object.keys( books ).map(key => books[ key ]);

          var books = books.map(book => {
            book.type = _.find(types, { id:book.booktype }).label;
            return book;
          });

          // Still relying on a callback? That's so 2014...
          fn(books);

        });
      });

    }
  };
});