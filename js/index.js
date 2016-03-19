// Create a global variable for the total
// Create a function you can run when you submit the field Hint: .submit() in jQuery

// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)


$(function()
{

		var add = 0;
    var total = 0;
    var new_entry = 0;

    $('#newEntry').keydown(function (e){
      if (e.keyCode == 13) {
        event.preventDefault();
				new_entry = $('#newEntry').val();
        total = parseFloat(total) + parseFloat(new_entry);
        new_entry = parseFloat(new_entry).toFixed(2);
        total = parseFloat(total).toFixed(2);
        $("#entries").append("<tr><td>$" + new_entry + "</td></tr>");
        $("#total").html('$' + total);
        
      }
    });

});