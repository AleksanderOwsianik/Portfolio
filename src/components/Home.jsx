import AboutUs from './AboutUs';
import FoundationOrganizations from './FoundationOrganizations';
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
      <AboutUs />
      <FoundationOrganizations />
    </div>
  );
}
export default Home;
