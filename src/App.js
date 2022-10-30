import ChangeBackground from "./components/ChangeBackground";
import ChangeInput from "./components/ChangeInput";
import ChangeText from "./components/ChangeText";
import ShowData from "./components/ShowData";

function App() {
  const objectData = { name : "tarun", school : "lfhs"}
  const arrayData = ["tarun","lfhs"]
  const variableData = "tarun"

  return (
    <>
      <ChangeInput/><hr/>
      <ChangeText/><hr/>
      <ShowData objectData ={objectData} 
                arrayData={arrayData} 
                variableData={variableData} 
      /><hr/>
      <ChangeBackground/>
    </>
  );
}

export default App;
