import { NUMBER_OF_SHIMMER_CARDS } from '../utils/constants';

const ShimmerCard = () => {
  const generateShimmerCards = (numberOfShimmerCards) => {
    const cards = [];
    while (numberOfShimmerCards > 0) {
      cards.push(
        <div
          className="restaurant-card-shimmer"
          key={numberOfShimmerCards}
        ></div>
      );
      numberOfShimmerCards = numberOfShimmerCards - 1;
    }
    return cards;
  };
  const shimmerCards = generateShimmerCards(NUMBER_OF_SHIMMER_CARDS);
  return <div className="restaurant-container-shimmer">{shimmerCards}</div>;
};

export default ShimmerCard;
