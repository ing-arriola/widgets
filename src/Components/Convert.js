import React, { useEffect } from "react";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("some change");
  }, [language, text]);

  return <div>Hola</div>;
};

export default Convert;
