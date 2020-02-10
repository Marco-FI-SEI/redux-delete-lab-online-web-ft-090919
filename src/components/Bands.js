import React from 'react';
import Band from './Band'

const Bands = props => {
  const bandsArray = props.bands.map(band => <Band key={band.id} {...band} dispatch={props.dispatch}/>)

  return (
    <div>
      {bandsArray}
    </div>
  );

};

export default Bands;
