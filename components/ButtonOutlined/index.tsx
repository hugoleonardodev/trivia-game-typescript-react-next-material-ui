import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from '../../styles/global';
import { ButtonOutlinedProps } from '../../types/components';

const ButtonOutlined: React.FC<ButtonOutlinedProps> = ({
  children,
  handleClick,
  hasValue,
  isList,
}) => {
  const styles = useStyles();

  return (
    <>
      {isList ? (
        <Button
          className={styles.buttonListMobile}
          variant="outlined"
          onClick={(e) => handleClick(e)}
          value={hasValue}
          data-testid={`button-answer-${hasValue}`}
        >
          {children}
        </Button>
      ) : (
        <Button
          className={styles.button}
          variant="outlined"
          onClick={(e) => handleClick(e)}
          value={hasValue}
        >
          {children}
        </Button>
      )}
    </>
  );
};

export default ButtonOutlined;
