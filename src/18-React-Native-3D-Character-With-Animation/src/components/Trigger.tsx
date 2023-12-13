import React, {useEffect} from 'react';
import {useLoaderDispatch} from '../context/LoaderProvider';

const Trigger = () => {
  const setLoader = useLoaderDispatch();

  useEffect(() => {
    setLoader(true);
    return () => {
      setLoader(false);
    };
  }, [setLoader]);

  return <></>;
};

export default Trigger;
