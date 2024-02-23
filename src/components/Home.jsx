import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import MainSection from './MainSection';
import WhatIsItAbout from './WhatIsItAbout';

function Home() {
  return (
    <div className='home'>
      <HomeHeader />
      <HomeThreeColumns />
      <MainSection />
      <WhatIsItAbout />
    </div>
  );
}
export default Home;
