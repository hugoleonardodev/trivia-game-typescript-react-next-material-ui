import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useStyles } from '../../styles/global';
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
  handleAmount: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: number
  ) => void;
}

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
