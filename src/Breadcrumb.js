import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router-dom';
function BreadcrumbExample() {
  let Navigate= useNavigate();
  return (
    <Breadcrumb className='ml-100 mt-30'>
      <span style={{marginRight:"30px",fontSize:"20px"}}>Shoe Mart</span>
      <h5 onClick={()=>{Navigate('/')}} className='nav_item'>Home</h5>
      <h5 onClick={()=>{Navigate('/detail')}}  className='nav_item'>Cart</h5>
    </Breadcrumb>
  );
}

export default BreadcrumbExample;