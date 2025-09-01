import { configureStore } from '@reduxjs/toolkit';
import heroesReducer from '../../../heroesSlice';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import CardHero from '../pageCard';

const mockHero = {
  id: '1',
  name: 'Harry Potter',
  image: 'harry.jpg',
  species: 'human',
  status: 'alive',
  gender: 'male',
  origin: "Godric's Hollow",
  location: 'Hogwarts',
  created: '1980-07-31',
  house: 'Gryffindor',
  hairColour: 'black',
  patronus: 'stag',
  eyeColour: 'green',
  dateOfBirth: '1980-07-31',
  wizard: true,
  hogwartsStudent: true,
};

const store = configureStore({
  reducer: {
    heroes: heroesReducer,
  },
  preloadedState: {
    heroes: {
      heroes: [mockHero],
      favorite: [],
    },
  },
});

describe('CardHero', () => {
  it('renders hero information correctly', () => {
    render(
      <Provider store={store}>
        <CardHero hero={mockHero} />
      </Provider>
    );

    expect(screen.getByText('Harry Potter')).toBeInTheDocument();
    expect(screen.getByText('Факультет: Gryffindor')).toBeInTheDocument();
    expect(screen.getByText('human')).toBeInTheDocument();
  });
});
