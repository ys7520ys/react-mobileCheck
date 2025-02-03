import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomeView from "./views/HomeView";
import AboutView from "./views/About";
import Container from "./components/Container";

const pageVariants = {
    initial: { opacity: 0, y: 20 }, // 새 요소가 오른쪽에서 등장
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 } // 기존 요소가 왼쪽으로 빠짐
  };
  
  const AnimatedRoutes = () => {
    const location = useLocation();
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}// 현재 경로의 값을 key값으로 설정하였다.
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.3 }}
        > 
          <Container>
            <Routes location={location}>
              <Route path="/" element={<HomeView />} />
              <Route path="/about" element={<AboutView />} />
            </Routes>
          </Container>
        </motion.div>
      </AnimatePresence>
    );
  };
  
  
  const App = () => {
    return (
      <Router>
        <AnimatedRoutes />
      </Router>
    );
  };
  
  export default App;