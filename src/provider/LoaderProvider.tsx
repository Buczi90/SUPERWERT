import { ReactNode, useState } from 'react';

import LoaderContext, { LoaderContextType } from '../context/loader.context';

interface LoaderProviderProps {
  children: ReactNode;
}

export const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => {
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  const value: LoaderContextType = {
    isLoading,
    showLoader,
    hideLoader,
  };

  return <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>;
};
