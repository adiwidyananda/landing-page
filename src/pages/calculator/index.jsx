import { useBitcoin, useIDRtoBTC, useBTCtoIDR } from "@libs/hooks/bitcoin";
import { Table, Container, InputField } from "@components";
import { useState } from "react";

function CalculatorPage() {
  const [rupiah, setRupiah] = useState(0);
  const [bitcoin, setBitcoin] = useState(0);
  const { data } = useBitcoin();
  const { result: bitcoinValue } = useIDRtoBTC(rupiah);
  const { result: rupiahValue } = useBTCtoIDR(bitcoin);
  return (
    <Container className="calculator-page">
      <div className="calculator-page-section">
        <h1 className="calculator-page-section-title">
          Harga Bitcoin Hari Ini
        </h1>
        <Table data={data} />
      </div>
      <div className="calculator-page-section">
        <h1 className="calculator-page-section-title">
          Konversi Rupiah ke Bitcoin
        </h1>
        <h3 className="calculator-page-section-extra">
          Kurs 1 USD = 15.000 IDR
        </h3>
        <InputField
          type="number"
          onChange={(e) => setRupiah(e.target.value ? e.target.value : 0)}
        />
        <h1 className="calculator-page-section-title mt-4">
          Rp {rupiah} = BTC {bitcoinValue}
        </h1>
      </div>
      <div className="calculator-page-section !mt-24">
        <h1 className="calculator-page-section-title">
          Konversi Bitcoin ke Rupiah
        </h1>
        <h3 className="calculator-page-section-extra">
          Kurs 1 USD = 15.000 IDR
        </h3>
        <InputField
          type="number"
          onChange={(e) => setBitcoin(e.target.value ? e.target.value : 0)}
        />
        <h1 className="calculator-page-section-title mt-4 mb-10">
          BTC {bitcoin} = RP {rupiahValue}
        </h1>
      </div>
    </Container>
  );
}

export default CalculatorPage;
