import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, CircularProgress } from "@mui/material";
import SearchBar from "./components/searchbar";
import UserCard from "./components/usercard";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container maxWidth="md" className="app-container">
      <Typography variant="h4" align="center" gutterBottom className="title">
        👩‍💻 RemitBee User Directory
      </Typography>
      <SearchBar search={search} setSearch={setSearch} />

      {loading ? (
        <div className="loading">
          <CircularProgress />
          <Typography>Loading users...</Typography>
        </div>
      ) : (
        <Grid container spacing={3}>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <Grid item xs={12} sm={6} md={4} key={user.id}>
                <UserCard user={user} />
              </Grid>
            ))
          ) : (
            <Typography>No users found 😕</Typography>
          )}
        </Grid>
      )}
    </Container>
  );
}

export default App;
