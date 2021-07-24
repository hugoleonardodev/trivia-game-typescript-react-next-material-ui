import React from 'react';
import DialogModal from '../../containers/DialogModal';
import DisplayHeader from '../../components/DisplayHeader';

import { dialogs } from '../../common/constants';

const InGame: React.FC = () => {
  return (
    <div>
      <DisplayHeader />
      <DialogModal
        label={dialogs.home.label}
        title={dialogs.home.title}
        content={dialogs.home.content}
      />
    </div>
  );
};

export default InGame;
