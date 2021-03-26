import { useState } from 'react';

const useStyle = () => {
  const [style, setStyle] = useState<Layout.Style>('baidu');

  const handleToggleStyle = () => {
    setStyle(last => {
      if (last === 'baidu') {
        return 'pcr';
      }
      return 'baidu';
    });
  };

  return {
    style,
    handleToggleStyle,
  };
};

export default useStyle;
