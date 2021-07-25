import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useStyles } from '../../styles/global';
import { InputTextProps } from '../../types/components';

const InputText: React.FC<InputTextProps> = ({
  label,
  handlePlayer,
  player,
}) => {
  const styles = useStyles();
  return (
    <>
      <TextField
        label={label}
        id={label}
        className={styles.inputText}
        variant="outlined"
        onChange={handlePlayer}
        value={player}
      />
    </>
  );
};

export default InputText;
