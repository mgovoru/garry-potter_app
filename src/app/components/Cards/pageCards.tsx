import { useSelector } from 'react-redux';
import CardHero from '../Card/pageCard';
import { InitialStore, propsFavoritePage } from '../../types';

export default function Cards(props: propsFavoritePage) {
  const stateHeroes = useSelector((state: InitialStore) => state.heroes);

  const stateFavorite = useSelector((state: InitialStore) => state.favorite);

  return (
    <>
      {!props.favoriteChoose
        ? stateHeroes
            .slice(
              (props.numberPage - 1) * 20,
              (props.numberPage - 1) * 20 + 20
            )
            .map((hero) => {
              return <CardHero hero={hero} key={Math.random() * 100} />;
            })
        : stateHeroes
            .filter((hero) => stateFavorite.indexOf(hero.id) !== -1)
            .slice((props.numberPage - 1) * 20, props.numberPage - 1 + 20)
            .map((hero) => {
              return <CardHero hero={hero} key={Math.random() * 100} />;
            })}
    </>
  );
}
