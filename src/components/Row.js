import React from "react";

const Row = ({children}) => (
  <div style={{ display: "flex", justifyContent: 'space-evenly', marginBottom: 30 }}>
    {children}
  </div>
);

export default Row;