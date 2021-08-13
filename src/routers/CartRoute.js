import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";



/////Custom Imports
import Cart from '../screens/Cart';
import ApplyCuppon from '../screens/ApplyCuppon';

const CartRoute = () => {

    let { path } = useRouteMatch();
    console.log(path);
    return (
        <Switch>
            <Route exact path={path} component={Cart} />
            <Route exact path={`${path}/apply-cuppon`} component={ApplyCuppon} />

        </Switch>
    )
}
export default CartRoute;