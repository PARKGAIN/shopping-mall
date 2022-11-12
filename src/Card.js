import Col from 'react-bootstrap/Col';

function Card(props){
    return(
      <Col sm>
      <img src={'https://codingapple1.github.io/shop/shoes'+props.i+'.jpg'}  width="80%"/>
      <h4>{props.shoe.title}</h4>
      <p>{props.shoe.price}</p>
    </Col>
    )
  }

  export default Card;