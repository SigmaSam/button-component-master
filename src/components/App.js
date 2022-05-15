
import '../styles/App.css';
import Sidebar from './Sidebar';
import Buttons from './Buttons'

function App() {
  return (
    <div className="App">
      <section> 
        <Sidebar />
      </section>
      <section className="containers">
        <Buttons />
      </section>
    </div>
  );
}

export default App;
