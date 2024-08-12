
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { LayoutOne } from './Layouts/LayoutOne'
import { LoginPage } from './Pages/LoginPage'
import { SignUpPage } from './Pages/SignUpPage'
import { NotFoundPage } from './Pages/NotFoundPage'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}/>
        <Route index element={<LoginPage/>}/>
        <Route path='/signuppage' element={<SignUpPage/>}/>
        <Route path='/notfoundpage' element={<NotFoundPage/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
