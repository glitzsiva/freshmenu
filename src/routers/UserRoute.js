
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";




import User from "../screens/User";

const UserRoute = () => {

    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path} component={User} />
            {/* <Route exact path={`${path}/apply-cuppon`} component={ApplyCuppon} /> */}

        </Switch>
    )
};
export default UserRoute;