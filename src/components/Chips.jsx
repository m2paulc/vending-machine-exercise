import {useState} from 'react';
import {Link} from 'react-router-dom';
import Message from './Message';
import './Chips.css';
import chipsImage from '../assets/Chips.png';

export default function Chips() {
  const [count, setCount] = useState(0);
  const [bags, setBags] = useState([]);

  const handleClick = () => {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setBags((bags) => [...bags, {x, y}]);
    setCount((count) => count + 1);
  };

  const chipsEaten = bags.map((bag, index) => (
    <img
      key={index}
      src={chipsImage}
      className='bag'
      style={{
        top: `${bag.y}px`,
        left: `${bag.x}px`,
        width: `10rem`
      }}
      alt="bag of lay's chips"
    />
  ));

  return (
    <div className='Chips'>
      <Message>
        <h1>Bags eaten: {count}</h1>
        <button onClick={handleClick}>Eat Chips</button>
        <Link to='/' style={{
          display: 'block',
          color: 'white',
          paddingTop: '1rem',
        }}>Go Back</Link>
      </Message>
      {chipsEaten}
    </div>
  );
}
