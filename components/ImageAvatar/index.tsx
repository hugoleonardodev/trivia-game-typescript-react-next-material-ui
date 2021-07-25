import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from '../../styles/global';
import { ImageAvatarProps } from '../../types/components';

const ImageAvatar: React.FC<ImageAvatarProps> = ({ gitHubUserName }) => {
  const styles = useStyles();

  return (
    <div className={styles.imageAvatar}>
      <Avatar
        alt="Remy Sharp"
        src={`https://github.com/${gitHubUserName}.png`}
        className={styles.imageAvatarLarge}
      />
    </div>
  );
};

export default ImageAvatar;
