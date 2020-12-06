import { useState } from "react";
import { BrowserRouter, Route} from 'react-router-dom';
import Layout from "../components/Layout";
import Row from "../components/prebuilt/Row";
import DonutShop from "../components/prebuilt/DonutShop";
import CheckoutForm from "../components/CheckoutForm";
import getDonutPrice from "../utils/get-donut-price";

const MainPage = props => {
  const [numDonuts, setNumDonuts] = useState(1);

  const addDonut = () => setNumDonuts(num => Math.min(12, num + 1));
  const remDonut = () => setNumDonuts(num => Math.max(1, num - 1));

  return (
    <Layout title="Donut Shop">
      <Row>
        <DonutShop
          onAddDonut={addDonut}
          onRemoveDonut={remDonut}
          numDonuts={numDonuts}
        />
      </Row>
      <CheckoutForm
        price={getDonutPrice(numDonuts)}
        onSuccessfulCheckout={() => Route.push("/success")}
      />
    </Layout>
  );
};

export default MainPage;
