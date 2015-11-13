define(["jquery", "q"], function($, Q) {

  var deferred = Q.defer();
  console.log("dog power")

  return {

// This function does one thing, and returns a promise

    load: function(fn) {
      
        $.ajax({url: "https://nss-book-store.firebaseio.com/books.json"})
            .done(function(books) 
            {
console.log("working ??", books); 
            deferred.resolve(books);
            }).fail(function(xhr, status, error) {
            deferred.reject(error);
            });

            return deferred.promise;

            fn(books);
        
          // Still relying on a callback? That's so 2014...
          // fn(books);

        }     
    }
});