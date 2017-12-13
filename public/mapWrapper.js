const MapWrapper = function (container, options) {
  this.googleMap = new google.maps.Map(container, {
    zoom: options.zoom,
    center: options.center,
    styles: options.styles
  })
  this.markers = []
}

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
  })

  this.markers.push(marker)
}

MapWrapper.prototype.addClickEvent = function () {
  google.maps.event.addListener(this.googleMap, 'click', (event) => {
    const position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    }
    this.addMarker(position)
  })
}