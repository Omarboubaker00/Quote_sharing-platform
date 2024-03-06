import React, { useState } from 'react';
import './App.css';
import View from './component/View.jsx';
import AllUsersWithQuotes from './component/AllUsersWithQuotes.jsx';

function App() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState('auth');
  const [info, setInfo] = useState([]);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    setCurrentView('allUsersWithQuotes');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('auth');
  };

  return (
    <div className="App">
      {currentView === 'auth' && <View onLogin={handleLogin} />}
      {currentView === 'allUsersWithQuotes' && <AllUsersWithQuotes user={user} onLogout={handleLogout} />}
      
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('app'))
export default App 
