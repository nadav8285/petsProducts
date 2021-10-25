import { Route, Switch } from "react-router";
import Woodenbeds from "../Woodenbeds";
import Woodenstands from "../Woodenstands";
import BedProduct from "../Woodenbeds/BedProduct";
import OrderSearch from "../OrderSearch";
import StandProduct from "../Woodenstands/StandProduct";
import Home from "../Home";

export default function Switches() {


    return (
        <Switch>
            {/* <Route path="/home" component={Home} exact={true} /> */}
            <Route path="/search/:orderId" component={OrderSearch} exact />
            <Route path="/woodenbeds" component={Woodenbeds} exact />
            <Route path="/woodenbeds/:bedname" component={BedProduct} exact />
            <Route path="/woodenstands" component={Woodenstands} exact />
            <Route path="/woodenstands/:standname" component={StandProduct} exact />

            <Route component={Home} />
        </Switch>
    )
}