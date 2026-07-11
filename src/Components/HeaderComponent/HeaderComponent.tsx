import "./HeaderComponent.css"
import LogoComponent from "../LogoComponent/LogoComponent.tsx";
import SearchComponent from "../SearchComponent/SearchComponent.tsx";
import UserInfoComponent from "../UserInfoComponent/UserInfoComponent.tsx";

const HeaderComponent = () => {
    return (
        <div className={"header"}>
            <LogoComponent/>
            <SearchComponent/>
            <UserInfoComponent/>

        </div>
    );
};

export default HeaderComponent;