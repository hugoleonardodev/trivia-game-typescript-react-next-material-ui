import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useStyles } from '../../styles/library';
// import { marks } from '../../common/constants';

// function valuetext(value: number) {
//   return `${value}°C`;
// }

interface Marks {
  value: number;
  label: string;
}

interface SliderOptionsProps {
  id: string;
  title: string;
  valueText: (value: number, index: number) => string;
  value: number;
  step: number;
  stepMarks: Marks[];
}

const SliderOptions: React.FC<SliderOptionsProps> = ({
  id,
  title,
  valueText,
  value,
  step,
  stepMarks,
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
        step={step}
        marks={stepMarks}
      />
    </div>
  );
};

export default SliderOptions;
