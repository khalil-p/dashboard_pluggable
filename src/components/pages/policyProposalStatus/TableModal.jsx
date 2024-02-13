import React from "react";
import PropTypes from "prop-types";
import './style/tableModalStyle.css'
// import Table from "./Table";
const TableModal = ({ onClose, children }) => {
  
  return (
    <div className="enlarged-popup-overlay z-[1000]">
      <div className="enlarged-popup">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
       {children}
      </div>
    </div>
  );
};

TableModal.propTypes = {
  // onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default TableModal;
