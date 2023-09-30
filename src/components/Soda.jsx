import {Link} from 'react-router-dom';
import Message from './Message';
import sodaImage from '../assets/Soda.png';
import './Soda.css';

export default function Soda() {
  return (
    <div className='Soda'>
      <img src={sodaImage} alt='coca cola can' />
      <Message>
        <h1>SODAAAAA IS MY FAVORITE</h1>
        <h3>But now I drink sparkling water instead</h3>
        <p>(I still miss Soda)</p>
        <Link to='/' style={{
          display: 'block',
          color: 'white',
          paddingTop: '1rem',
        }}>Go Back</Link>
      </Message>
      <img src={sodaImage} alt='coca cola can' />
    </div>
  );
}
