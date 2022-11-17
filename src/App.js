import ChangeBackground from "./components/ChangeBackground";
import ChangeInput from "./components/ChangeInput";
import ChangeText from "./components/ChangeText";
import IncreDecreMent from "./components/IncreDecreMent";
import PrintArrayList from "./components/PrintArrayList";
import PrintObjectList from "./components/PrintObjectList";
import ShowData from "./components/ShowData";
import ApiCall from "./components/ApiCall";

function App() {
  const objectData = { name : "tarun", school : "lfhs"}
  const arrayData = ["tarun","lfhs"]
  const variableData = "tarun"

  return (
    <>
      <ApiCall/> 
      <IncreDecreMent/><hr/>
      <ChangeInput/><hr/>
      <ChangeText/><hr/>
      <PrintArrayList/><hr/>
      <PrintObjectList/><hr/>
      <ChangeBackground/><hr/>
      <ShowData objectData ={objectData} 
                arrayData={arrayData} 
                variableData={variableData} 
      /><hr/>
    </>
  );
}

export default App;
