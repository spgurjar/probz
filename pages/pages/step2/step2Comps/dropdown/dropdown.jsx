// SelectDropdown.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './dropdown.module.css';
import { MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";



const Dropdown = () => {
  const [selectResponse, setSelectResponse] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false)
  const dropdownRef = useRef(null);

  const responses = [
    { id: 1, label: 'Video Response' },
    { id: 2, label: 'Audio Response' },
    { id: 3, label: 'Text Response' },
  ];

  const optionLabels = {
    1: "Video",
    2: "Audio",
    3: "Text",
  };

  const dropDownShow = () => {
    setIsOpen(!isOpen);
    setClicked(!clicked);

  };

  const responseChange = (event) => {
    const courseId = parseInt(event.target.value);
    const choosen = event.target.checked;

    if (choosen) {
      setSelectResponse([...selectResponse, courseId]);
    } else {
      setSelectResponse(selectResponse.filter((id) => id !== courseId));
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]); // Only re-run if isOpen changes

  return (    
      <div className={styles.dropdown_body} ref={dropdownRef}>
        <div className={styles.dd_btn}>
          <button
            className={styles.selectButton}
            type="button"
            id="multiSelectDropdown"
            onClick={dropDownShow}
          >
            Select your response <span className={styles.icon}>{clicked ? <MdKeyboardArrowDown className={styles.arwIcon}/> : <MdKeyboardArrowUp className={styles.arwIcon}/>}</span>
          </button>
          {isOpen && (
            <div className={`${styles.dd_menu} ${isOpen ? styles.show : ''}`}>
              {responses.map((option) => (
                <div key={option.id} className={styles.res_options}>
                  <label htmlFor={`option_${option.id}`}>{option.label}</label>
                  <input
                    className={styles.customCheckbox}
                    type="checkbox"
                    id={`option_${option.id}`}
                    checked={selectResponse.includes(option.id)}
                    onChange={responseChange}
                    value={option.id}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.selectedOptions}>
            {selectResponse.map((optionId) => (
              <div className={styles.option} key={optionId}>
                 {optionLabels[optionId]}
              </div>
            ))}          
        </div>
      </div>
  );
};

export default Dropdown;

