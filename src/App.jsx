import { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import colorPreset from "./data/colors.json";

import { Nav } from "./layouts";
import { ColorList, AddColor, DisplayColor } from "./pages";

import "./App.css";

function App() {
  const [colorList, setColorList] = useState(colorPreset);

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route
            index
            element={<Link to="colors">Go To Color List Page</Link>}
          />
          <Route path="colors">
            <Route index element={<ColorList colorList={colorList} />} />
            <Route path="new" element={<AddColor setColorList={setColorList} />} />
            <Route path=":id" element={<DisplayColor />} />
          </Route>
          <Route path="*" element={<Navigate to="colors"/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
