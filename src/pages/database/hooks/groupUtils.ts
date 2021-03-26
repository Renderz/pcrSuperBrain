import { useMemo } from 'react';
import { createContainer } from 'unstated-next';
import { charaProfile } from '@/utils';
import ConditionUtils from './conditionUtils';

const useGroup = (initialState?: { categoryKey: string }) => {
  const conditionUtils = ConditionUtils.useContainer();

  const group: string[] = useMemo(() => {
    const result = [] as string[];

    if (!initialState?.categoryKey) {
      return [];
    }

    Object.keys(charaProfile).forEach(charaKey => {
      const chara = charaProfile[charaKey];

      // 不符合条件的删除
      const isMatch = conditionUtils.conditions.every(
        condition => chara[condition.id] === condition.value,
      );

      if (isMatch) {
        const groupValue = chara[initialState.categoryKey];

        const resultLocation = result.findIndex(_ => _ === groupValue);

        if (resultLocation === -1) {
          result.push(groupValue);
        }
      }
    });

    return result;
  }, [conditionUtils.conditions, initialState]);

  return {
    categoryKey: initialState?.categoryKey || '',
    group,
  };
};

export default createContainer(useGroup);
