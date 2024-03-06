import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

function View({ onLogin }) {
  const [view, setView] = useState('login');

  const switchView = () => {
    setView((prevView) => (prevView === 'login' ? 'signup' : 'login'));
  };

  return (
    <div className="View">
      {view === 'login' ? <Login onLogin={onLogin} switchView={switchView} /> : <Signup onLogin={onLogin} switchView={switchView} />}
    </div>
  );
}

export default View;
