import RobotCard from "./RobotCard";
const ModalCard = ({
  srcProfileKey,
  nameRobot,
  emailRobot,
  onClickCard,
  outClickCard,
}) => {
  return (
    <div className="modal-card" onClick={outClickCard}>
      <RobotCard
        className=".crad-robot1"
        onClickCard={onClickCard}
        srcProfileKey={srcProfileKey}
        nameRobot={nameRobot}
        emailRobot={emailRobot}
      />
    </div>
  );
};

export default ModalCard;
