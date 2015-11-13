define(function(require) {
  var _ = require("lodash");

  var deferred = Q.defer();

  return {

// This function does one thing, and returns a promise

    load: function(fn) {
      
        $.ajax({url: "https://nss-book-store.firebaseio.com/books.json"})
            .done(function(books) {
            deferred.resolve(data);
            }).fail(function(xhr, status, error) {
            deferred.reject(error);
            });

            return deferred.promise;
        
          // Still relying on a callback? That's so 2014...
          // fn(books);

        }     
    }
});