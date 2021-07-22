import React, { ReactNode } from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from '../../styles/library';

interface ButtonOutlinedProps {
  children?: ReactNode;
  handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ButtonOutlined: React.FC<ButtonOutlinedProps> = ({
  children,
  handleClick,
}) => {
  const styles = useStyles();

  return (
    <Button className={styles.button} variant="outlined" onClick={handleClick}>
      {children}
    </Button>
  );
};

export default ButtonOutlined;
