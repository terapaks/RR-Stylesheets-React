import './App.css';
import Example from './components/Example'
import Example2 from './components/Example2'
import TextComponent from './components/TextComponent'

const stylesheet = {
  fontSize: '15px',
  textAlign: 'center',
}

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Example />
      <Example2 />
      <TextComponent stylesheet={stylesheet} />
    </div>
  );
}

export default App;
