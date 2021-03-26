import { useState } from 'react';
import omit from 'lodash/omit';
import { profile } from '@/utils';
import ConditionUtils from './conditionUtils';

const MAX = 5;
const HIDDEN_KEYS = ['name'];

const useCategory = () => {
  /** 已选择的标签列表 */
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const conditionUtils = ConditionUtils.useContainer();

  /** 选中标签方法 */
  const handleSelect = (key: string) => {
    if (selectedKeys.includes(key)) {
      //   如果包含, 则删除
      const newSelectedKeys = selectedKeys.filter(_ => _ !== key);
      setSelectedKeys(newSelectedKeys);
      conditionUtils.handleRemove(key);
    } else if (selectedKeys.length !== MAX) {
      //   如果不包含key, 如果不到MAX就增加
      const newSelectedKeys = [...selectedKeys, key];
      setSelectedKeys(newSelectedKeys);
    }
  };

  const handleReset = () => {
    setSelectedKeys([]);
    conditionUtils.handleReset();
  };

  return {
    selectedKeys,
    allKeys: omit(profile, HIDDEN_KEYS),
    handleSelect,
    handleReset,
  };
};

export default useCategory;
