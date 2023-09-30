import {NavLink, Outlet} from 'react-router-dom';
import background from './assets/VendingMachine.png';

function App() {

  return (
    <>
      <div id='sidebar'>
        <h1>Vending Machine</h1>
        <nav>
          <ul>
            <li>
              <NavLink to={`chips`}
                className={({isActive, isPending}) =>
                  isActive ? "active" : isPending ? "pending" : ""}>Chips</NavLink>
            </li>
            <li>
              <NavLink to={`soda`}
                className={({isActive, isPending}) =>
                  isActive ? "active" : isPending ? "pending" : ""}>Soda</NavLink>
            </li>
            <li>
              <NavLink to={`sardines`}
                className={({isActive, isPending}) =>
                  isActive ? "active" : isPending ? "pending" : ""}>Sardines</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className='VendingMachine' style={{backgroundImage: `url(${background})`}}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
