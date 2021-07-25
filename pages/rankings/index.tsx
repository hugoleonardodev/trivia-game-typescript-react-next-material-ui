import React from 'react';
import Link from 'next/link';
import Fab from '@material-ui/core/Fab';
import { usePlayer } from '../../core/hooks/usePlayer';
import { useStyles } from '../../styles/global';
import ScrollTop from '../../components/ScrollToTop';
import PlayersRanking from '../../containers/PlayersRanking';
import { useRouter } from 'next/dist/client/router';

const Rankings: React.FC = (props) => {
  const styles = useStyles();
  const router = useRouter();
  const { handleClearAll } = usePlayer();
  if (router.isFallback) {
    return <div>loading...</div>;
  }
  return (
    <>
      <div id="back-to-top-anchor" />
      <PlayersRanking />
      <Fab
        className={styles.goToRankigs}
        color="secondary"
        size="small"
        aria-label="scroll back to top"
        variant="extended"
        onClick={handleClearAll}
      >
        Home
        <Link href="/">Home</Link>
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

export default Rankings;
