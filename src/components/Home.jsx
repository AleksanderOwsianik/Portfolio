import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import MainSection from './MainSection';

function Home() {
  return (
    <div className='home'>
      <h1>Hello i am home</h1>
      <HomeHeader />
      <HomeThreeColumns />
      <MainSection />
    </div>
  );
}
export default Home;
