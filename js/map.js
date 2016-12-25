var myMap;
ymaps.ready(init);

function init() {
  myMap = new ymaps.Map('contacts-map', {
    center: [59.936249884406166, 30.321582336587152],
    controls: ['zoomControl'],
    zoom: 15
  });
  myMap.geoObjects.add(new ymaps.Placemark(myMap.getCenter(), {
    balloonContentHeader: '<strong>Pink!</strong>',
    balloonContentBody: 'Адрес: ул. Большая Конюшенная, 19/8',
    balloonContentFooter: 'Телефон: +7 (812) 555-66-66'
  }, {
    iconLayout: 'default#image',
    iconImageSize: [36, 35],
    iconImageOffset: [-18, -18],
    iconImageHref: 'img/icon-map-marker.svg'
  }));

  myMap.behaviors.disable('scrollZoom');
}
