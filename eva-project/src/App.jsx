import Item from './2 paskaita/Item';
import './App.css';
import Article from './components/Article';
import { DaiktuSarasas } from './components/DaiktuSarasas';
import Header from './components/Header';
import { VienasStudentas } from './components/VienasStudentas';
import { AllForms } from './forms/AllForms';
import { InputField } from './forms/InputField';
import { Navbar } from './style-react/Navbar';
import { MyTeam } from './useState/MyTeam';
import { ShowText } from './useState/ShowText';
import { StepCounter } from './useState/StepCounter';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/showText' element={<ShowText />}/>
      <Route path='/navbar' element={<Navbar />}/>
      <Route path='/studentas/:id'element={<VienasStudentas />}/>
      <Route path="/forms" element={<AllForms />}/>
      </Routes>
      {/* <Navbar /> */}
      {/* <Header />
     <Article />
     <Item /> */}
      {/* <DaiktuSarasas /> */}
      {/* <ShowText /> */}
      {/* <StepCounter /> */}
      <MyTeam />
    </>
  );
}

export default App;
