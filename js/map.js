function initMap() {
  const baseLocation = { lat: 49.58350227730641, lng: 34.58231883387771 };

  const map = new google.maps.Map(document.getElementById('js-map'), {
    zoom: 17,
    center: baseLocation,
  });
  const marker = new google.maps.Marker({
    position: baseLocation,
    map: map,
  });
}
