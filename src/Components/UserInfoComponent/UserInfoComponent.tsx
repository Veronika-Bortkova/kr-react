import avatar from "../../imeges/avatar.png"

const UserInfoComponent = () => {
    return (
        <div className={"userBlock"}>
            <img className={"user"} src={avatar}></img>
            <p>Veronika Bortkova</p>
        </div>
    );
};

export default UserInfoComponent;