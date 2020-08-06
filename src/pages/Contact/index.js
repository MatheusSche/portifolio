import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

import { Container, Card } from './styles';

function Contact() {
  return (
    <Container>
      <Card>
        <div>
          <FaEnvelope size={50} />
        </div>
        
        <p>mathesche@gmail.com</p>
      </Card>

      <Card>
        <div>
          <FaPhone size={50} />
        </div>
        <p>(54) 99156-6298</p>
      </Card>

      <Card>
        <div>
          <FaMapMarkerAlt size={50}  />
        </div>
        <p>Caxias do Sul - RS</p>
      </Card>
    </Container>
  );
}

export default Contact;