const OfferItem = props => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg fade-in-up">
            <img class="w-full" src={props.image} alt="Mountain" />
            <div class="px-6 py-4">
                <div class="title font-bold text-xl mb-2">{props.name}</div>
                <span class="inline-block primary-bg rounded-full px-3 py-1 text-sm font-semibold right-0 mb-2">
                    {props.cashback}
                </span>
                <p class="regular-text text-gray-700 text-base">
                    Enjoy this offer of: {props.cashback}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {props.category}
                </span>
            </div>
        </div>
    );
};

export default OfferItem;
