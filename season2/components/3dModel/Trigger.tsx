import React, { useEffect } from "react";

type Props = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Trigger = ({ setLoading }: Props) => {
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, [setLoading]);

  return <></>;
};

export default Trigger;
