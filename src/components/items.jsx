import React from 'react';

const Items = props => {
  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th className="text-center">Item Name</th>
          <th className="text-center">Item Price</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.inStockItems.map((item, index) => {
          return (
            <tr key={index}>
              <td className="col-md-4 text-center">{item.name}</td>
              <td className="col-md-4 text-center">{item.price}</td>
              <td className="col-md-4 text-center">
                <button
                  className="btn btn-primary"
                  onClick={() => props.addToCart(item)}
                >
                  Add To Cart
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Items;
