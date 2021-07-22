import React from 'react';
import DialogModal from '../../containers/DialogModal';
import Header from '../../components/Header';

import { dialogs } from '../../common/constants';

const InGame: React.FC = () => {
  return (
    <div>
      <Header />
      <DialogModal
        label={dialogs.home.label}
        title={dialogs.home.title}
        content={dialogs.home.content}
      />
    </div>
  );
};

export default InGame;
