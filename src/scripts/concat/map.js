function myMap(){
    var mapProp= {
        center:new google.maps.LatLng(-12.938435, -38.488164),
        zoom:15,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
};