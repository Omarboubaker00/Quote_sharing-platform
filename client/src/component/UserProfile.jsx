import React ,{useState}from 'react';

function UserProfile({ user, onLogout,CreateQuote }) {
  const [QuoteText, setQuoteText] = useState('');
  const [QuoteCategory, setQuoteCategory] = useState('');

  const handleCreateQuote = (id) => {
    CreateQuote(id,{
      text: QuoteText,
      category: QuoteCategory
    });
    console.log(user.id)
    console.log(user)
  };

  return (
    <div className="UserProfile">

      <div>
        <label>Create a new quote:</label>
        <input type="text" placeholder='text'  onChange={(e) => setQuoteText(e.target.value)} />
        <input type="text" placeholder='category' onChange={(e) => setQuoteCategory(e.target.value)} />
        <button onClick={()=>handleCreateQuote(user.userid)}>Create Quote</button>
      </div>

      <h2>{user.name} Profile</h2>
      <p>Email: {user.email}</p>
      <p>Nationality: {user.nationality}</p>


      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserProfile;
