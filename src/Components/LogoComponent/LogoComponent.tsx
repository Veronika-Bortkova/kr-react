
import logo from "../../imeges/logo7_.png";
import {Link} from "react-router-dom";



const LogoComponent = () => {
    return (
        <>
            <Link to={"/"}><img className={"logo"} src={logo}></img></Link>
        </>
    );
};

export default LogoComponent;