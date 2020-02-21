import React, {Fragment, useState} from 'react';
import { Card, Button } from '@material-ui/core';
import Form from '../Form/Form.component'
import styles from './Contact.styles';

const Contact = ({ user }) => {
    const classes = styles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <Card className={classes.root}>
                <h3> {user.name}</h3>
                <p> {user.email}</p>
                <p> {user.phone}</p>
                <Button color='primary' onClick={handleClickOpen}>
                    edit
                </Button>
                <Button color='primary'>
                    delete
                </Button>
            </Card>
            {
                open ? <Form close={handleClickClose}/> : null
            }
        </Fragment>
    )
}

 
export default Contact;