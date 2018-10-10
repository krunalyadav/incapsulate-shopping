import React from 'react';

const Items = props => {
  return !!props.inStockItems.length ? (
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
          const addToCartButton = (
            <button
              className="btn btn-primary"
              onClick={() => props.addToCart(item)}
            >
              Add To Cart
            </button>
          );
          const removeFromCartButton = (
            <button
              className="btn btn-primary"
              onClick={() => props.removeFromCart(item)}
            >
              Remove From Cart
            </button>
          );
          return (
            <tr key={index}>
              <td className="col-md-4 text-center">{item.name}</td>
              <td className="col-md-4 text-center">{item.price}</td>
              <td className="col-md-4 text-center">
                {props.isAddToCart ? addToCartButton : removeFromCartButton}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <p>No Records Found</p>
  );
};

export default Items;
