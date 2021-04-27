import Header from "./layouts/Header";
import Main from "./layouts/Main";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import ModalCard from "./layouts/ModalCard";

const urlPlaceHolderApi = "http://jsonplaceholder.typicode.com/users";

const App = () => {
  let [robotList, setRobotList] = useState([]);
  let [robotListBuffer, setRobotListBuffer] = useState([robotList]);
  let [robotItemSelected, setRobotItemSelected] = useState(0);
  let [stateRobots, setStateRobots] = useState(false);

  let filterRobotsList = (event) => {
    event.preventDefault();
    try {
      let valueField = event.target.value.toLowerCase();
      let regexp = new RegExp(valueField, "");
      robotListBuffer = robotList.filter((item) => {
        return regexp.test(item.name.toLowerCase());
      });

      setRobotListBuffer(robotListBuffer);
    } catch (error) {}
  };

  let clikOutClickCard = (event) => {
    event.stopPropagation();
    setRobotItemSelected((robotItemSelected = 0));
  };

  let clickOnCard = (index) => {
    const robotClicked = parseInt(index.currentTarget.dataset.id) + 1;
    fetch(urlPlaceHolderApi + "/" + robotClicked)
      .then(function (res) {
        return res.json();
      })
      .then((users) => {
        robotItemSelected = users;
        setRobotItemSelected(robotItemSelected);
      });
  };
  useEffect(() => {
    let robotList = [];
    fetch(urlPlaceHolderApi)
      .then(function (res) {
        return res.json();
      })
      .then((users) => {
        const robotListBuffer = users.map(({ id, name, email }) => ({ id, name, email }));
        setRobotList(() => robotList);
        setRobotListBuffer(() => (robotListBuffer));
        setStateRobots({ stateRobots: true });
      });
  }, []);

  return (
    <>
      <Header onChange={filterRobotsList} />
      {stateRobots.stateRobots === undefined ? (
        <Loader />
      ) : (
        <Main robotList={robotListBuffer} onClickCard={clickOnCard} />
      )}
      {robotItemSelected === 0 ? (
        <></>
      ) : (
        <ModalCard
          outClickCard={clikOutClickCard}
          srcProfileKey={robotItemSelected.id}
          nameRobot={robotItemSelected.name}
          emailRobot={robotItemSelected.email}
        />
      )}
    </>
  );
};
export default App;
