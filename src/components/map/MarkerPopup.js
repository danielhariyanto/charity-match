import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  const { name } = props.data;
  const { link } = props.data;
  console.log(name);

  return  (<Popup>
    <div className='poup-text'><a href={link} target="_blank">{name}</a></div>
  </Popup>);
};

export default MarkerPopup;
