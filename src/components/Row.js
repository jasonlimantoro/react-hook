import React from "react";

const Row = ({children}) => (
  <div style={{ display: "flex", justifyContent: 'space-evenly' }}>
    {children}
  </div>
);

export default Row;