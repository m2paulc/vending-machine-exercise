import {Link} from 'react-router-dom';
import Message from './Message';
import './Sardines.css';

export default function Sardines() {
  return (
    <div className='Sardines'
      style={{
        backgroundImage:
          "url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif)"
      }}>
      <Message>
        <h1>you do not eat the sardines. the sardines, they eat you!</h1>
        <Link to='/' style={{color: 'white'}}>Go Back</Link>
      </Message>
    </div>
  );
}
