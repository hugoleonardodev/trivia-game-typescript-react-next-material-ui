import React from 'react';
import Link from 'next/link';
import Fab from '@material-ui/core/Fab';
import QuestionsReports from '../../containers/QuestionsReports';
import ScrollTop from '../../components/ScrollToTop';
import { useStyles } from '../../styles/global';

const DashBoard: React.FC = (props) => {
  const styles = useStyles();
  return (
    <>
      <div id="back-to-top-anchor" />
      <QuestionsReports />
      <Link href="/rankings">
        <Fab
          className={styles.goToRankigs}
          color="secondary"
          size="small"
          aria-label="scroll back to top"
          variant="extended"
        >
          Rankings
        </Fab>
      </Link>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          Top
        </Fab>
      </ScrollTop>
    </>
  );
};

export default DashBoard;
