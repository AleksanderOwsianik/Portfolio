import { useState } from 'react';
import '../scss/main.scss';
import ReactPaginate from 'react-paginate';

function FoundationOrganizations() {
  const [activeButton, setActiveButton] = useState('foundation');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const foundationData = [
    {
      name: 'Foundation "I care for Health"',
      description:
        'Goal and mission: Helping people in difficult life situation.',
      text: 'clothes, food, household, appliances, furniture, toys',
    },
    {
      name: 'Foundation "For Children"',
      description: 'Goal and mission: Helping children from poor families.',
      text: 'clothes, furniture, toys',
    },
    {
      name: 'Foundation "Without Home',
      description:
        'Goal and mission: Help for people without a place of residence.',
      text: 'clothes, food, warm blankets',
    },
    {
      name: 'TEST PAGINATION Foundation "I care for Health"',
      description:
        'Goal and mission: Helping people in difficult life situation.',
      text: 'clothes, food, household, appliances, furniture, toys',
    },
    {
      name: 'TEST PAGINATION Foundation "For Children"',
      description: 'Goal and mission: Helping children from poor families.',
      text: 'clothes, furniture, toys',
    },
    {
      name: 'TEST PAGINATION Foundation "Without Home',
      description:
        'Goal and mission: Help for people without a place of residence.',
      text: 'clothes, food, warm blankets',
    },
    {
      name: 'TEST PAGINATION 3 Foundation "I care for Health"',
      description:
        'Goal and mission: Helping people in difficult life situation.',
      text: 'clothes, food, household, appliances, furniture, toys',
    },
    {
      name: 'TEST PAGINATION 3 Foundation "For Children"',
      description: 'Goal and mission: Helping children from poor families.',
      text: 'clothes, furniture, toys',
    },
    {
      name: 'TEST PAGINATION 3 Foundation "Without Home',
      description:
        'Goal and mission: Help for people without a place of residence.',
      text: 'clothes, food, warm blankets',
    },
  ];

  const organizationData = [
    {
      name: 'Organization "You are Not Alone Foundation for Seniors"',
      description: 'Goal and mission: We help seniors with everyday activities',
      text: 'walking together, shooping ',
    },
    {
      name: 'Organization "Rainbow Foundation"',
      description: 'Goal and mission: Helping animal',
      text: 'blankets, food, equipment for animal',
    },

    {
      name: 'Organization "You are Not Alone Foundation for Seniors"',
      description: 'Goal and mission: We help seniors with everyday activities',
      text: 'walking together, shooping ',
    },
    {
      name: 'TEST PAGINATION 2 Organization "Rainbow Foundation"',
      description: 'Goal and mission: Helping animal',
      text: 'blankets, food, equipment for animal',
    },
    {
      name: 'TEST PAGINATION 2 Organization "You are Not Alone Foundation for Seniors"',
      description: 'Goal and mission: We help seniors with everyday activities',
      text: 'walking together, shooping ',
    },
    {
      name: 'TEST PAGINATION 2 Organization "Rainbow Foundation"',
      description: 'Goal and mission: Helping animal',
      text: 'blankets, food, equipment for animal',
    },
  ];

  const localCollectionsData = [
    {
      name: 'Local Food Drive "Neighbors Helping Neighbors"',
      description:
        'Our Mission: Supporting families in need by providing food assistance',
      text: 'Accepting donations of non-perishable food items and personal hygiene products',
    },
    {
      name: 'Community Clothing Donation Center "Warm Hearts"',
      description: 'Our Mission: Keeping our community warm and clothed',
      text: 'Accepting gently used clothing, coats, and blankets for those in need',
    },
    {
      name: 'Community Toy Drive "Joyful Smiles"',
      description:
        'Our Mission: Spreading joy to children in need through toy donations',
      text: 'Accepting new and gently used toys, games, and books for children of all ages',
    },
  ];
  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    setCurrentPage(0);
  };

  const renderContent = () => {
    let data = [];

    switch (activeButton) {
      case 'foundation':
        data = foundationData;
        break;
      case 'organization':
        data = organizationData;
        break;
      case 'local':
        data = localCollectionsData;
        break;
      default:
        break;
    }

    const offset = currentPage * itemsPerPage;
    const currentPageData = data.slice(offset, offset + itemsPerPage);

    return currentPageData.map((item, index) => (
      <div key={index}>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <p className='donate-things'>{item.text}</p>
        <hr></hr>
      </div>
    ));
  };

  const pageCount = Math.ceil(
    (activeButton === 'foundation'
      ? foundationData
      : activeButton === 'organization'
      ? organizationData
      : localCollectionsData
    ).length / itemsPerPage,
  );

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className='foundation-organizations'>
      <h3 className='main-headline'>Who do we help?</h3>
      <img
        className='decoration'
        src='src/assets/Decoration.svg'
        alt='decoration'
      />
      <div className='foundation-text'>
        <button
          onClick={() => handleButtonClick('foundation')}
          className={activeButton === 'foundation' ? 'active' : ''}
        >
          Foundation
        </button>
        <button
          onClick={() => handleButtonClick('organization')}
          className={activeButton === 'organization' ? 'active' : ''}
        >
          Organization
        </button>
        <button
          onClick={() => handleButtonClick('local')}
          className={activeButton === 'local' ? 'active' : ''}
        >
          Local collections
        </button>
        <p className='about-us-text'>
          In our database you will find a list of verified
          Foundation,Oorganization, Local collections with we cooperate. You can
          chec what thes do, who they help and what they need.{' '}
        </p>
      </div>
      <div className='foundation-description-text'>{renderContent()}</div>
      <ReactPaginate
        previousLabel={<img src='src/assets/arrow-left.svg' alt='previous' />}
        nextLabel={<img src='src/assets/arrow-right.svg' alt='next' />}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default FoundationOrganizations;
