// import logo from './logo.svg';
// import './App.css';
import FunctionComp from './Components/FunctionComp';
import ClassComp from './Components/ClassComp';
import Click from './Components/Click';
import Count from './Components/Count';
import ParentComp from './Components/ParentComp';
function App() {
  return  (
    <div>
      <h1>Hello World, Please welcome Every one to the Stephs House.</h1>
      <h1>You will definitely Enjoy The flowers and birds.</h1>
      <FunctionComp />
      <ClassComp />
      <Click />
      <Count />
      <ParentComp />
    </div>
    );
  
}

export default App;
