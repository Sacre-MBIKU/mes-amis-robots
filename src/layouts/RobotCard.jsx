import ImageRobot from "../components/ImageRobot";
import NameRobot from "../components/NameRobot";
import EmailRobot from "../components/EmailRobot";
const App = ({ srcProfileKey, nameRobot, emailRobot, clickOnCard, dataId }) => {
  return (
    <div className="crad-robot" onClick={clickOnCard} data-id={dataId}>
      <div>
        <ImageRobot srcProfileKey={srcProfileKey} nameRobot={nameRobot} />
      </div>
      <div>
        <NameRobot nameRobot={nameRobot} />
      </div>
      <div>
        <EmailRobot emailRobot={emailRobot} />
      </div>
    </div>
  );
};
export default App;
