import { currencyMapper } from "@libs/utils/mapper";

function Table({ data }) {
  return (
    <div className="custom-table">
      <div className="custom-table-row">
        <div>Mata Uang</div>
        <div>Harga Beli Bitcoin</div>
        <div>Harga Jual Bitcoin</div>
      </div>
      <div className="custom-table-column">
        {data?.map((x, i) => (
          <div key={i} className="custom-table-column-item">
            <div>{currencyMapper[x.label]}</div>
            <div>{x.buy}</div>
            <div>{x.sell}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
