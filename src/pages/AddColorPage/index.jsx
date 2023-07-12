import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddColor({ setColorList }) {
  const [inputText, setInputText] = useState("");

  // const navigate = useNavigate();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setColorList((state) => [...state, inputText]);
          setInputText("");
        }}
      >
        <input
          type="text"
          placeholder="Blue"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Add Color To List</button>
      </form>
    </>
  );
}

export default AddColor;
