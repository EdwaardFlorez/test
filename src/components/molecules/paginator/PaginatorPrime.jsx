import React, { useState, useEffect } from "react";

/* react prime */
import { Paginator } from "primereact/paginator";

/* css */
import "./PaginatorDemo.css";

/* redux */
import { connect } from "react-redux";
import { heroesAction } from "../../../redux/actions";

const PaginatorPrime = ({ heroesAction, heroes }) => {
  const [basicFirst, setBasicFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [page, setPage] = useState(0);
  const [totalRecords, setTotalRecords] = useState(100);

  useEffect(() => {}, []);

  const onBasicPageChange = (event) => {
    let page = event.page + 1;
    let rows = event.rows;
    heroesAction(rows, page);
    setBasicFirst(event.first);
    setRows(event.rows);
  };

  return (
    <div className="paginator-demo">
      <div className="card">
        <Paginator
          first={basicFirst}
          rows={rows}
          totalRecords={totalRecords}
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={onBasicPageChange}
        ></Paginator>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes,
  };
};

export default connect(mapStateToProps, {
  heroesAction: heroesAction,
})(PaginatorPrime);
