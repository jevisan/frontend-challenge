import { useCallback } from "react";
import { Offers } from "../services/OffersService";

const useOffers = () => {
    console.log("========RUNNING USEOFFERS HOOK========");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getOffersList = useCallback(async (currentPage, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await Offers(currentPage);
            if (!response.ok) {
                throw new Error("Something went wrong!");
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

            console.log(loadedOffers);
            applyData(loadedOffers, data.pages);
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        getOffersList,
    };
};

export default useOffers;
