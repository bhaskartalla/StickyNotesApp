import NotesPage from './pages/NotesPage'
import Saving from './components/Saving'
import NotesProvider from './context/NotesProvider'
import AuthenticationPage from './pages/AuthenticationPage'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom'

const RootLayout = () => (
  <>
    <div id='header'>
      <Saving />
    </div>
    <Outlet />
  </>
)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<RootLayout />}
    >
      <Route
        index
        element={<NotesPage />}
      />
      <Route
        path='signin'
        element={<AuthenticationPage />}
      />
    </Route>
  )
)

function App() {
  return (
    <NotesProvider>
      <RouterProvider router={router} />
    </NotesProvider>
  )
}

export default App
