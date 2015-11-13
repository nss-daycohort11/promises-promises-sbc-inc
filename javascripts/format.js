define(["jquery", "hbs"], 
  function($, handlebars) {

  return {

    formatData: function(books) {

         require(['hbs!../templates/books'], function(bookTpl) {
            $("#bookList").html(bookTpl({ books }));
        });
    }

  }
});

