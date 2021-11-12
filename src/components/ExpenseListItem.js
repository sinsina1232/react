// export stateless functional component
// ender desctiption, amount, createdAt
import { Link } from 'react-router-dom';
import React from 'react';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt})=>(
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>

    <p >{amount} - {createdAt}</p>

    </div>
  );
export default ExpenseListItem;
