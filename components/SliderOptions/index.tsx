import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useStyles } from '../../styles/global';
import { SliderOptionsProps } from '../../types/components';

const SliderOptions: React.FC<SliderOptionsProps> = ({
  id,
  title,
  valueText,
  value,
  step,
  stepMarks,
  handleAmount,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.slider}>
      <Typography id={id} gutterBottom>
        {title}
      </Typography>
      <Slider
        defaultValue={value}
        getAriaValueText={valueText}
        aria-labelledby={id}
        name={id}
        step={step}
        marks={stepMarks}
        onChange={handleAmount}
        value={value}
      />
    </div>
  );
};

export default SliderOptions;
