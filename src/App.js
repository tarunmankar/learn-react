import ChangeBackground from "./components/ChangeBackground";
import ChangeInput from "./components/ChangeInput";
import ChangeText from "./components/ChangeText";
import IncreDecreMent from "./components/IncreDecreMent";
import ShowData from "./components/ShowData";

function App() {
  const objectData = { name : "tarun", school : "lfhs"}
  const arrayData = ["tarun","lfhs"]
  const variableData = "tarun"

  return (
    <>
      <IncreDecreMent/><hr/>
      <ChangeInput/><hr/>
      <ChangeText/><hr/>
      <ChangeBackground/><hr/>
      <ShowData objectData ={objectData} 
                arrayData={arrayData} 
                variableData={variableData} 
      /><hr/>
    </>
  );
}

export default App;
