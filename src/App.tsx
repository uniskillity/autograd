/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background selection:bg-primary/30">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
        </Routes>
        <Toaster position="bottom-right" theme="dark" />
      </div>
    </Router>
  );
}
