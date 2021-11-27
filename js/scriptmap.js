function iniciarMap(){
    var coord = {lat:16.281073 ,lng: -97.8239745};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}