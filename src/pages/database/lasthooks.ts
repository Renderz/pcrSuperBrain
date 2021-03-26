import { createContainer } from 'unstated-next';
import { useState, useMemo } from 'react';
import { profile, charaProfile, charaName } from '@/utils';

const hiddenKey = ['name'];

export default createContainer(() => {
  const [selectedType, setSelectedType] = useState<string>();
  const [selectedCate, setSelectedCate] = useState<string>();
  const [selectedResult, setSelectedResult] = useState<number>();

  const handleSelectedType = (key: string) => {
    setSelectedCate(undefined);
    setSelectedResult(undefined);
    setSelectedType(key);
  };

  const handleSelectedCate = (key: string) => {
    setSelectedResult(undefined);
    setSelectedCate(key);
  };

  const handleSelectedResult = (key: number) => {
    setSelectedResult(key);
  };

  /** 根据selectedType 动态变化的 分类值 */
  const category = useMemo(() => {
    if (!selectedType) {
      return {};
    }

    const result = {};
    Object.keys(charaProfile).forEach(key => {
      const item = charaProfile[key];

      result[item[selectedType]] = [
        ...(result[item[selectedType]] || []),
        {
          name: item.name,
          key,
        },
      ];
    });
    return result;
  }, [selectedType]);

  /** 根据category 和 selectedCate 动态变化的 结果集 */
  const result: { name: string; key: number }[] = useMemo(() => {
    if (!selectedCate) {
      return [];
    }
    return category[selectedCate];
  }, [category, selectedCate]);

  /**  根据result 动态变化 charaname */
  const nameList: string[] = useMemo(() => {
    if (!selectedResult) {
      return [];
    }
    return charaName[selectedResult];
  }, [selectedResult]);

  return {
    selectedType,
    selectedCate,
    selectedResult,
    handleSelectedType,
    handleSelectedCate,
    handleSelectedResult,
    category,
    result,
    nameList,
    profile,
    hiddenKey,
  };
});
