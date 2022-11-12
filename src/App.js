import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BreadcrumbExample from './Breadcrumb';
import ResponsiveAutoExample from './ResponsiveAutoExample';


function App() {
  return (
    <>
    <BreadcrumbExample/>
    <div className='main-bg'></div>
      <div className='padding-100'>
        <ResponsiveAutoExample/>
      </div>
    </>
  );
}

export default App;
