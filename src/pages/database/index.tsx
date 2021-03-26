import React from 'react';
import { Row, Col } from 'antd';
import { CollectorUtils, ConditionUtils, ResultUtils } from './hooks';
import Category from './components/category';
import GroupContainer from './components/groupContainer';
import Conditions from './components/conditions';
import Result from './components/result';
import Names from './components/names';

export default () => (
  <ConditionUtils.Provider>
    <CollectorUtils.Provider>
      <ResultUtils.Provider>
        <Row gutter={24}>
          <Col span={6}>
            <Category />
            <br />
            <Conditions />
          </Col>
          <Col span={6}>
            <GroupContainer />
          </Col>
          <Col span={6}>
            <Result />
          </Col>
          <Col span={6}>
            <Names />
          </Col>
        </Row>
      </ResultUtils.Provider>
    </CollectorUtils.Provider>
  </ConditionUtils.Provider>
);
