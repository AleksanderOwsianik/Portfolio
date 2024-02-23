import '../scss/main.scss';
import { Link } from 'react-router-dom';

function WhatIsItAbout() {
  return (
    <section className='simple-steps'>
      <h3 className='main-headline'>Four simple steps are enought</h3>
      <img
        className='decoration'
        src='src/assets/Decoration.svg'
        alt='decoration'
      ></img>
      <div className='icons'>
        <p className='simple-text'>
          <img className='icon' src='src/assets/Icon-1.svg' alt='t-shirt'></img>
          <br></br>
          <span className='simple-text'>
            Select things <hr className='hr'></hr> clothes, toys, equipment and
            other
          </span>
        </p>
        <p>
          <img className='icon' src='src/assets/Icon-2.svg' alt='bag'></img>
          <br></br>
          <span>
            Pack them <hr className='hr'></hr> use garbage bags
          </span>
        </p>
        <p>
          <img
            className='icon'
            src='src/assets/Icon-3.svg'
            alt='magnifer'
          ></img>
          <br></br>
          <span>
            Select things <hr className='hr'></hr> clothes, toys, equipment and
            other
          </span>
        </p>
        <p>
          <img className='icon' src='src/assets/Icon-4.svg' alt='arrows'></img>
          <br></br>
          <span>
            Order a courier <hr className='hr'></hr> the courier will arrive at
            a convenient time
          </span>
        </p>
      </div>
      <button className='add-buttons'>
        <Link to='/login'>Give back the things</Link>
      </button>
    </section>
  );
}

export default WhatIsItAbout;
