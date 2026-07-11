import lupa from "../../imeges/lupa7_.png";

const SearchComponent = () => {
    return (
        <div className={"searchBlock"}>
            <input type={"search"} name={"search"} placeholder={"Enter movie title..."} ></input>
            <button><img className={"lupa"} src={lupa}></img></button>
        </div>
    );
};

export default SearchComponent;