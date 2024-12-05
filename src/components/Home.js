import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@material-ui/core'; 

function Home() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('./another');
//   };

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/controlled"> <Button color="primary" variant="outlined">Controlled Component</Button> </Link>
      <Link to="/uncontrolled"> <Button color="primary" variant="outlined">UnControlled Component</Button> </Link>
    </div>
  );
}


export default Home;