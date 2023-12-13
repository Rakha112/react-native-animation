import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type LoaderContextProps = boolean;
type LoaderDispatch = Dispatch<SetStateAction<LoaderContextProps>>;

const LoaderContext = createContext<LoaderContextProps | undefined>(undefined);
const LoaderDispatchContext = createContext<LoaderDispatch | undefined>(
  undefined,
);

type Props = {
  children: ReactNode;
};

function LoaderProvider({children}: Props) {
  const [loader, setLoader] = useState<boolean>(false);

  return (
    <LoaderContext.Provider value={loader}>
      <LoaderDispatchContext.Provider value={setLoader}>
        {children}
      </LoaderDispatchContext.Provider>
    </LoaderContext.Provider>
  );
}

// Hook to use the LoaderContext value
function useLoader() {
  const context = useContext(LoaderContext);
  if (context === undefined) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
}

// Hook to use the LoaderDispatchContext value
function useLoaderDispatch() {
  const context = useContext(LoaderDispatchContext);
  if (context === undefined) {
    throw new Error('useLoaderDispatch must be used within a LoaderProvider');
  }
  return context;
}

export {LoaderProvider, useLoader, useLoaderDispatch};
