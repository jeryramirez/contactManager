import React, {useState} from 'react'
import { Dialog, DialogTitle, TextField, DialogContent, DialogActions, Button } from '@material-ui/core';
import uuid from 'uuid/v4';
import Contact from '../Contact/Contact.component'

const Form = ({close}) => {

    const [contact, setContact] = useState({
        name: '',
        phone: '',
        email: ''
    });


    const [error, setError] = useState(false);
    const createContact = e => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    }

    const { name, phone, email } = contact;
 

    const addContact = () => {
        //validar
        if (name.trim() === '' || phone.trim() === '' || email.trim() === '') {
            setError(true);
            return
        }
        setError(false);
        
        //asignar id
        contact.id = uuid();
        
        //crear contacto

        //cerrar dialog

        //mostrar
    }

    return ( 
        <Dialog open={true} onClose={close} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Create a new contact</DialogTitle>
                {error ? console.log('campos vacios') : null}
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Contact Name"
                        type="text"
                        onChange={createContact}
                        value={name}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        label="Phone Number"
                        type="text"
                        onChange={createContact}
                        value={phone}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email Address"
                        type="email"
                        onChange={createContact}
                        value={email}
                        fullWidth
                    />
                    
                </DialogContent>
            <DialogActions>
            <Button onClick={addContact} color="primary">
                create
            </Button>
            <Button onClick={close} color="primary">
                cancel
            </Button>
            </DialogActions>
        </Dialog>

     );
}
 
export default Form;