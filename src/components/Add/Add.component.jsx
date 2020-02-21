import React from 'react';
import {Tooltip, Fab} from '@material-ui/core';
import styles from './Add.styles';

const Add = (props) => {
    const classes = styles();
    
    
    return ( 
        <Tooltip title="Add" aria-label="add" onClick={props.showDialog}>
            <Fab color="primary" className={classes.fab}>
                +
            </Fab>
        </Tooltip>
     );
}
 
export default Add;