import React from 'react';
import { Card, List, Tag } from 'antd';
import { ResultUtils } from '../hooks';

const ResultCard: React.FC = () => {
  const { result, selectedKey, handleSelect } = ResultUtils.useContainer();

  return (
    <Card title="结果集">
      <List
        size="small"
        dataSource={result}
        renderItem={item => (
          <Tag
            color={selectedKey === item.key ? '#13c2c2' : 'cyan'}
            key={item.key}
            style={{ marginBottom: '4px', cursor: 'pointer' }}
            onClick={() => handleSelect(item.key)}
          >
            {item.name}
          </Tag>
        )}
      />
    </Card>
  );
};

export default ResultCard;
