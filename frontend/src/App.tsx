import { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowToDonate from './components/HowToDonate';
import Footer from './components/Footer';
import DonateForm from './components/DonateForm';
import GetDonationForm from './components/GetDonationForm';
import Leaderboard from './components/Leaderboard';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AdminLayout from './components/admin/AdminLayout';
import DonationList from './components/admin/DonationList';
import DonorList from './components/admin/DonorList';
import WaitList from './components/admin/WaitList';

export const AppContext = createContext();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");
    console.log("Retrieved Token:", storedToken); // Debugging
    setToken(storedToken);
  }, []);

  return (
    <AppContext.Provider value={{ token }}>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="donations" element={<DonationList />} />
              <Route path="donors" element={<DonorList />} />
              <Route path="waitlist" element={<WaitList />} />
            </Route>
            {/* User Routes */}
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <main>
                          <Hero />
                          <About />
                          <HowToDonate />
                        </main>
                      }
                    />
                    <Route path="/donate" element={<DonateForm />} />
                    <Route path="/get-donation" element={<GetDonationForm />} />
                    <Route path="/leader-boards" element={<Leaderboard />} />
                  </Routes>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
