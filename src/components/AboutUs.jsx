import '../scss/main.scss';
//import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className='about-us-container'>
      <div className='about-us-content'>
        <div className='about-us'>
          <h3 className='main-headline'>
            About us<br></br>
          </h3>
          <img
            src='src/assets/Decoration.svg'
            alt='decoration'
            className='decoration'
          />

          <p className='about-us-text'>
            Welcome to our platform! We are a team of passionate individuals
            dedicated to making a positive impact in our community. At MPS, our
            mission is simple: to connect those in need with those who can help.
            Founded in 2015, we have been serving our community for 5 years,
            providing assistance to countless families and individuals in need.
            Through our platform, we strive to make giving back as easy and
            convenient as possible. Our dedicated volunteers work tirelessly to
            collect donations, organize events, and distribute aid to those who
            need it most. However, we cannot do it alone. It is thanks to the
            generosity and support of people like you that we are able to
            continue our work. Whether you are donating your time, money, or
            resources, every contribution helps us make a difference. Join us in
            our mission to create a better, more compassionate world. Together,
            we can make a lasting impact and build a brighter future for all.
          </p>
          <img
            className='signature'
            src='src/assets/Signature.svg'
            alt='signature'
          ></img>
        </div>
      </div>
      <img
        src='src/assets/People.jpg'
        alt='Start helping'
        className='home-image'
      />
    </div>
  );
}

export default AboutUs;
