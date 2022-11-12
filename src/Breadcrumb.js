import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';

function BreadcrumbExample() {
  return (
    <Breadcrumb className='ml-100 mt-30'>
      <span style={{marginRight:"30px",fontSize:"20px"}}>Shoe Mart</span>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Cart</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbExample;