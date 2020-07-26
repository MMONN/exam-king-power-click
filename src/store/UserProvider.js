import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
      
      const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
      const [dataForEdit, setDataForEdit] = useState("")

      const handleEdit = (index) => {
            var obj = JSON.parse(localStorage.getItem("users"))
            setDataForEdit(obj[index])  
      }
      const userData = {
            users, setUsers, handleEdit, dataForEdit
      };
    

      useEffect(() => {
            localStorage.setItem("users", JSON.stringify(users));
      }, [users])

      return (
            <UserContext.Provider value={userData}>
                  {children}
            </UserContext.Provider>
      );
}
