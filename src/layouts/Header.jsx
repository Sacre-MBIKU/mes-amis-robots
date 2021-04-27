import Title from '../components/Title'
import InputRobots from '../components/InputRobots'
const Header = props => {
    return(
        <header>

            <div>
                <Title/>
            </div>
            <div>
                <InputRobots onChange= {props.onChange}/>
            </div>

        </header>
    )
}
export default Header