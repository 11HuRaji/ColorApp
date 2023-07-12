import { Link } from "react-router-dom";

function ColorList({ colorList }) {
  return (
    <>
      <ul>
        {colorList.map((color) => (
          <Link to={`/colors/${color}`} style={{ color: `${color}` }}>{color}</Link>
        ))}
      </ul>
    </>
  );
}

export default ColorList;
