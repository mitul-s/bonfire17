$(document).ready(function(){
  $("#name").change(function() {
  var song = $("#name").val();
  $.ajax({
      type : 'POST',
      url : 'http://ws.audioscrobbler.com/2.0/',
      data : 'method=artist.getinfo&' +
          'artist='+ song + '&' +
          'api_key=57ee3318536b23ee81d6b27e36997cde&' +
          'format=json',
      dataType : 'jsonp',
      success : function(data) {
        $('#artistName').html(data.artist.similar.artist[0].name);
        $('#artistImage').html('<img src="' + data.artist.similar.artist[0].image[2]['#text'] + '" />');
        $('#artistName2').html(data.artist.similar.artist[1].name);
        $('#artistImage2').html('<img src="' + data.artist.similar.artist[1].image[2]['#text'] + '" />');
        $('#artistName3').html(data.artist.similar.artist[2].name);
        $('#artistImage3').html('<img src="' + data.artist.similar.artist[2].image[2]['#text'] + '" />');
      },
      error : function(code, message){
        $('#error').html('Error Code: ' + code + ', Error Message: ' + message);
      }
    });

});
});
