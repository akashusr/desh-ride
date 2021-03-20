import React, { useEffect, useState } from 'react';
import map from '../Image/Map.png'
import './FinalDestination.css';


const FinalDestination = () => {
  const [ride, setRide] = useState([]);

  useEffect(() => {
    fetch(`https://api.mocki.io/v1/bb675702/rides`)
      .then(res => res.json())
      .then(data => setRide(data))
  }, [])
  // console.log("pp", ride[0].name);
  const { id, name, price, image } = ride;
  return (
    <div className=" container main-content">

      <div className="text" >
        <div className='divStyle'>
          <h4> Mirpur</h4>
          <h4> Gulsha</h4>
        </div>
        <div className="bike">
          <p><img className="image" src={image} alt="" /><span style={{ marginLeft: '20px' }}> {name}</span> <span style={{ marginLeft: '20px' }}> {id}</span> <span style={{ marginLeft: '20px' }}> {price}</span></p>
        </div>
        <div className="bike">
          <p><img className="image" src={image} alt="" /><span style={{ marginLeft: '20px' }}> {name}</span> <span style={{ marginLeft: '20px' }}> {id}</span> <span style={{ marginLeft: '20px' }}> {price}</span></p>
        </div>
        <div className="bike">
          <p><img className="image" src={image} alt="" /><span style={{ marginLeft: '20px' }}> {name}</span> <span style={{ marginLeft: '20px' }}> {id}</span> <span style={{ marginLeft: '20px' }}> {price}</span></p>
        </div>

      </div>
      <div>
        <img className="image" src={map} alt="" />
      </div>
    </div>
  );
};

export default FinalDestination;