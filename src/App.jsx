import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import FullCountryData from './components/fullCountryData/FullCountryData';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },

    {
      path: '/:cca3',
      element: <FullCountryData />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
