import RobotCard from "./RobotCard";
const Main = ({ robotList, clickOnCard }) => {
  return (
    <main>
      {Object.keys(robotList).map((key) => {
        console.dir(robotList[key].name);
        const robotKey = robotList[key].id
        return (
          
          <RobotCard
            key={robotKey}
            srcProfileKey={robotKey}
            nameRobot={robotList[key].name}
            emailRobot={robotList[key].email}
            onClickCard={clickOnCard}
            dataId={key}
          />
        );
      })}
    </main>
  );
};
export default Main;
