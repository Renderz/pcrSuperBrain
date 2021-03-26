import React from 'react';
import { Card } from 'antd';
import { profile } from '@/utils';
import { CollectorUtils } from '../hooks';
import GroupUtils from '../hooks/groupUtils';
import Group from './group';

export default () => {
  const { categoryUtils } = CollectorUtils.useContainer();

  return (
    <React.Fragment>
      {categoryUtils.selectedKeys.map(key => (
        <GroupUtils.Provider key={key} initialState={{ categoryKey: key }}>
          <Card title={profile[key]} style={{ marginBottom: '10px' }}>
            <Group />
          </Card>
        </GroupUtils.Provider>
      ))}
    </React.Fragment>
  );
};
