import env from "../settings/env";

const BASE_URL = `${env.root}/directory`;
const ITEMS_PER_PAGE_PARAM = "epp";
const CURRENT_PAGE_PARAM = "p";

export const Offers = async (currentPage = 1, itemsPerPage = 50) => {
    console.log(`Fetching ${itemsPerPage} items, current page: ${currentPage}`);
    return await fetch(
        `${BASE_URL}?${ITEMS_PER_PAGE_PARAM}=${itemsPerPage}&${CURRENT_PAGE_PARAM}=${currentPage}`,
    );
};
