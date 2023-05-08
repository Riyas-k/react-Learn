// import StateClass from "./Components/StateClass";
// import {StateFunction} from '../src/Components/StateFunction'
import './App.css'
import Context from './Components/Context';
import ReducerCount from './Components/ReducerCount';
// import EffectFetch from './Components/EffectFetch';
// import EffectCount from './Components/EffectCount';
// import EffectMouse from './Components/EffectMouse';
// import EffectSet from './Components/EffectSet';
// import { StateFunction } from './Components/StateFunction';
// import StateArray from './Components/StateArray';
// import StateObject from './Components/StateObject';
import { ErrorBoundary } from './ErrorBoundary';

function App() {


  return (
    <>
    <ErrorBoundary >
    <ReducerCount />
    </ErrorBoundary>
    </>
  );  
}

export default App;
