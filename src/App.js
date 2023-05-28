import Products from "./components/Products/Products";
import Header from "./components/Layout/Header";
import Subheader from "./components/Layout/Subheader";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Subheader />
      <Routes>
        <Route path="/:category?" exact="true" element={<Products />}></Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
