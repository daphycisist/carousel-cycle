import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import "./styles.css";

const Dropdown = ({ data, handleCycleChange }) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    setOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem
          ? items.find((item) => item.id === Number(selectedItem)).label
          : `${items[0].label}`}
          
        <FaCaretDown className={` icon ${isOpen && "open"}`} />
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {items.map((item) => (
          <div
            className="dropdown-item"
            onClick={(e) => {
              handleItemClick(e.target.id);
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
