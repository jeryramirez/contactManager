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

    

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    };

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const apiCall = async () => {
            const url = 'https://jsonplaceholder.typicode.com/users';
            const res = await fetch(url);
            const contacts = await res.json();
            setContacts(contacts);
        }
        
        apiCall();

    }, []);

    const createContact = contact => {
        setContacts([
            ...contacts,
            contact
        ]);
    }

    const deleteContact = id => {
        const newContacts = contacts.filter(contact => contact.id != id);
        setContacts(newContacts);
    }

  return (
    <div className="App">
        <AppBar position="static">
            <h1>CONTACT MANAGER</h1>
        </AppBar>
          <Add showDialog={handleClickOpen}/>
        <Container maxWidth="lg" className={classes.container}>
            {
                contacts.map(contact => (
                    <Contact key={contact.id} user={contact} showDialog={handleClickOpen} deleteContact={deleteContact}/>
                ))
            }
        </Container>
        {
            open ? <Form close={handleClickClose} createContact={createContact}/> : null
        }
    </div>
  );
}
export default App;
