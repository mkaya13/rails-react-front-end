import React from "react";
import { useSelector } from "react-redux";
const Messages = () => {
  const randomMessage = useSelector((state) => state.message);

  return (
    <>
      {randomMessage.isLoading ? <h2>Loading... Please wait</h2> : null}
      {randomMessage.error.length > 0 ? (
        <h2>{randomMessage.error.stack}</h2>
      ) : null}
      {randomMessage.successful ? <h2>{randomMessage.name.message}</h2> : null}
    </>
  );
};

export default Messages;
