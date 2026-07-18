
import {useSearchParams} from "react-router-dom";


const Pagination = () => {
    const [query, setQuery]  = useSearchParams({pg:"1"});
    return (

        <div className={"paginationBlock"} >
            <button className={"buttonPagination"} onClick={()=>{
                const pg = query.get("pg");
                if (pg && +pg>1) {
                let currentPage = +pg;
                --currentPage;
                setQuery({pg:currentPage.toString()});
                }
            }}>Prev</button>

            <button className={"buttonPagination"} onClick ={()=>{
                const pg = query.get("pg");
                if (pg) {
                    let currentPage = +pg;
                    ++currentPage;
                    setQuery({pg:currentPage.toString()});
                }
            }}>Next</button>


        </div>
    );
};

export default Pagination;