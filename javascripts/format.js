define(["jquery", "hbs"], 
  function($, handlebars) {

  return {

    formatData: function(bookAray) {

         require(['hbs!../templates/books'], function(bookTpl) {
            $("#bookList").html(bookTpl({ books:bookArray }));
        });
    }

  }
});