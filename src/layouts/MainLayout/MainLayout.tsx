import {Outlet} from "react-router-dom";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent.tsx";

const MainLayout = () => {
    return (
        <div className={"main"}>
            <HeaderComponent/>
            <Outlet/>

        </div>
    );
};

export default MainLayout;