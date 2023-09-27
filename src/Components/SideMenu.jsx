import {
    AiOutlineBackward,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineRollback,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <div className="Search-bar">
        <input
          type="text"
          name="user-search"
          id="user-search"
          placeholder="Search User..."
        />
        <button>
          <AiOutlineSearch />
        </button>
      </div>
      <div className="app-features">
        <Link to='/' className="app-properties">
          <AiOutlineHome className="icons" />
          <h4 className="feature-name">Home</h4>
        </Link>
        <Link to='/chat' className="app-properties">
          <AiOutlineMessage className="icons" />
          <h4 className="feature-name">Chats</h4>
        </Link>
        <Link to='/profile' className="app-properties">
          <AiOutlineUser className="icons" />
          <h4 className="feature-name">Profile</h4>
        </Link>
        <div  className=" extra-margin">
          <AiOutlineRollback className="icons"/>
          <h4 className="feature-name">Log Out</h4>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
