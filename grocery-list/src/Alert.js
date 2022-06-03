import React from "react";

export default function Alert({ type, msg, removeAlert, list }) {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list, removeAlert]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
}
