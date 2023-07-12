import { useParams } from "react-router-dom";

function DisplayColor() {
  const { id } = useParams();

  return (
    <>
      <h1>{id}</h1>
      <div
        style={{ backgroundColor: `${id}`, height: "300px", width: "300px" }}
      />
    </>
  );
}

export default DisplayColor;
