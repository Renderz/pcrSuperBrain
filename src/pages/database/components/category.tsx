import React from 'react';
import { Card, List, Tag, Button } from 'antd';
import { CollectorUtils } from '../hooks';

export default () => {
  const { categoryUtils } = CollectorUtils.useContainer();

  return (
    <Card
      title="标签类型(最多选择5项)"
      extra={
        <Button size="small" type="primary" onClick={categoryUtils.handleReset}>
          清空
        </Button>
      }
    >
      <List
        size="small"
        dataSource={Object.keys(categoryUtils.allKeys)}
        renderItem={key => (
          <Tag
            color={categoryUtils.selectedKeys.includes(key) ? '#108ee9' : 'blue'}
            key={key}
            style={{ marginBottom: '4px', cursor: 'pointer' }}
            onClick={() => categoryUtils.handleSelect(key)}
          >
            {categoryUtils.allKeys[key]}
          </Tag>
        )}
      />
    </Card>
  );
};
