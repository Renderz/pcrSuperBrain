import React from 'react';
import { Card, List, Tag, message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ResultUtils } from '../hooks';

const NameCard: React.FC = () => {
  const { nameList } = ResultUtils.useContainer();

  return (
    <Card title="名称列表">
      <List
        size="small"
        dataSource={nameList}
        renderItem={item => (
          <CopyToClipboard text={item} onCopy={() => message.success('已复制!')}>
            <Tag color="purple" key={item} style={{ marginBottom: '4px', cursor: 'pointer' }}>
              {item}
            </Tag>
          </CopyToClipboard>
        )}
      />
    </Card>
  );
};

export default NameCard;
