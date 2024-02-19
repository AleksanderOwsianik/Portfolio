import { Link } from 'react-router-dom';

function MainSection() {
  const styleLink = {
    padding: '10px 20px',
    borderRadius: '10px',
  };

  return (
    <section>
      <Link className='link' style={styleLink} to='/login'>
        Oddaj rzeczy
      </Link>
      <Link to='/login'>Zorganizuj zbiórkę</Link>
    </section>
  );
}

export default MainSection;
