define(["jquery", "hbs"], 
  function($, handlebars) {

  return {

    formatData: function(books:bookArray) {

         require(['hbs!../templates/books'], function(bookTpl) {
            $("#bookList").html(bookTpl({ books:bookArray }));
        });
    }

  }
});