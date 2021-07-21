import React from 'react';
import { TextField } from '@material-ui/core';
import { useStyles } from '../../styles/library';

interface InputTextProps {
  label: string;
}

const InputText: React.FC<InputTextProps> = ({ label }) => {
  const styles = useStyles();
  return (
    <div>
      <TextField
        label={label}
        id="outlined-start-adornment"
        className={styles.inputText}
        variant="outlined"
      />
    </div>
  );
};

export default InputText;
