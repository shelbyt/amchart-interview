import { Card } from "./components/Card/Card";
import icon from "./assets/icons/icon1.png";
import { SparkLine } from "./components/SparkLine/SparkLine";

function App() {
  return (
    <div className="App">
      <Card
        headerProps={{
          icon: <img src={icon} alt="icon" />,
          amount: 1373.54,
          percentageAmount: 0.51,
          variant: "increase",
          time: "24s",
          buttonTitle: "Limit",
        }}
        footerBottomTitle="Copy this trade"
        likeButtonProps={{
          likes: 12,
        }}
        titleProps={{
          title: "TA stars are aligned. It’s time to buy the bottom the folks ",
        }}
        content={<SparkLine />}
      />
    </div>
  );
}

export default App;
