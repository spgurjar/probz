// SelectDropdown.jsx
import React, { useState } from 'react';
import styles from './dropdown.module.css';

const SelectDropdown = () => {
  const [selectCourses, setSelectCourses] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const courses = [
    { id: 1, label: 'GATE' },
    { id: 2, label: 'DSA' },
    { id: 3, label: 'JAVA' },
    { id: 4, label: 'C++' },
    { id: 5, label: 'Web Development' },
  ];

  const dropDownShow = () => {
    setIsOpen(!isOpen);
  };

  const courseChange = (event) => {
    const courseId = parseInt(event.target.value);
    const choosen = event.target.checked;

    if (choosen) {
      setSelectCourses([...selectCourses, courseId]);
    } else {
      setSelectCourses(selectCourses.filter((id) => id !== courseId));
    }
  };

  return (
    <div>
      <h1 className={styles.dropdownTitle}>GeeksforGeeks</h1>
      <div className={`d-flex justify-content-center ${styles.customDropdown}`}>
        <div className={styles.customDropdown}>
          <button
            className={`custom-dropdown-toggle ${styles.greenButton}`}
            type="button"
            id="multiSelectDropdown"
            onClick={dropDownShow}
          >
            Select Options
          </button>
          {isOpen && (
            <div className={`custom-dropdown-menu ${isOpen ? 'show' : ''}`}>
              {courses.map((option) => (
                <div key={option.id}>
                  <input
                    className={styles.customCheckbox}
                    type="checkbox"
                    id={`option_${option.id}`}
                    checked={selectCourses.includes(option.id)}
                    onChange={courseChange}
                    value={option.id}
                  />
                  <label htmlFor={`option_${option.id}`}>{option.label}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.selectedOptions}>
          <h2>Selected Items:</h2>
          <ul>
            {selectCourses.map((optionId) => (
              <li key={optionId}>{courses.find((option) => option.id === optionId)?.label}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectDropdown;
