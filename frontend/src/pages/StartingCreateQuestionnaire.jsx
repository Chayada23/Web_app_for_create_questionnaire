import "./StartingCreateQuestionnaire.css";
import userIcon from "../image/user_icon.png";
import consentIcon from "../image/consent_questionnaire.png";
import textIcon from "../image/text_icon.png";
import pictureIcon from "../image/picture_questionnaire.png";

function StartingCreateQuestionnaire() {
  return (
    <>
      {/* <input type="checkbox" id="burger" /> */}
    
      <nav className="navbar">
        
          <div className="menu-container">
             <div className = "burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
                  <nav className="format_questionnaire">
                    <div className="sign_questionnaire">
                        <img
                          src={consentIcon}
                          alt="consent_icon"
                          className="consent_icon"
                        />

                        <img
                          src={textIcon}
                          alt="text_icon"
                          className="text_icon"
                        />

                        <img
                          src={pictureIcon}
                          alt="picture_questionnaire_icon"
                          className="picture_questionnaire_icon"
                        />
                    </div>
                  </nav>
               </div>
              
                        
                         
                         <p className="title">Create PF-study Questionnaire</p>

                          <div className="right">
                              <img src={userIcon} className="user_icon" />
                          </div>
              
           </nav>
                   
                   
              <div className="answer-container">
                <div className="box-answer">
                            <p className="box-answer-text">
                                Please select the format of your questionnaire
                            </p>

                </div>
              </div>
     
    </>
  );
}

export default StartingCreateQuestionnaire;