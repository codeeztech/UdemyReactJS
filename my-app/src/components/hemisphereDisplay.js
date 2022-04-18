import React from 'react';
import Northern from '../image/NorthernHemisphere.jpg'
import Southern from '../image/SouthernHemisphere.jpg'
import '../hemisphere.css';
/* eslint-disable */

const HemisphereConfig =  {
    Northern : {
        text : 'Hey this is northern hemisphere',
        image : Northern
    },
    Southern : {
        text : 'Hey this is southern hemisphere',
        image : Southern
    }

}

const DisplayHemisphere = ({latitude}) => {

  const hemisphere  =  latitude > 0 ? 'Northern' : 'Southern';
    
  const {text,image}  = HemisphereConfig[hemisphere]

    return (
        <div className={hemisphere} >
			<div className='ui raised text container segment'>
				<div className='image'>
					<img src={image} alt="hemisphere picture"/>
				</div>
				<div className='ui teal bottom attached label'>
					<h1>{ text }</h1>
				</div>
			</div>
		</div>
    )

    }

export default DisplayHemisphere;