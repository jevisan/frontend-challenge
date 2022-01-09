import { useEffect } from "react";

const Paginator = ({ pages, currentPage, ...props }) => {
    console.log("========PAGINATOR COMPONENT========");

    function goToNextPage() {
        props.onPageChange(currentPage + 1);
    }

    function goToPreviousPage() {
        props.onPageChange(currentPage - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        props.onPageChange(pageNumber);
    }

    const getPaginationGroup = () => {
        const start = Math.floor((currentPage - 1) / 3) * 3;
        return new Array(3).fill().map((_, idx) => start + idx + 1);
    };

    return (
        <nav aria-label="Page navigation">
            <ul class="inline-flex space-x-2">
                <li>
                    <button
                        className={`flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100 ${
                            currentPage === 1 ? "cursor-not-allowed" : ""
                        }`}
                        disabled={currentPage === 1 ? "true" : ""}
                        onClick={goToPreviousPage}>
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                            />
                        </svg>
                    </button>
                </li>
                {getPaginationGroup().map(item => (
                    <li>
                        <button
                            className={`w-10 h-10 transition-colors duration-150 rounded-full focus:shadow-outline ${
                                currentPage === item
                                    ? "text-white bg-indigo-600"
                                    : "text-indigo-600 hover:bg-indigo-100"
                            } `}
                            onClick={changePage}>
                            {item}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        class={`flex items-center justify-center w-10 h-10 text-indigo-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-indigo-100 ${
                            currentPage === pages ? "cursor-not-allowed" : ""
                        }`}
                        disabled={currentPage === pages ? "true" : ""}
                        onClick={goToNextPage}>
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                            />
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Paginator;
