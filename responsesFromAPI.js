// API Call
 $(document).ready(function () {
  $.ajax({
    type: 'GET',
    url : 'https://liveapi.yext.com/v2/accounts/me/locations/8696490560696135898?api_key=92ca716c35bc76afb5684d5ab66fa95e&v=20180305',
    success: function(data, textStatus, xhr){
      renderPage(JSON.parse(xhr.responseText).response);
    }, error: function(xhr, textStatus, errorThrown) {
      console.log('Unable to load data')
    }
  });
});

function renderPage(answer) {
  // document.getElementById("locationName").innerHTML = answer.locationName;
  $("#locationName").text(answer.locationName);
  $("#address").text(answer.address);
  $("#address2").text(answer.address2);
  $("#city").text(answer.city);
  $("#state").text(answer.state);
  $("#zip").text(answer.zip);
  $("#phone").text(formatPhoneNumber(answer.phone));
  $("#phone").attr("href", "tel:" + answer.phone);
  $("#featuredMessage").text(answer.featuredMessage);
  $("#websiteUrl").attr("href", answer.websiteUrl);
  $("#description").text(answer.description);

  return;
}

function formatPhoneNumber(s) {
  var s2 = (""+s).replace(/\D/g, '');
  var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
  return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
}



/********* 
  Notes
  document.getElementById("locationName").innerHTML = answer.locationName;
**********/