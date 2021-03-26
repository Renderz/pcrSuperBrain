import React from 'react';
import { List, Tag } from 'antd';
import GroupUtils from '../hooks/groupUtils';
import { ConditionUtils } from '../hooks';

export default () => {
  const groupUtils = GroupUtils.useContainer();
  const conditionUtils = ConditionUtils.useContainer();

  const handleClick = (key: string) => {
    conditionUtils.handleSelect({ id: groupUtils.categoryKey, value: key });
  };

  return (
    <List
      size="small"
      dataSource={groupUtils.group}
      renderItem={key => (
        <Tag
          color={
            conditionUtils.conditions.find(
              condition => condition.id === groupUtils.categoryKey && condition.value === key,
            )
              ? '#eb2f96'
              : 'magenta'
          }
          key={key}
          style={{ marginBottom: '4px', cursor: 'pointer' }}
          onClick={() => handleClick(key)}
        >
          {key}
        </Tag>
      )}
    />
  );
};
