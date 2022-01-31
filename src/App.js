import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './component/header/header.component';
import HomePage from './pages/home/home.component';
import AboutUsPage from './pages/about/about.component';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <HashRouter>
          <Route exact path='/blog-mini-app' element={ <HomePage />} />
          <Route path='/about-us' element={ <AboutUsPage />} />
        </HashRouter>
      </Routes>
    </>
  );
}

export default App;
