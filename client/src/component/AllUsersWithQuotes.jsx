import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserProfile from './UserProfile';

function AllUsersWithQuotes({ user, onLogout}) {
  const [quotes, setquotes] = useState([]);
  const [quote, setQuote] = useState([])
  const [currentView, setCurrentView] = useState('allUsersWithQuotes');
  const [any ,setAny] = useState(false)

  useEffect(() => {
    const fetchUsersWithQuotes = async () => {
      try {

        const quotes = await axios.get('http://localhost:3000/api/quotes');
        setquotes(quotes.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsersWithQuotes()
  }, [any]);

  const createQuote = async (id,{text,category}) => {
    try {
      const response = await axios.post(`http://localhost:3000/api/quotes/${id}`, {text,category});
      console.log(response)
      const createdQuote = response.config.data;
      setQuote((prevQuotes) => [...prevQuotes, createdQuote]);
      setAny(!any)
    } catch (error) {
      console.log(id)
      console.error(error);
    }
  };

const deletequotes = async (id) => {
  try {
    const deleted = await axios.delete(`http://localhost:3000/api/quotes/${id}`)
    console.log(deleted)
    setAny(!any)
  } catch (error) {
    console.error(error)
  }
}

  return (
    <div className="AllUsersWithQuotes">
      <nav>
        <button onClick={() => setCurrentView('allUsersWithQuotes')}>All Users with Quotes</button>
        <button onClick={() => setCurrentView('userProfile')}>User Profile</button>
      </nav>


      {currentView === 'allUsersWithQuotes' && (
        <>
          <h2>Quotes</h2>
          <div>

            {quotes.map((quote) => (
              <ul>
                <li key={quote.id}>
                  <strong>{quote.category}:</strong> {quote.text}
                  <button  onClick={()=>deletequotes(quote.id)} >delete</button>
                </li>
              </ul>
            ))}
          </div>

        </>
      )}

      {currentView === 'userProfile' && <UserProfile CreateQuote={createQuote} onLogout={onLogout} user={user} onBack={() => switchView('allUsersWithQuotes')} />}
    </div>
  );
}

export default AllUsersWithQuotes;
