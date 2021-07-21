import React, { ReactNode } from 'react';
import { Button } from '@material-ui/core';
import { useStyles } from '../../styles/library';

interface ButtonOutlinedProps {
  children?: ReactNode;
}

const ButtonOutlined: React.FC<ButtonOutlinedProps> = ({ children }) => {
  const styles = useStyles();

  return <Button className={styles.button}>{children}</Button>;
};

export default ButtonOutlined;
