import './App.css';
import Work from './Work';
function App() {
  return (
  // pure componeet
  <>
  <h1 style={{textAlign:'center'}} >React Pure Function ||||  &&&& ||||    React Higher Order Function </h1>
  <pre style={{textAlign:'center',fontSize:'22px'}}>
  A React component is considered pure if it renders the same output for the same state and props. <br/>For this type of class component, React provides the PureComponent base class. Class components that <br/>extend the React. PureComponent class are treated as pure components.
  <Work />
  </pre>
  




  {/* Higher order function */}
  <pre style={{textAlign:'center',fontSize:'22px'}}>
  A higher order component function accepts another function as an argument. The map function is the <br/>best example to understand this. The main goal of this is to decompose the component logic into simpler<br/> and smaller functions that can be reused as you need.
  </pre>
  </>
  );
}

export default App;
