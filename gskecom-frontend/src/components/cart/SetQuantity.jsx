const SetQuantity = ({
  quantity,
  cardCounter,
  handeQtyIncrease,
  handleQtyDecrease,
}) => {
  return (
    <div className="flex items-center gap-4">
      {/* Label */}
      {cardCounter ? null : <div className="font-semibold text-slate-700">QUANTITY</div>}

      {/* Buttons and quantity */}
      <div className="flex items-center gap-2 border border-gray-300 rounded-md overflow-hidden">
        {/* Decrease button */}
        <button
          disabled={quantity <= 1}
          onClick={handleQtyDecrease}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-gray-800 font-semibold transition-colors duration-150"
        >
          -
        </button>

        {/* Quantity display */}
        <div className="px-4 py-1 bg-white text-gray-900 font-semibold text-center w-12">
          {quantity}
        </div>

        {/* Increase button */}
        <button
          onClick={handeQtyIncrease}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold transition-colors duration-150"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
