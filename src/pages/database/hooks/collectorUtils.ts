import { createContainer } from 'unstated-next';
import useCategory from './useCategory';

export default createContainer(() => {
  const categoryUtils = useCategory();

  return {
    categoryUtils,
  };
});
