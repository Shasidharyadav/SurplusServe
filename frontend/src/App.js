import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import DonorComponent from './components/dashboard/DonorComponent';
import ReceiverComponent from './components/dashboard/ReceiverComponent';
import NotificationComponent from './components/NotificationComponent';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/donor" element={<DonorComponent />} />
          <Route path="/receiver" element={<ReceiverComponent />} />
          <Route path="/notifications" element={<NotificationComponent />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
