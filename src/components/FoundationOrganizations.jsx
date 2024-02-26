import { useState } from 'react';
import '../scss/main.scss';

function FoundationOrganizations() {
  const [activeButton, setActiveButton] = useState('fundation');

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
  ];

  const organizationDate = [
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
  };

  const renderContent = () => {
    switch (activeButton) {
      case 'fundation':
        return foundationData.map((foundation, index) => (
          <div key={index}>
            <h4>{foundation.name}</h4>
            <p>{foundation.description}</p>
            <p className='donate-things'>{foundation.text}</p>
          </div>
        ));
      case 'organization':
        return organizationDate.map((organization, index) => (
          <div key={index}>
            <h4>{organization.name}</h4>
            <p>{organization.description}</p>
            <p className='donate-things'>{organization.text}</p>
          </div>
        ));
      case 'local':
        return localCollectionsData.map((localCollection, index) => (
          <div key={index}>
            <h4>{localCollection.name}</h4>
            <p>{localCollection.description}</p>
            <p className='donate-things'>{localCollection.text}</p>
          </div>
        ));
      default:
        return null;
    }
  };
  return (
    <div className='foundation-organizations'>
      <h3 className='main-headline'>Who do we help?</h3>
      <img
        className='decoration'
        src='src/assets/Decoration.svg'
        alt='decoration'
      />
      <div className='fundation-text'>
        <button
          onClick={() => handleButtonClick('fundation')}
          className={activeButton === 'fundation' ? 'active' : ''}
        >
          Fundation
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
        <h4>
          In our database you will find a list of verified
          Foundation,Oorganization, Local collections with we cooperate. You can
          chec what thes do, who they help and what they need.{' '}
        </h4>
      </div>
      <div className='fundation-description-text'>{renderContent()}</div>
    </div>
  );
}

export default FoundationOrganizations;
