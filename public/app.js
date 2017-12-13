const initialize = function () {
  const container = document.querySelector('#main-map')
  const options = {
    center: {
      lat: 55.946991,
      lng: -3.201903
    },
    zoom: 18,
    styles: [
      {
        'featureType': 'administrative',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'poi',
        'stylers': [
          {
            'visibility': 'simplified'
          }
        ]
      },
      {
        'featureType': 'road',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'simplified'
          }
        ]
      },
      {
        'featureType': 'water',
        'stylers': [
          {
            'visibility': 'simplified'
          }
        ]
      },
      {
        'featureType': 'transit',
        'stylers': [
          {
            'visibility': 'simplified'
          }
        ]
      },
      {
        'featureType': 'landscape',
        'stylers': [
          {
            'visibility': 'simplified'
          }
        ]
      },
      {
        'featureType': 'road.highway',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'road.local',
        'stylers': [
          {
            'visibility': 'on'
          }
        ]
      },
      {
        'featureType': 'road.highway',
        'elementType': 'geometry',
        'stylers': [
          {
            'visibility': 'on'
          }
        ]
      },
      {
        'featureType': 'water',
        'stylers': [
          {
            'color': '#84afa3'
          },
          {
            'lightness': 52
          }
        ]
      },
      {
        'stylers': [
          {
            'saturation': -17
          },
          {
            'gamma': 0.36
          }
        ]
      },
      {
        'featureType': 'transit.line',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#3f518c'
          }
        ]
      }
    ]
  }
  const mainMap = new MapWrapper(container, options)
  mainMap.addClickEvent()

  const infoWindow = new google.maps.InfoWindow({
    content: 'CodeClan'
  })

  const marker = new google.maps.Marker({
    position: options.center,
    map: mainMap.googleMap,
  })

  marker.addListener('click', function () {
    infoWindow.open(mainMap.googleMap, marker)
  })

  const chicagoButton = document.querySelector('#move-location')
  chicagoButton.addEventListener('click', function () {
    mainMap.googleMap.setCenter({
      lat: 41.878114,
      lng: -87.629798
    })
  })

  const locationButton = document.querySelector('#find-location')
  navigator.geolocation.getCurrentPosition(function (position) {
    locationButton.addEventListener('click', function () {
      mainMap.googleMap.setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    })
  })
}

document.addEventListener('DOMContentLoaded', initialize)