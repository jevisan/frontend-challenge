import env from "./settings/env";
import DirectoryList from "ui/components/DirectoryList";
import { useCallback, useEffect } from "react";
import { Offers } from "./services/OffersService";

export default function App() {
    const [offers, setOffers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchOffersList = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await Offers();
            if (!response.ok) {
                throw new Error("Something went wrong! :(");
            }

            const data = await response.json();

            const loadedOffers = [];
            for (const key in data.data) {
                loadedOffers.push({
                    id: key,
                    name: data.data[key].name,
                    status: data.data[key].status,
                    cashback: data.data[key].dv_cashback,
                    image: data.data[key].media,
                    category: data.data[key].dv_category,
                    location: data.data[key].dv_latlng,
                    rating: data.data[key].rating,
                    priceLevel: data.data[key].price_level,
                    popularity: data.data[key].popularity,
                });
            }

            setOffers(loadedOffers);
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    // Loading offers list first time page loads
    useEffect(() => {
        fetchOffersList();
    }, [fetchOffersList]);

    let content = offers.length ? (
        <DirectoryList offerList={offers} />
    ) : (
        <p>No offers found :(</p>
    );

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = (
            <p className="py-4 text-lg text-center">Loading latest offers...</p>
        );
    }

    return <div className="container mx-auto">{content}</div>;
}
