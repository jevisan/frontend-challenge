import useOffers from "./hooks/useOffers";
import DirectoryList from "ui/components/DirectoryList";
import { useCallback, useEffect } from "react";
import Filter from "./ui/components/Filter";
import ScrollButton from "./ui/components/ScrollButton";

export default function App() {
    const [offers, setOffers] = useState([]);
    const [filteredOffers, setFilteredOffers] = useState([]);
    const [pages, setPages] = useState(1);
    const [categories, setCategories] = useState([]);
    const { isLoading, error, getOffersList: fetchOffers } = useOffers();

    /**
     * Callback for setting properties
     */
    const getOffersHandler = useCallback((offersData, pages, categories) => {
        setOffers(offersData);
        setPages(pages);
        setCategories(categories);
    }, []);

    /**
     * Triggers offer fetching in current pagination
     */
    const changePageHandler = page => {
        setCurrentPage(page);
        //fetchOffers(page, getOffersHandler);
    };

    /**
     * First offers fetching on mount
     */
    useEffect(() => {
        fetchOffers(1, 50, getOffersHandler);
    }, [fetchOffers, getOffersHandler]);


    /**
     * Filters offers by category and rating
     * @param {string} offerName
     * @param {String} category 
     * @param {String} rating 
     */
    const filtersChangeHandler = (offerName, category, rating) => {
        setFilteredOffers(offers);
        // all offers available at first
        let filteredOffers = offers;
        // filter by offer name, comparing lowercase in both strings
        if (offerName !== '') {
            filteredOffers = filteredOffers.filter(offer => offer.name.toLowerCase().includes(offerName.toLowerCase()));
        }
        // filter by category
        if (category !== '') {
            filteredOffers = filteredOffers.filter(offer => offer.category === category);
        }
        // filter by rating. Using ceil since rating is in decimals
        if (rating !== '') {
            filteredOffers = filteredOffers.filter(offer => Math.ceil(offer.rating) === rating);
            console.log(filteredOffers);
        }
        setFilteredOffers([...filteredOffers]);
    };

    return (
        <div className="container mx-auto">
            {isLoading ? (
                <p className="py-4 text-lg text-center">
                    Loading latest offers...
                </p>
            ) : (
                <>
                    <Filter 
                        categories={categories}
                        onFiltersChange={filtersChangeHandler}
                    />
                    <DirectoryList
                        offerList={filteredOffers}
                    />
                   <ScrollButton/>
                </>
            )}
        </div>
    );
}
