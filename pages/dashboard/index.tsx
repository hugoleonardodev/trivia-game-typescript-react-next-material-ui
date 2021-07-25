import React from 'react';
import Link from 'next/link';
import Fab from '@material-ui/core/Fab';
import PlayerTimeLine from '../../containers/PlayerTimeLine';
import ScrollTop from '../../components/ScrollToTop';
import { useStyles } from '../../styles/global';
import { usePlayer } from '../../core/hooks/usePlayer';
import { useRouter } from 'next/dist/client/router';

const DashBoard: React.FC = (props) => {
  const styles = useStyles();
  const router = useRouter();
  const { handleGameRanking } = usePlayer();

  if (router.isFallback) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div id="back-to-top-anchor" />
      <PlayerTimeLine />
      <Fab
        className={styles.goToRankigs}
        color="secondary"
        size="small"
        aria-label="scroll back to top"
        variant="extended"
        onClick={handleGameRanking}
      >
        Rankings
        <Link href="/rankings">Rankings</Link>
      </Fab>
      <ScrollTop {...props}>
        <Fab
          color="secondary"
          size="small"
          aria-label="scroll back to top"
          variant="extended"
        >
          Top
        </Fab>
      </ScrollTop>
    </>
  );
};

export default DashBoard;
