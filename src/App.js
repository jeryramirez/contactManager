import React, { useEffect, useState } from 'react';
import './App.css';
import Contact from './components/Contact/Contact.component';
import { AppBar, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const styles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
});
function App() {

    const classes = styles();

    const [users, setUsers] = useState([])

    useEffect(() => {
        const apiCall = async () => {
            const url = 'https://jsonplaceholder.typicode.com/users';
            const res = await fetch(url);
            const users = await res.json();
            setUsers(users);
        }
        
        apiCall();

    }, []);

  return (
    <div className="App">
          
        <AppBar position="static">
            <h1>CONTACT MANAGER</h1>
        </AppBar>
        
        <Container maxWidth="lg" className={classes.container}>
              {
                users.map(user => (
                    <Contact user={user}/>
                ))
            }
        </Container>
    </div>
  );
}

export default App;
