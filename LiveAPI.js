
// API Call
 $(document).ready(function () {
  api_key = '92ca716c35bc76afb5684d5ab66fa95e',
  vparam = '20180316',
  $.ajax({
    type: 'GET',
    url : 'https://liveapi.yext.com/v2/accounts/me/locations' + '?api_key=' + api_key + '&v=' + vparam,
    success: function(data, textStatus, xhr){
      renderPage(JSON.parse(xhr.responseText).response);
    }, error: function(xhr, textStatus, errorThrown) {
      console.log('Unable to load data')
    }
  });
});

// Populate information on the page with information from Live API
function renderPage(answer) {

  var html = '<div class="row card-deck">'
  
  for (i = 0; i < answer.count; i++) {
    html += appendLocationCard(answer.locations[i]);
  }

  html += '</div>'
  $("#placeholder").append(html);

  return;
}

// Create the HTML for each card
function appendLocationCard(location) {

  var locationHtml = '<div class="col-md-4">'
  locationHtml += '<div class="card text-center mb-4">'

  locationHtml += '<div class="card-body">'
  locationHtml += '<h5 class="card-title">' + location.locationName + '</h5>'
  locationHtml += '<p class="card-text">' + location.address
  locationHtml += '<br>' + location.address2
  locationHtml += '<br>' + location.city + ' '+ location.state + ' ' + location.zip + '</p>'
  locationHtml += '<p>Call Us: <a href="tel:' + location.phone + '">' + formatPhoneNumber(location.phone) + '</a></p>'
  locationHtml += '<a href=' + location.websiteUrl + ' class="btn btn-primary">Visit Website</a>'
  locationHtml += '</div>'
  
  locationHtml += '</div></div>'

  return locationHtml;
}

function formatPhoneNumber(s) {
  var s2 = (""+s).replace(/\D/g, '');
  var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
  return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
}