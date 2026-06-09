import "./CreateQuestionnaire.css";
import { Link } from "react-router-dom";
import userIcon from "../image/user_icon.png";
import addIcon from "../image/add_icon.png";

function CreateQuestionnaire() {
  return (
    <>
      <nav className="navbar">
        <label className="burger" htmlFor="burger">
          <input type="checkbox" id="burger" />
          <span></span>
          <span></span>
          <span></span>
        </label>

        <p>Create PF-study Questionnaire</p>

        <img
          src={userIcon}
          alt="user_icon"
          className="user_icon"
        />
      </nav>

      <div className="container">
        <div className="content">
          <Link to="/starting-questionnaire">
                <img
                  src={addIcon}
                  alt="add_icon"
                  className="add_icon"
                />
          </Link>
        
         
        </div>
      </div>
    </>
  );
}

export default CreateQuestionnaire;