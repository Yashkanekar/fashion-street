import { Routes, Route } from "react-router-dom";
import Authentication from "./components/routes/authentication/Authentication";
import Checkout from "./components/routes/checkout/Checkout";
import Home from "./components/routes/home/Home.component";
import Navigation from "./components/routes/navigation/Navigation.component";
import Shop from "./components/routes/shop/Shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
