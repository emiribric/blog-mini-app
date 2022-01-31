import { Routes, Route } from 'react-router-dom';

import Header from './component/header/header.component';
import HomePage from './pages/home/home.component';
import AboutUsPage from './pages/about/about.component';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={ <HomePage />} />
        <Route path='/about-us' element={ <AboutUsPage />} />
      </Routes>
    </>
  );
}

export default App;
