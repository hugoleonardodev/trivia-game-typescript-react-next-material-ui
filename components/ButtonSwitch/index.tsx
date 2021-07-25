import React, { useCallback } from 'react';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { ButtonSwitchProps } from '../../types/components';

const ButtonSwitch: React.FC<ButtonSwitchProps> = ({ handleSetTheme }) => {
  const [isChecked, setIsChedked] = React.useState(true);

  const handleChange = useCallback(() => {
    setIsChedked(!isChecked);
    handleSetTheme(!isChecked);
  }, [isChecked]);

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
        checked={isChecked}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'primary checkbox' }}
        color="primary"
      />
    </div>
  );
};

export default ButtonSwitch;
