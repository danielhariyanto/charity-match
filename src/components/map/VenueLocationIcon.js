import L from 'leaflet';

export const VenueLocationIcon = L.icon({
  iconUrl: require('../../assets/venue_location_icon.svg'),
  iconRetinaUrl: require('../../assets/venue_location_icon.svg'),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [25, 25],
  className: 'leaflet-venue-icon'
});
