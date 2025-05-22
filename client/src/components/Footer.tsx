import { Link } from 'wouter';
import { useLocation } from 'wouter';
import { scrollToSection } from '@/lib/utils';

const Footer = () => {
  const [location] = useLocation();
  const isHomePage = location === '/';

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHomePage) {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-white text-primary p-1 rounded font-heading font-bold text-xl">DTL</span>
              <span className="font-heading font-semibold text-lg">C-Suite Program</span>
            </div>
            <p className="text-gray-400">Empowering deep-tech founders with the business acumen to lead successful ventures.</p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href={isHomePage ? '#home' : '/'} 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavigation(e, 'home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href={isHomePage ? '#about' : '/about'} 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavigation(e, 'about')}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href={isHomePage ? '#participants' : '/for-participants'} 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavigation(e, 'participants')}
                >
                  For Participants
                </a>
              </li>
              <li>
                <a 
                  href={isHomePage ? '#partners' : '/for-partners'} 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavigation(e, 'partners')}
                >
                  For Partners
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href={isHomePage ? '#faculty' : '/faculty'} 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavigation(e, 'faculty')}
                >
                  Faculty & Speakers
                </a>
              </li>
              <li>
                <a 
                  href={isHomePage ? '#schedule' : '/schedule'} 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavigation(e, 'schedule')}
                >
                  Program Schedule
                </a>
              </li>
              <li>
                <a 
                  href={isHomePage ? '#faq' : '/faq'} 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavigation(e, 'faq')}
                >
                  FAQs
                </a>
              </li>
              <li>
                <a 
                  href="/files/syllabus.pdf" 
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Syllabus
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-envelope text-primary mr-2"></i>
                <a 
                  href="mailto:info@dtl-hk.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@dtl-hk.com
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-pin text-primary mr-2"></i>
                <span className="text-gray-400">Hong Kong Science Park</span>
              </li>
              <li>
                <div className="flex space-x-3 mt-3">
                  <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.twitter.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Deep-Tech Lab Hong Kong. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
