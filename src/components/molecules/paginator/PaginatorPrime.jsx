import React, { useState } from "react";

/* react prime */
import { Paginator } from "primereact/paginator";

/* css */
import "./PaginatorDemo.css";

const PaginatorPrime = () => {
  const [basicFirst, setBasicFirst] = useState(0);
  const [basicRows, setBasicRows] = useState(10);

  const onBasicPageChange = (event) => {
    console.log("eve", event);
    setBasicFirst(event.first);
    setBasicRows(event.rows);
  };

  return (
    <div className="paginator-demo">
      <div className="card">
        <h5>Basic</h5>
        <Paginator
          first={basicFirst}
          rows={basicRows}
          totalRecords={120}
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={onBasicPageChange}
        ></Paginator>
      </div>
    </div>
  );
};

export default PaginatorPrime;
