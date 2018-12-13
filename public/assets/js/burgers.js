// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {
  $(".notDevoured").on("click", function(event) {
    console.log($(this).attr("record_number"))
    var id = $(this).attr("record_number");

    var updateDevoured = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: updateDevoured
    }).then(
      function() {
        console.log("changed sleep to", updateDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#enterBurger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("new burger created");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});