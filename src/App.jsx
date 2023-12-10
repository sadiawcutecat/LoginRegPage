
import Button from '@mui/material/Button';


import Stack from '@mui/material/Stack';
import './App.css'
import { Link } from 'react-router-dom';

function App() {


  return (
    <>
      <Stack direction="row" spacing={2}>
        {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button> */}
        <Link to='/login'>
          <Button variant="contained" >Login</Button>
        </Link>
        <Link to='/signup'>
          <Button variant="contained" >Sing Up</Button>
        </Link>

      </Stack>

    </>
  )
}

export default App
