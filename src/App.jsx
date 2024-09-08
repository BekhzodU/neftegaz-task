import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Circles from "./components/Circles";
import Organizations from "./components/organizations/Organizations";
import Contacts from "./components/Contacts";
import Conferences from "./components/conferences/Conferences";
import Products from "./components/products/Products";
import VacanciesForm from "./components/forms/VacanciesForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route
            index
            element={
              <>
                <Products />
                <Circles />
                <Conferences />
                <Organizations />
                <Contacts />
              </>
            }
          />
          <Route path="products" element={<Products />} />
          <Route path="/vacancies" element={<VacanciesForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
