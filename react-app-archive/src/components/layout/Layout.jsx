import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from './TopBar';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <TopBar />
      <Nav />
      {children}
      <Footer />
    </>
  );
}
