import useOffers from "./hooks/useOffers";
import DirectoryList from "ui/components/DirectoryList";
import Paginator from "./ui/components/Paginator";
import { useCallback, useEffect } from "react";
import getRootDir from "parcel/lib/utils/getRootDir";

export default function App() {
    console.log("========APP COMPONENT========");
    const [offers, setOffers] = useState([]);
    const [pages, setPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const { isLoading, error, getOffersList: fetchOffers } = useOffers();

    const getOffersHandler = useCallback((offersData, pages) => {
        setOffers(offersData);
        setPages(pages);
    }, []);

    const changePageHandler = page => {
        setCurrentPage(page);
        fetchOffers(page, getOffersHandler);
    };

    useEffect(() => {
        fetchOffers(1, getOffersHandler);
    }, [fetchOffers, getOffersHandler]);

    return (
        <div className="container mx-auto">
            {isLoading ? (
                <p className="py-4 text-lg text-center">
                    Loading latest offers...
                </p>
            ) : (
                <>
                    <DirectoryList
                        offerList={offers}
                        pageLimit={3}
                        dataLimit={10}
                    />
                    <Paginator
                        pages={pages}
                        currentPage={currentPage}
                        onPageChange={changePageHandler}
                    />
                </>
            )}
        </div>
    );
}
