import './App.css';

function App() {
  let text;
  const show = false;

  if (show) {
    text = <p className="text">I'm 18 years old</p>;
  } else {
    text = <p className="text">I'm not 18 years old</p>;
  }

  return (
    <div className="container">
      <h2 className="header">Task#25</h2> 
      {text}
    </div>

  );
}

export default App;
