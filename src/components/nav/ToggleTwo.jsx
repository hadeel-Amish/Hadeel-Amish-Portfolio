import React from "react";
import "./ToggleTwo.css";

function ToggleTwo({ handelchange, ischecked, name, logo }) {
  return (
    <div>
      <div className="togglee-container">
        <input
          type="checkbox"
          id="check"
          className="togglee"
          onChange={handelchange}
          checked={ischecked}
        />
        <label htmlFor="check">{name}</label>
      </div>
    </div>
  );
}

export default ToggleTwo;
