import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import logo from './assets/logo.svg';
import Profile from './pages/Profile';
import './App.css';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route
            path="/"
            element={<Profile userName="hugo.7.musica@gmail.com" />}
          />
          <Route
            path="/projects"
            element={<Projects userName="hugo.7.musica@gmail.com" />}
          />
          <Route
            path="/projects/:name"
            element={<ProjectDetail userName="hugo.7.musica@gmail.com" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
