import React from 'react';
import './css/App.css';
import User from './/component/UserForm'
import TableData from './/component/TableData'
import UserProvider from './/store/UserProvider'

function App() {

  return (
    <div className="App">
      <UserProvider>
        <User/>
        <TableData />
      </UserProvider>

    </div>
  );
}

export default App;
