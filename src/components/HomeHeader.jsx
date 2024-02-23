import { Link } from 'react-router-dom';
import '../scss/main.scss';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
function HomeHeader() {
  const handleMainMenuClick = (path) => {
    console.log(`redirect to path: ${path}`);
  };

  return (
    <header className='nav-header'>
      <div className='nav-button'>
        <button onClick={() => handleMainMenuClick('/login')}>
          <Link to={'/login'}>Login</Link>
        </button>
        <button onClick={() => handleMainMenuClick('/register')}>
          <Link to={'/register'}>Register</Link>
        </button>
      </div>
      <nav className='nav-button'>
        <button className='login-buttons'>
          <Link to={'/'}>Home</Link>
        </button>
        <button>
          {/* <ScrollLink
            to='home'
            smooth={true}
            duration={500}
            style={{ ...buttonStyle, cursor: 'pointer' }}
          >
            Home
          </ScrollLink> */}
        </button>
        <button className='login-buttons'>
          <Link to={'/about'}>What is it about</Link>
        </button>
        <button>
          {/* <ScrollLink
            to='about'
            smooth={true}
            duration={500}
            style={{ ...buttonStyle, cursor: 'pointer' }}
          >
            What is it about
          </ScrollLink> */}
        </button>
        <button className='login-buttons'>
          <Link to={'/about-us'}>About us</Link>
        </button>
        <button>
          {/* <ScrollLink
            to='about-us'
            smooth={true}
            duration={500}
            style={{ ...buttonStyle, cursor: 'pointer' }}
          >
            About us
          </ScrollLink> */}
        </button>
        <button className='login-buttons'>
          <Link to={'/organizations'}>Foundation & organizations</Link>
        </button>
        <button>
          {/* <ScrollLink
            to='organizations'
            smooth={true}
            duration={500}
            style={{ ...buttonStyle, cursor: 'pointer' }}
          >
            Foundation & organization
          </ScrollLink> */}
        </button>
        <button className='login-buttons'>
          <Link to={'/contact'}>Contact</Link>
        </button>
        <button>
          {/* <ScrollLink
            to='contact'
            smooth={true}
            duration={500}
            style={{ ...buttonStyle, cursor: 'pointer' }}
          >
            Contact
          </ScrollLink> */}
        </button>
      </nav>

      <section
        className='main-header'
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <img
          src='src/assets/Home-Hero-Image.jpg'
          alt='Start helping'
          style={{ marginRight: '20px', maxWidth: '50%', height: 'auto' }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h3 className='main-headline'>
            Start helping!
            <span>Give unwanted things into trusted hands</span>
          </h3>
          <img
            className='decoration'
            src='src/assets/Decoration.svg'
            alt='decoration'
          ></img>
          <div className='add-buttons-section'>
            <button className='add-buttons'>
              <Link to='/login'>Give back the things</Link>
            </button>
            <button className='add-buttons'>
              <Link to='/login'>Organize a collection</Link>
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}
export default HomeHeader;
