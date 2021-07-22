import React, { useCallback } from 'react';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

interface ButtonSwitchProps {
  handleSetTheme: (isChecked: boolean) => void;
}

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
