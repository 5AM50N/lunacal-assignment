
import './App.css';
import Left_Frame from './components/Left_Frame.js';
import Right_Frame from './components/Right_Frame.js';

function App() {
  return (
    <div className="main flex justify-between h-dvh p-4">
      <Left_Frame />
      <Right_Frame />
    </div>
  );
}

export default App;
