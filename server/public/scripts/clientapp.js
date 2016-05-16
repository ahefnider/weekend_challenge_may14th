$(document).on('ready', function(){

  $('.mdas').on('click', function(){
    event.preventDefault();
    var values = {};
    $.each($('#calc').serializeArray(), function(i, field){
      values[field.name] = field.value;
    });
    values.operation = this.name;
    console.log(values);

    $.ajax({
      type: 'POST',
      url: '/index/' + values.operation,
      data: values,
      success: function(response){
        alert(response);
        $('.result').text(response);
      }
    })
  })
  $('.clearForm').on('click', function(){
    

  })

})
