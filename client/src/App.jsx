import {Routes, Route} from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'
import { CustomThemeProvider } from './context/ThemeContext'

import LandingPage from './pages/LandingPage'
import MainLayout from './pages/MainLayout'
import NotFound from './pages/NotFound'
import Unautorized from './components/Profile/Unautorized'

import ProtectedViews from './components/Profile/ProtectedViews'
import RegisterModal from './components/Profile/RegisterModal'
import LoginModal from './components/Profile/LoginModal'
import ProfileModal from './components/Profile/ProfileModal'
import ListView from './components/DataVisualization/ListView'
import DetailView from './components/DataVisualization/DetailView'
import { FeaturesProvider } from './context/FeaturesContext'

function App() {
  return (
    <CustomThemeProvider>
      <FeaturesProvider>
        <AuthProvider>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<LandingPage />} />

            <Route element={<MainLayout />}>
              <Route path="/login" element={<LoginModal />} />
              <Route path="/register" element={<RegisterModal />} />
              <Route path="/profile" element={<ProfileModal />} />
              <Route path="/unautorized" element={<Unautorized />} />
              <Route path="/:datatype/list" element={<ListView />} />
              <Route path="/cave/list" element={<ListView />} />
              <Route path="/group/list" element={<ListView />} />
              <Route path="/system/list" element={<ListView />} />

              <Route element={<ProtectedViews/>}>              
                <Route path="/:datatype/:action" element={<DetailView/>} />
                <Route path="/:datatype/:action/:id" element={<DetailView/>} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </FeaturesProvider>
    </CustomThemeProvider>
  )
}

export default App
