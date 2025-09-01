'use client';

import { useSelector } from 'react-redux';
import { InitialStore } from '../../types';
import Cards from '../../components/Cards/pageCards';
import { favoriteTexts } from '../../constants/texts';

export default function FavoritePage() {
  const stateFavorite = useSelector((state: InitialStore) => state.favorite);

  return (
    <div className='flex flex-col items-center gap-8 p-4'>
      <h1 className='text-3xl font-bold text-white'>{favoriteTexts.title}</h1>
      {stateFavorite.length === 0 ? (
        <p className='text-xl text-white'>{favoriteTexts.empty}</p>
      ) : (
        <Cards numberPage={1} favoriteChoose={true} />
      )}
    </div>
  );
}
