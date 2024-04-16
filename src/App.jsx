import { useState } from 'react'
import AuthenticationRoutes from './routes/AuthenticationRoutes'
import MainRoutes from './routes/MainRoutes'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
        {loggedIn && <MainRoutes />}
        {!loggedIn && <AuthenticationRoutes />}
    </>
  )
}

export default App