import {Button} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import checkServerStatus from '../backend/public/ServerStatus';

function simulateNetworkRequest() {
  
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
  function LoadingButton() {
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => setLoading(true);
    const currentLoginSignupState = useSelector((state) => state.loginSignupState);
    return (
      <Button
        variant="outline-dark"
        disabled={isLoading}
        onClick={() => {
          (!isLoading ? handleClick : null) && 
          checkServerStatus();
        }}
        
      >
        {isLoading ? 'Loading…' : currentLoginSignupState == 0? 'Login' : 'Sign Up'}
      </Button>
    );
  }
  
 export default LoadingButton;