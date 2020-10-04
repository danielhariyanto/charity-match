import React from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './MapSelector.module.css';

const mapselector = () => {
    return (
      <div className = {styles.container}>
        <FormControl className = {styles.formControl}>
            <NativeSelect>
                <option value = 'global'>Global</option>
             </NativeSelect>
        </FormControl>
      </div>
    )
}

export default mapselector;