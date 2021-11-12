import { Route, Switch } from "react-router";
import Woodenbeds from "../Woodenbeds";
import Woodenstands from "../Woodenstands";
import BedProduct from "../Woodenbeds/BedProduct";
import OrderSearch from "../OrderSearch";
import StandProduct from "../Woodenstands/StandProduct";
import CartPage from "../Cart/CartPage";
import Home from "../Home";
import Contact from "../Contact";

export default function Switches() {


    return (
        <Switch>
            {/* <Route path="/home" component={Home} exact={true} /> */}
            <Route path="/search" component={OrderSearch} exact />
            <Route path="/cart" component={CartPage} exact />
            <Route path="/woodenbed" component={Woodenbeds} exact />
            <Route path="/woodenbed/:bedname" component={BedProduct} exact />
            <Route path="/woodenstand" component={Woodenstands} exact />
            <Route path="/woodenstand/:standname" component={StandProduct} exact />
            <Route path="/contact" component={Contact} exact />

            <Route component={Home} />
        </Switch>
    )
}