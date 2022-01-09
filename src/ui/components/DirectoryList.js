import OfferItem from "./OfferItem";

const DirectoryList = ({ offerList, ...props }) => {
    console.log("=========DIRECTORY LIST=========");

    return (
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {offerList.map(offer => (
                <OfferItem
                    key={props.id}
                    name={offer.name}
                    image={offer.image}
                    cashback={offer.cashback}
                    category={offer.category}
                    rating={offer.rating}
                    priceLevel={offer.price_level}
                    popularity={offer.popularity}
                />
            ))}
        </div>
    );
};

export default DirectoryList;
