import "./App.css";
import MuiSelect from "./components/MuiSelect";
import { MuiTextField } from "./components/MuiTextField";
import { MuiButton } from "./components/MuiButton";
import { MuiTypography } from "./components/MuiTypography";
import MuiRadio from "./components/MuiRadio";
import UnoptimizedExpensiveCalculation from "./components/UnoptimizedExpensiveCalculation";
import OptimizedExpensiveCalculation from "./components/OptimizedExpensiveCalculation";

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiRadio />
      <MuiSelect />
      <UnoptimizedExpensiveCalculation />
      <OptimizedExpensiveCalculation />
    </div>
  );
}

export default App;
