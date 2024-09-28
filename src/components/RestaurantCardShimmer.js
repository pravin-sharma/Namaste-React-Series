import { NUMBER_OF_SHIMMER_CARDS } from '../utils/constants';

const ShimmerCard = () => {
  const generateShimmerCards = (numberOfShimmerCards) => {
    const cards = [];
    while (numberOfShimmerCards > 0) {
      cards.push(
        <div
          className="border border-gray-300 bg-orange-200 rounded-xl m-4 w-80 h-96 flex flex-col p-4"
          key={numberOfShimmerCards}
        ></div>
      );
      numberOfShimmerCards = numberOfShimmerCards - 1;
    }
    return cards;
  };
  const shimmerCards = generateShimmerCards(NUMBER_OF_SHIMMER_CARDS);
  return <div className="flex flex-wrap justify-start">{shimmerCards}</div>;
};

export default ShimmerCard;
