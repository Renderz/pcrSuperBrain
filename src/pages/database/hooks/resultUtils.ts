import { useMemo, useState } from 'react';
import { createContainer } from 'unstated-next';
import { charaProfile, charaName } from '@/utils';
import ConditionUtils from './conditionUtils';

const useResult = () => {
  const [selectedKey, setSelectedKey] = useState<string>();
  const conditionUtils = ConditionUtils.useContainer();

  const result: Database.Chara[] = useMemo(() => {
    const data = [] as Database.Chara[];

    if (conditionUtils.conditions.length === 0) {
      return [];
    }

    Object.keys(charaProfile).forEach(charaKey => {
      const chara = charaProfile[charaKey];

      if (conditionUtils.conditions.every(condition => chara[condition.id] === condition.value)) {
        const charaInfo = { key: charaKey, name: chara.name };
        data.push(charaInfo);
      }
    });

    return data;
  }, [conditionUtils.conditions]);

  const nameList: string[] = useMemo(() => {
    if (result.find(_ => _.key === selectedKey) && selectedKey) {
      return charaName[selectedKey];
    }
    return [];
  }, [result, selectedKey]);

  const handleSelect = (_key: string) => {
    setSelectedKey(_key);
  };

  return {
    result,
    selectedKey,
    nameList,
    handleSelect,
  };
};

export default createContainer(useResult);
