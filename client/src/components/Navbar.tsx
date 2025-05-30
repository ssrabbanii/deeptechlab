import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/utils';
import deepTechLabLogo from '@assets/image_1748578606438.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Check if we're on homepage
  const isHomePage = location === '/';

  // Handle navigation depending on whether we're on homepage or not
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHomePage) {
      e.preventDefault();
      scrollToSection(sectionId);
      closeMobileMenu();
    } else {
      closeMobileMenu();
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: isHomePage ? '#home' : '/', label: 'Home', sectionId: 'home' },
    { href: isHomePage ? '#about' : '/about', label: 'About', sectionId: 'about' },
    { href: isHomePage ? '#participants' : '/for-participants', label: 'For Participants', sectionId: 'participants' },
    { href: isHomePage ? '#partners' : '/for-partners', label: 'For Partners', sectionId: 'partners' },
    { href: isHomePage ? '#faculty' : '/faculty', label: 'Faculty', sectionId: 'faculty' },
    { href: isHomePage ? '#schedule' : '/schedule', label: 'Schedule', sectionId: 'schedule' },
    { href: isHomePage ? '#faq' : '/faq', label: 'FAQs', sectionId: 'faq' },
    { href: isHomePage ? '#contact' : '/contact', label: 'Contact', sectionId: 'contact' },
  ];

  return (
    <header className={`bg-white shadow-md fixed w-full top-0 z-50 transition-shadow ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img 
            src={deepTechLabLogo} 
            alt="Deep-Tech Lab" 
            className="h-10 w-auto"
          />
          <span className="text-dark font-heading font-semibold text-lg hidden sm:block">C-Suite Leadership Program</span>
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href}
                className="nav-link text-gray-700 hover:text-primary font-medium"
                onClick={(e) => handleNavigation(e, item.sectionId)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center space-x-3">
          <Link href={isHomePage ? '#apply' : '/apply'} onClick={(e) => isHomePage && handleNavigation(e, 'apply')}>
            <Button className="hidden sm:block bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-primary text-white font-medium transition-all hover:shadow-lg">
              Apply Now
            </Button>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white shadow-lg absolute w-full left-0 top-full transition-all duration-300 ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-3">
          <ul className="space-y-3 pb-3">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-primary font-medium"
                  onClick={(e) => handleNavigation(e, item.sectionId)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link href={isHomePage ? '#apply' : '/apply'} onClick={(e) => isHomePage && handleNavigation(e, 'apply')}>
                <Button className="w-full bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium text-center">
                  Apply Now
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
