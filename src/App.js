import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/movies/:id',
    element: <MovieDetail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
