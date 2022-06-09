import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Description from "./Pages/Description";
import NotFound from "./Pages/NotFound";
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([])
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={<Homepage countries={countries} setCountries={setCountries} />}
          />
          <Route
            path="/country/:name"
            element={<Description />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Main>
    </>
  );
}

export default App;
