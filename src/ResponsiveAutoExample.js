import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shoe from './img/shoe.png';
import { useState } from 'react';
import data from './data.js'
import Card from './Card'

function ResponsiveAutoExample() {
    let [shoes] = useState(data)
   
  return (
    <Container>
      <Row>
        {
          shoes.map((element,index)=>{
            return(
            <Card shoe={shoes[index]} i={index+1}/>
            )
          })
        }
        <Col sm>
        <img src={shoe} width="80%"/>
        <h4>Converse</h4>
         <p>100000</p>
        </Col>
      </Row>
    </Container>
  );
}



export default ResponsiveAutoExample;