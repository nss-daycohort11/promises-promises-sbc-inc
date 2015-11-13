define(["jquery", "q"], function($, Q) {

  var deferred = Q.defer();
  console.log("kitten power")
  return {

// This function does one thing, and returns a promise

    load: function(fn) {
      
        $.ajax({url: "https://nss-book-store.firebaseio.com/booktypes.json"})
            .done(function(types) {
              deferred.resolve(types);
            }).fail(function(xhr, status, error) {
              deferred.reject(error);
            });

            return deferred.promise;

            fn(types);
        
          // Still relying on a callback? That's so 2014...
          // fn(books);

        }     
    }
});