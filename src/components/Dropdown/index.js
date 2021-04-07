import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import "./styles.css";

const Dropdown = ({ data, handleCycleChange }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    const newSeleectedItem = data.find((elem) => elem.id === id);
    setSelectedItem(newSeleectedItem);
    setOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem?.label}
        <FaCaretDown className={` icon ${isOpen && "open"}`} />
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {data.map((item) => (
          <div
            className="dropdown-item"
            onClick={(e) => {
              handleItemClick(item.id);
              handleCycleChange(item.id);
            }}
            id={item.id}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
