import StarRating from "./StarRating";

const OfferItem = ({ name, image, cashback, category, rating }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg fade-in-up">
            <img className="w-full" src={image} alt="Mountain" />
            <div className="px-6 py-4">
                <div className="title font-bold text-xl mb-2">{name}</div>
                <span className="inline-block primary-bg rounded-full px-3 py-1 text-sm font-semibold right-0 mb-2">
                    {cashback}
                </span>
                <p className="regular-text text-gray-700 text-base">
                    Enjoy this offer of: {cashback}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <StarRating count={rating}/>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {category}
                </span>
            </div>
        </div>
    );
};

export default OfferItem;
