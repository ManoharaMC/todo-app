import React, { Fragment } from "react";

const Todolist = (props) => {
  let { items } = props;
  return (
    <div>
      <h1 className="display-5 text-capitalize fw-bold text-primary my-4">
        List of Todo's
      </h1>
      {items.map((todo) => (
        <Fragment key={todo.id}>
          <ul className="list-group">
            <li className="list-group-item mb-2">
              <span>{todo.item_title}</span>
              <span className="float-end btn-group">
              </span>
            </li>
          </ul>
        </Fragment>
      ))}
    </div>
  );
};

export default Todolist;
