import React from 'react';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { ButtonSwitchProps } from '../../types/components';
import { useStyles } from '../../styles/global';

const ButtonSwitch: React.FC<ButtonSwitchProps> = ({ handleSetTheme }) => {
  const styles = useStyles();

  const [isChecked, setIsChedked] = React.useState(true);

  const handleChange = React.useCallback(() => {
    setIsChedked(!isChecked);
    handleSetTheme(!isChecked);
  }, [isChecked]);

  return (
    <div className={styles.switchThemeContainer}>
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
