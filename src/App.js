import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/Home.component";
import Navigation from "./components/routes/navigation/Navigation.component";
import SignIn from "./components/routes/sign-in/SignIn.component";

const Shop = () => {
  return <h2>I am the shop page</h2>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
