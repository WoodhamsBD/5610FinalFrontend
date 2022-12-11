import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findIntraDayBySymbolThunk } from "./stockSearch-thunks";

const StockSearch = () => {

  const [searchTerm, setSearchTerm] = useState("");
  // console.log("Search Term" + searchTerm)

  const {stocks, loading} = useSelector((state) => state.stocks)
  // console.log("Stock Array" + stocks)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findIntraDayBySymbolThunk(searchTerm));
  }, []);

  const {chartOptions, setChartOptions} = useState({
    chart: {
      type: 'candelstick'
    },
    title: {
      text: 'Test Title'
    },
    series: [
      {data: [1,2,3]}
    ]
  })

  return (
    <>
      <h1>Enter a Stock Symbol for Intraday data</h1>

      <ul className="list-group">
        <li className="list-group-item">
          <button
            className="btn btn-primary float-end"
            onClick={() => {
              dispatch(findIntraDayBySymbolThunk(searchTerm));
            }}
          >
            Search
          </button>
          <input
            className="form-control w-75"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
          />
        </li>
      </ul>
    </>
  );
};

export default StockSearch;
