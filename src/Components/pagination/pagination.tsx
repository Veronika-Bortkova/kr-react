import "./pagination.css"
import {useSearchParams} from "react-router-dom";
import * as ReactPaginateModule from 'react-paginate';
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
const unknownModule = ReactPaginateModule as Record<string, unknown>;
const innerModule = unknownModule.default && typeof unknownModule.default === 'object'
    ? (unknownModule.default as Record<string, unknown>)
    : unknownModule;
const ReactPaginate = (innerModule.default || innerModule) as React.ComponentType<Record<string, unknown>>;


const Pagination = () => {
    const isLoading = useAppSelector(state => state.movieStoreSlice.isLoading);
    const [query, setQuery]  = useSearchParams({pg:"1"});
    const currentPageIndex = (Number(query.get("pg")) || 1) - 1;
    const totalPages = 500;
    const handlePageClick = (event: { selected: number }) => {
        const nextPageNumber = event.selected + 1;
        setQuery({ pg: nextPageNumber.toString() });
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


        return (
            !isLoading && <div className="paginationBlock">
                <ReactPaginate
                    pageCount={totalPages}
                    forcePage={currentPageIndex}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    previousLabel={"← Prev"}
                    nextLabel={"Next →"}
                    breakLabel={"..."}
                    containerClassName={"pagination-container"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item prev"}
                    nextClassName={"page-item next"}
                    breakClassName={"page-item break"}
                    activeClassName={"activePage"}
                    disabledClassName={"disabled-button"}
                />
            </div>



        );
};

export default Pagination;

//    <div className={"paginationBlock"} >
// <button className={"buttonPagination"} onClick={()=>{
// const pg = query.get("pg");
// if (pg && +pg>1) {
// let currentPage = +pg;
// --currentPage;
// setQuery({pg:currentPage.toString()});
// }
// }}>Prev</button>
//
// <button className={"buttonPagination"} onClick ={()=>{
// const pg = query.get("pg");
// if (pg) {
// let currentPage = +pg;
// if (currentPage<500) {
// ++currentPage;
// setQuery({pg: currentPage.toString()});
// }
// }
// }}>Next</button>
//</div>

