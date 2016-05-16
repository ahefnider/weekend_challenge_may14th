$(document).ready(function() {
  // event listeners
  $('#add-cat').on('click', function() {
    event.preventDefault();
    var values = {};
    $.each($('#inputForm').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });

    $.ajax({
      type: 'POST',
      url: '/calculator',
      data: values,
      success: function(response) {
        var addNum = secondNum + firstNum;
        return addNum;
        }
      }
    })

  });

  getData();
});
