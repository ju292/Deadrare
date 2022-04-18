import React from 'react';
import { useState } from 'react';
import { Pane, Tablist, Tab } from 'evergreen-ui';
import MainLayout from '../MainLayout';

import MintTab from './MintTab';



const Dashboard: React.FC = () => {
  

  return (
    <MainLayout>
     <MintTab />
    </MainLayout>
  );
};

export default Dashboard;
