import React from 'react';
import { Card, List, Tag, Button } from 'antd';
import { profile } from '@/utils';
import { ConditionUtils } from '../hooks';

export default () => {
  const conditionUtils = ConditionUtils.useContainer();

  return (
    <Card
      title="条件"
      extra={
        <Button onClick={conditionUtils.handleReset} type="primary" size="small">
          清空
        </Button>
      }
    >
      <List
        size="small"
        dataSource={conditionUtils.conditions}
        renderItem={item => (
          <Tag
            color="volcano"
            closable
            key={item.id}
            style={{ marginBottom: '4px', cursor: 'pointer' }}
            onClose={() => conditionUtils.handleRemove(item.id)}
          >
            {`${profile[item.id]}: ${item.value}`}
          </Tag>
        )}
      />
    </Card>
  );
};
