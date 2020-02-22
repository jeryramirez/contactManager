import React, { useEffect, useState } from 'react';
import './App.css';
import Contact from './components/Contact/Contact.component';
import Add from './components/Add/Add.component';
import Form from './components/Form/Form.component';
import { Alert } from '@material-ui/lab';
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
    const [alert, setAlert] = useState({
        status: ''
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setContact({
            name: '',
            phone: '',
            email: '',
            id: ''
        })
        setOpen(false);
    };

    //API
    const [contacts, setContacts] = useState([])

    //LOCAL
    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: '',
        id: ''
    });

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
        handleClickClose();
        setAlert({
            status: 'success'
        })
        setTimeout(() => {
            setAlert({
                status: ''
            })
        }, 3000);
    }

    const deleteContact = id => {
        const newContacts = contacts.filter(contact => contact.id !== id);
        setContacts(newContacts);
    }

    const loadContact = newContact => {
        handleClickOpen();
        const { name, phone, email, id } = newContact;
        setContact({
            name: name,
            phone: phone,
            email: email,
            id: id
        });
    }

    const editContact = async (contactEdited) => {
        const newContacts = contacts.filter(contact => contact.id !== contactEdited.id);
        setContacts(newContacts);
        setContacts([
            ...newContacts,
            contactEdited
        ]);
        setAlert({
            status: 'info'
        })
        setTimeout(() => {
            setAlert({
                status: ''
            })
        }, 3000);
        handleClickClose();
    }

  return (
    <div className="App">
        <AppBar position="static">
            <h1>CONTACT MANAGER</h1>
          </AppBar>
          {
            alert.status ?
                <Alert variant="filled" severity={alert.status}>
                      {alert.status === 'success' ? 'Contact created success' : 'Contact modified success'}
                </Alert>
            : null
          }
        <Container maxWidth="lg" className={classes.container}>
            {
                contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        user={contact}
                        deleteContact={deleteContact}
                        loadContact={loadContact}
                    />
                ))
            }
          </Container>
          <Add showDialog={handleClickOpen}/>
        {
            open ?
                <Form
                    close={handleClickClose}
                    createContact={createContact}
                    eContact={contact}
                    editContact={editContact}
                />
            : null
        }
        {
            
        }
    </div>
  );
}
export default App;
