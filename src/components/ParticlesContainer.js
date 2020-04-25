import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './particle.css';

const particlesOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  };

class ParticlesContainer extends Component {
render() {
    return ( 
        <Particles  className='particle'
            params={particlesOptions} />
    );
}
}

export default ParticlesContainer;