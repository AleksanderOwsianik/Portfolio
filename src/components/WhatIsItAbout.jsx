import '../scss/main.scss';
import { Link } from 'react-router-dom';

function WhatIsItAbout() {
  return (
    <section className='simple-steps'>
      <div>
        <h3 className='main-headline'>Four simple steps are enought</h3>
        <img
          className='decoration'
          src='src/assets/Decoration.svg'
          alt='decoration'
        ></img>
        <div className='icons'>
          <div className='icon'>
            <img src='src/assets/Icon-1.svg' alt='t-shirt'></img>
            <br></br>
            <p className='simple-main-text'>Select things</p>{' '}
            <hr className='hr'></hr>{' '}
            <p className='simple-text'>clothes, toys, equipment and other</p>
          </div>
          <div className='icon'>
            <img src='src/assets/Icon-2.svg' alt='bag'></img>
            <br></br>
            <p className='simple-main-text'>Pack them</p>{' '}
            <hr className='hr'></hr>
            <p className='simple-text'> use garbage bags</p>
          </div>
          <div className='icon'>
            <img src='src/assets/Icon-3.svg' alt='magnifer'></img>
            <br></br>
            <p className='simple-main-text'>Select things</p>{' '}
            <hr className='hr'></hr>
            <p className='simple-text'> clothes, toys, equipment and other</p>
          </div>
          <div className='icon'>
            <img src='src/assets/Icon-4.svg' alt='arrows'></img>
            <br></br>
            <p className='simple-main-text'>Order a courier</p>{' '}
            <hr className='hr'></hr>{' '}
            <p className='simple-text'>
              the courier will arrive at a convenient time
            </p>
          </div>
        </div>
        <button className='add-buttons'>
          <Link to='/login'>Give back the things</Link>
        </button>
      </div>
    </section>
  );
}

export default WhatIsItAbout;
