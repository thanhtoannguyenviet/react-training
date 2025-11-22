import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import Title from './components/Title';
import SkillSection from './components/SkillSection';

function App() {
  return (
    <div className="App">
      <Welcome/> 
      <Greeting name="Toan"/> 
      <Title title="Developer"/>
      <SkillSection/>
    </div>
  );
}

export default App;
