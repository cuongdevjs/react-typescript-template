import React, { useCallback, useEffect } from 'react';

export const Test = () => {
  const a = useCallback(() => {
    console.log('af');
  }, []);

  useEffect(() => {
    a();
  }, []);

  return <div>Test Component</div>;
};
