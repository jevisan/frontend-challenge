import { useCallback } from "react";
import { Offers } from "../services/OffersService";

const useOffers = () => {
    console.log("========RUNNING USEOFFERS HOOK========");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getOffersList = useCallback(
        async (currentPage, itemsPerPage, applyData) => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await Offers(currentPage, itemsPerPage);
                if (!response.ok) {
                    throw new Error("Something went wrong!");
                }

                const data = await response.json();
                const loadedOffers = [];
                const categories = [];

                console.log(data.data);

                // mapping data properties
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

                    // Populating actegories array
                    if (categories.indexOf(data.data[key].dv_category) === -1) {
                        categories.push(data.data[key].dv_category);
                    }
                }

                console.log(loadedOffers);
                console.log(categories);
                applyData(loadedOffers, data.pages, categories);
            } catch (error) {
                console.log(error);
                setError(error.message);
            }
            setIsLoading(false);
        },
        [],
    );

    return {
        isLoading,
        error,
        getOffersList,
    };
};

export default useOffers;
