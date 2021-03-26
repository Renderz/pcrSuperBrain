import { createContainer } from 'unstated-next';
import useStyle from './useStyle';

const Hooks = () => {
  const styleUtils = useStyle();

  return {
    styleUtils,
  };
};

export default createContainer(Hooks);
