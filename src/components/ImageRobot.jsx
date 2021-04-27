
const ImageRobot = ({srcProfileKey, nameRobot}) => {
    return(
        <img src={"https://robohash.org/"+srcProfileKey} alt={nameRobot}/>
    )
}
export default ImageRobot