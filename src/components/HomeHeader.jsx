import { Link } from 'react-router-dom';
import '../scss/main.scss';
import { Link as ScrollLink } from 'react-scroll';
function HomeHeader() {
  const handleMainMenuClick = (path) => {
    console.log(`redirect to path: ${path}`);
  };

  return (
    <header className='nav-header'>
      <div className='login-buttons'>
        <button
          className='login-buttons-login'
          onClick={() => handleMainMenuClick('/login')}
        >
          <Link to={'/login'}>Login</Link>
        </button>
        <button
          className='login-buttons-register'
          onClick={() => handleMainMenuClick('/register')}
        >
          <Link to={'/register'}>Register</Link>
        </button>
      </div>
      <nav className='nav-button'>
        <button className='nav-buttons'>
          <ScrollLink to='home' smooth={true} duration={2222}>
            Home
          </ScrollLink>
        </button>
        <button className='nav-buttons'>
          <ScrollLink to='simple-steps' smooth={true} duration={2222}>
            What is it about
          </ScrollLink>
        </button>
        <button className='nav-buttons'>
          <ScrollLink to='about-us-container' smooth={true} duration={2222}>
            About us
          </ScrollLink>
        </button>
        <button className='nav-buttons'>
          <ScrollLink
            to='foundation-organizations'
            smooth={true}
            duration={2200}
          >
            Foundation & organization
          </ScrollLink>
        </button>
        <button className='nav-buttons'>
          <ScrollLink to='contact' smooth={true} duration={2222}>
            Contact
          </ScrollLink>
        </button>
      </nav>

      <section className='home-section'>
        <img
          src='src/assets/Home-Hero-Image.jpg'
          alt='Start helping'
          className='home-image'
        />
        <div className='text-container'>
          <h3 className='main-headline'>
            Start helping!<br></br>
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
