// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Detailspage from './components/pages/Detailspage';
// import Error from './components/pages/Error';
// import Homepage from './components/pages/Homepage';
import './App.css';
import Route from './components/pages/Router';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="detailspage" element={<Detailspage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter> */}
      <Route/>
    </div>
  );
}

export default App;
