import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowToDonate from "./components/HowToDonate";
import Footer from "./components/Footer";
import DonateForm from "./components/DonateForm";
import GetDonationForm from "./components/GetDonationForm";
import Leaderboard from "./components/Leaderboard";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AdminLayout from "./components/admin/AdminLayout";

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-to-donate" element={<HowToDonate />} />
          <Route path="/donate" element={<DonateForm />} />
          <Route path="/request" element={<GetDonationForm />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/admin/*" element={<AdminLayout />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
