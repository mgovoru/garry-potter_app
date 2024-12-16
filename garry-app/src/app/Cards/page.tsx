import { useSelector } from 'react-redux';
import CardHero from '../components/Card/page';
import { InitialStore, propsFavoritePage } from '../types';

export function Cards(props: propsFavoritePage) {

  const stateHeroes = useSelector((state: InitialStore) => state.heroes);

  const stateFavorite = useSelector((state: InitialStore) => state.favorite);

  return (
    <>
      {props.favorite !== 'favorite'
        ? stateHeroes
            .slice(
              (props.numberPage - 1) * 20,
              (props.numberPage - 1) * 20 + 20
            )
            .map((hero, index) => {
              return <CardHero hero={hero} key={index} />;
            })
        : stateHeroes
            .filter((hero) => stateFavorite.indexOf(hero.id) !== -1)
            .slice((props.numberPage - 1) * 20, props.numberPage - 1 + 20)
            .map((hero, index) => {
              return <CardHero hero={hero} key={index} />;
            })}
    </>
  );
}
