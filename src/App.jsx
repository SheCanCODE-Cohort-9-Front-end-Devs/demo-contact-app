import AuthPages from './pages/auth/AuthPages';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Add from './pages/Add';
import ContactDetails from './pages/ContactDetails';
import UpdateContact from './pages/UpdateContact';
import ErrorPage from './pages/ErrorPage';
import Main from './pages/Main';

const App = () => {
  return (
    <Router>
      <Routes>
        
        {/* Authentication pages  */}
        <Route path="/" element={<AuthPages />} >
          <Route path="" element={<SignIn />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* Main pages */} 
        <Route path="/contacts/" element={localStorage.getItem("user") ? <Main /> : <Navigate to="/signin" /> }>
          <Route path="" element={<Home />} />
          <Route path="add" element={<Add />} />
          <Route path=":contactId" element={<ContactDetails />} />
          <Route path="update/:contactId" element={<UpdateContact />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App