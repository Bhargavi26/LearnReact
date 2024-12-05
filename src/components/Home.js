import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@material-ui/core'; 
import ControlledComponent from './ControlledComponent';
import UnControlledComponent from './UnControlledComponent';
import CreateRef from './Ref/CreateRef';
import UseRef from './Ref/UseRef';
import UseRefVsCreateRef from './Ref/UseRefVsCreateRef';
import UseRefReRender from './Ref/UseRefRender';
function Home() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('./another');
//   };

  return (
    <div>
      <h1>Home Page</h1>
      <ControlledComponent/>
      <br />
      <br />
      <UnControlledComponent/>
      <br />
      <br />
      <UseRef/>
      <br />
      <br />
      <CreateRef />
      <br />
      <br />
      <UseRefVsCreateRef/>
      <br />
      <br />
      <UseRefReRender/>
      {/* <Link to="/controlled"> <Button color="primary" variant="outlined">Controlled Component</Button> </Link>
      <Link to="/uncontrolled"> <Button color="primary" variant="outlined">UnControlled Component</Button> </Link>
      <Link to="/useref"> <Button color="primary" variant="outlined">Use Ref</Button> </Link>
      <Link to="/createref"> <Button color="primary" variant="outlined">Create Ref</Button> </Link>
      <Link to="/userrefvscreateref"> <Button color="primary" variant="outlined">Use Ref Vs Create Ref</Button> </Link> */}
    </div>
  );
}


export default Home;