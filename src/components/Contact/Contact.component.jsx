import React, {Fragment} from 'react';
import { Card, Button } from '@material-ui/core';
import styles from './Contact.styles';

const Contact = ({ user, deleteContact, loadContact }) => {
    const classes = styles();

    let { name, email, phone, id } = user;

    const index = phone.indexOf('x');
    if (index != -1) {
        phone = phone.substring(0, index - 1)
    }
    
    return (
        <Fragment>
            <Card className={classes.root}>
                <h3> {name}</h3>
                <div>
                    <p> {email}</p>
                    <p> {phone}</p>
                </div>
                <div>
                    <Button color='primary' onClick={() => loadContact(user)}>
                        edit
                    </Button>
                    <Button color='primary' onClick={ () => deleteContact(id)}>
                        delete
                    </Button>
                </div>
            </Card>
        </Fragment>
    )
}

 
export default Contact;