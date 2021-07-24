import React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useStyles } from '../../styles/global';

const CircularStatic: React.FC<CircularProgressProps & { value: number }> = (
  props
) => {
  const styles = useStyles();
  return (
    <Box
      className={styles.playerRating}
      position="relative"
      display="inline-flex"
    >
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};

interface PlayerRatingProps {
  rating: number;
}
const PlayerRating: React.FC<PlayerRatingProps> = ({ rating }) => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= rating ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularStatic value={progress} />;
};

export default PlayerRating;
