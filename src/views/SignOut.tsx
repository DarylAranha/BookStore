import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const SignOut: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/signin");
  }, [history]);

  return (
    <div>
      <h2>Signing Out...</h2>
    </div>
  );
};

export default SignOut;
