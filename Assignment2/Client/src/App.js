import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { setTeamName, setTotalGamesPlayed, setScore, resetForm } from './redux/store';
import gold from './Images/gold.png';
import silver from './Images/silver.png';
import bronze from './Images/bronze.png';


function App() {
  const dispatch = useDispatch();
  const { teamName, totalGamesPlayed, score } = useSelector((state) => state.form);

  const handleChangeTeamName = (event) => {
    dispatch(setTeamName(event.target.value));
  };

  const handleChangeTotalGamesPlayed = (event) => {
    dispatch(setTotalGamesPlayed(event.target.value));
  };

  const handleChangeScore = (event) => {
    dispatch(setScore(event.target.value));
  };

  const [backendData, setBackendData] = useState([]);

  // Function to add dummy data to MongoDB
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/leaderboard", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        teamName: teamName,
        totalGamesPlayed: totalGamesPlayed,
        score: score
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Leaderboard record added:', data);
      // Fetch updated data after adding the dummy record
      fetchData();
    })
    .catch(error => {
      console.error('Error adding leaderboard record:', error);
      console.log(error);
    });
    dispatch(resetForm());
  };

  // Function to fetch data from MongoDB
  const fetchData = () => {
    fetch("http://localhost:5000/getleaderboard")
    .then(response => response.json())
    .then(data => {
      setBackendData(data);
    })
    .catch(error => {
      console.error('Error fetching leaderboard data:', error);
    });
  };

  // useEffect to fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const sortedData = backendData.slice().sort((a, b) => b.score - a.score);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h4>Enter Team Name:</h4>
        <input
          className="form-control"
          type='text'
          placeholder='Team Name'
          value={teamName}
          onChange={handleChangeTeamName}
        />
        <h4>Enter Total Games Played:</h4>
        <input
          className="form-control"
          type='number'
          placeholder='Total Games Played'
          value={totalGamesPlayed}
          onChange={handleChangeTotalGamesPlayed}
          min={0}
        />
        <h4>Enter Score:</h4>
        <input
          className="form-control"
          type='number'
          placeholder='Score'
          value={score}
          onChange={handleChangeScore}
          min={0}
        />
        <br></br>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      
      <h2 style={{ textAlign: 'center', color: 'blue' }} >Leader Board</h2>
      <table className='table table-striped table-bordered'>
        <thead className="thead-dark">
          <tr>
            <th>RANK</th>
            <th>TEAM NAME</th>
            <th>TOTAL GAMES PLAYED</th>
            <th>SCORE</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((record, index) => (
            <tr key={index}>
              <td>
                {index < 3 ? (
                  <img
                    src={index === 0 ? gold : index === 1 ? silver : bronze}
                    alt={index === 0 ? 'Gold Trophy' : index === 1 ? 'Silver Trophy' : 'Bronze Trophy'}
                    className="img-fluid rounded" // Set the width and height to very small
                    style={{ width: '3%', height: '3%' }} // Optional: Add some spacing between rank number and trophy image
                  />
                ) : (
                  index + 1
                )}
              </td>
              <td>{record.teamName}</td>
              <td>{record.totalGamesPlayed}</td>
              <td>{"+" + record.score}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  );
}

export default App;
