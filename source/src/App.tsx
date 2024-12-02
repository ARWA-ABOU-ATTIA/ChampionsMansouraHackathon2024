import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { PostJob } from './pages/PostJob';
import { JobListings } from './pages/JobListings';
import { JobDetails } from './pages/JobDetails';
import { UserProfile } from './pages/UserProfile';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/JobListings" element={<JobListings />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/job/:id" element={<JobDetails />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/contact-us" element={<Home/>} />


          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;