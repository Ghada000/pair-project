
$(document).ready(function() {
    $('#searchInput').on('input', function() {
      var query = $(this).val().toLowerCase();
  

      $('#itemList li').each(function() {
      
        var itemText = $(this).text().toLowerCase();
        
        if (itemText.includes(query)) {
        
          $(this).show();
        } else {
         
          $(this).hide();
        }
      });
    });
  });

  