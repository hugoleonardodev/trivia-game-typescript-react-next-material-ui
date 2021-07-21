import React from 'react';
import Switch from '@material-ui/core/Switch';
import { Typography } from '@material-ui/core';

const ButtonSwitch: React.FC = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Typography id="discrete-slider-always" gutterBottom>
        Switch Color Theme
      </Typography>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'primary checkbox' }}
        color="primary"
      />
    </div>
  );
};

export default ButtonSwitch;
