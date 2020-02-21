import React, {Fragment, useState} from 'react';
import { Card, Button } from '@material-ui/core';
import Form from '../Form/Form.component'
import styles from './Contact.styles';

const Contact = ({ user, showDialog }) => {
    const classes = styles();

    const { name, email, phone, id } = user;

    const edit = () => {
        
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
                    <Button color='primary' onClick={showDialog}>
                        edit
                    </Button>
                    <Button color='primary'>
                        delete
                    </Button>
                </div>

            </Card>
        </Fragment>
    )
}

 
export default Contact;