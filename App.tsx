import React from 'react';
import MainNavigation from './src/Navigation/mainNavigation';
import CustomLoader from './src/Components/Modal/CustomLoader';
import { useSelector } from 'react-redux';

const App = () => {
  const { isLoading } = useSelector((state: any) => state.LoaderSlice);
  return (
    <>
      <MainNavigation />
      {isLoading && (
        <CustomLoader modalVisible={isLoading} />
      )}
    </>
  );
};

export default App;
