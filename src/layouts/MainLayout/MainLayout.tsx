import {Outlet} from "react-router-dom";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent.tsx";
import Pagination from "../../Components/pagination/pagination.tsx";

const MainLayout = () => {
    return (
        <div className={"main"}>
            <HeaderComponent/>
            <Outlet/>
            <Pagination/>

        </div>
    );
};

export default MainLayout;