import React, {useState} from 'react'
import { Dialog, DialogTitle, TextField, DialogContent, DialogActions, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import uuid from 'uuid/v4';

const Form = ({close, createContact, eContact, editContact}) => {
    //eContact is a object similar to contact used to edit
    const [contact, setContact] = useState({
        name: eContact.name,
        phone: eContact.phone,
        email: eContact.email,
        id: eContact.id
    });
    
    const [error, setError] = useState(false);

    const updateContact = e => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    }

    const { name, phone, email, id } = contact;

    const addContact = () => {
        //validar
        if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
            
            setError(true);

            setTimeout(() => {
                setError(false);
            }, 3000);
            return 
        }

        setError(false);
        
        if (id) {
            editContact(contact)
        } else {
            //add id
            contact.id = uuid();

            //create contact
            createContact(contact);

            //close form
            close();
        }
        
    }
    return ( 
        <Dialog open={true} onClose={close} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                {eContact.id === '' ? 'Create a new contact' : 'Modify contact'}
            </DialogTitle>
                
            <DialogContent>
                {
                    error ? <Alert variant="filled" severity="error">all field are required </Alert>: null
                }
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Contact Name"
                        type="text"
                        onChange={updateContact}
                        value={name}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        label="Phone Number"
                        type="text"
                        onChange={updateContact}
                        value={phone}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email Address"
                        type="email"
                        onChange={updateContact}
                        value={email}
                        fullWidth
                    />
                </DialogContent>
            <DialogActions>
            <Button onClick={addContact} color="primary">
                {eContact.id === '' ? 'create' : 'modify' }
            </Button>
            <Button onClick={close} color="primary">
                cancel
            </Button>
            </DialogActions>
        </Dialog>
    );
}
 
export default Form;