import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import { useStyles } from '../../styles/global';
import { ScrollToTopProps } from '../../types/components';

const ScrollTop: React.FC = (props: ScrollToTopProps) => {
  const { children, window } = props;

  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <React.Fragment>
      <Zoom in={trigger}>
        <div
          onClick={handleClick}
          role="presentation"
          className={classes.scrollToTop}
        >
          {children}
        </div>
      </Zoom>
    </React.Fragment>
  );
};

export default ScrollTop;
