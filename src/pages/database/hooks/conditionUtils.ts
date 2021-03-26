import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useCondition = () => {
  const [conditions, setConditions] = useState<Database.Condition[]>([]);

  const handleSelect = (_condition: Database.Condition) => {
    if (
      conditions.find(
        condition => condition.id === _condition.id && condition.value === _condition.value,
      )
    ) {
      // 如果cate相同, value相同, 就删除
      setConditions(conditions.filter(condition => condition.id !== _condition.id));
    } else if (
      conditions.find(
        condition => condition.id === _condition.id && condition.value !== _condition.value,
      )
    ) {
      // 如果cate相同, value不同, 就替换这条
      setConditions(
        conditions.filter(condition => condition.id !== _condition.id).concat([_condition]),
      );
    } else {
      // 如果cate不相同, 直接添加
      setConditions([...conditions, _condition]);
    }
  };

  const handleRemove = (_categoryId: string) => {
    setConditions(conditions.filter(condition => condition.id !== _categoryId));
  };

  const handleReset = () => {
    setConditions([]);
  };

  return {
    conditions,
    handleSelect,
    handleRemove,
    handleReset,
  };
};

export default createContainer(useCondition);
