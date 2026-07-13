import lupa from "../../imeges/lupa7_.png";

const SearchComponent = () => {
    return (
        <>
            <form>
                <div className={"searchBlock"}>
                    <input type={"search"} name={"search"} placeholder={"Enter movie title..."} ></input>
                    <button type={"submit"}><img className={"lupa"} src={lupa} alt={"search"}></img></button>
                </div>
            </form>
        </>
    );
};

export default SearchComponent;