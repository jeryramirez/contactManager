import React, { useEffect, useState } from 'react';
import './App.css';
import Contact from './components/Contact/Contact.component';
import Add from './components/Add/Add.component';
import Form from './components/Form/Form.component';
import { AppBar, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const styles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});
function App() {
    // hacer una funcion para leer los contactos ya existentes y agregar los nuevos

    const classes = styles();

    const [users, setUsers] = useState([])

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const apiCall = async () => {
            const url = 'https://jsonplaceholder.typicode.com/users';
            const res = await fetch(url);
            const users = await res.json();
            setUsers(users);
        }
        
        apiCall();

    }, []);

    const addContact = contact => {
        setUsers([
            ...users,
            contact
        ]);
    }

  return (
    <div className="App">
          
        <AppBar position="static">
            <h1>CONTACT MANAGER</h1>
        </AppBar>
          <Add showDialog={handleClickOpen}/>
        <Container maxWidth="lg" className={classes.container}>
              {
                users.map(user => (
                    <Contact key={user.id} user={user} showDialog={handleClickOpen} />
                ))
            }
        </Container>
        {
              open ? <Form close={handleClickClose} addContact={addContact}/> : null
        }
    </div>
  );
}

export default App;
