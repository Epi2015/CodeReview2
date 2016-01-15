$(document).ready(function() {
  $("form.budget").submit(function(event) {

    // Call function on the hotel star form upon users selection //

    // Declaring variable array for our list of hotels "var = hotels"//

    var topics = ["Budget", "3Star", "2Star", "4Star"];

    // Set up a For loop / set index to zero /  set condition to run length of array /adding one until condition is met//
    var stars = $("select.stars").val();


  for (var index = 0; index <= stars; index += 1) {
      location.href = './pages/' + topics[index] + '.html';
    }

    topics.forEach(function (item, index, array) {
      console.log(item, index);

    });
// upon a true conditon of the intial submit we want to stop the loop / possibly by idenfitying the particular index integer corellated with that input string

    event.preventDefault();
  });

});
