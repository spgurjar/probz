import React, { createContext, useState } from 'react';

export const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
 const [dropdowns, setDropdowns] = useState({
    location: [],
    houseHoldIncome: [],
    profession: [],
    age: [],
    gender: [],
    interest: [],
 });
 const [openDropdown, setOpenDropdown] = useState(null);

 return (
    <DropdownContext.Provider value={{ dropdowns, setDropdowns, openDropdown, setOpenDropdown}}>
      {children}
    </DropdownContext.Provider>
 );
};