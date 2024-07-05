import Test1 from "@/components/Test1";
import ExerAmountChart from "@/components/charts/exerAmountChart";
import Example from "@/components/charts/inbodyChart";

export default function Home() {
  function test() {
    return 5 + 4;
  }
  return (
    <div>
      <ExerAmountChart />
      {/* <Example /> */}
      {/* <Test1 /> */}
      {test()}
    </div>
  );
}
