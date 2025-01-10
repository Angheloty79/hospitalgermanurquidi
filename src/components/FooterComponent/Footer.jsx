
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      {/* Footer Top */}
      <div className="footer-top py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Us Section */}
            <div className="single-footer">
              <h2 className="text-2xl font-bold text-white mb-6">About Us</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We are dedicated to providing top-notch services with a team of highly skilled professionals.
              </p>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <i className="icofont-facebook text-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <i className="icofont-google-plus text-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <i className="icofont-twitter text-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <i className="icofont-vimeo text-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <i className="icofont-pinterest text-2xl"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div className="single-footer">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Links</h2>
              <div className="grid grid-cols-2 gap-4">
                <ul>
                  <li className="mb-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      <i className="fa fa-caret-right mr-2"></i>Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      <i className="fa fa-caret-right mr-2"></i>About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      <i className="fa fa-caret-right mr-2"></i>Services
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      <i className="fa fa-caret-right mr-2"></i>Our Cases
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      <i className="fa fa-caret-right mr-2"></i>Other Links
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="mb-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      <i className="fa fa-caret-right mr-2"></i>Consulting
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      <i className="fa fa-caret-right mr-2"></i>Finance
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      <i className="fa fa-caret-right mr-2"></i>Testimonials
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      <i className="fa fa-caret-right mr-2"></i>FAQ
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      <i className="fa fa-caret-right mr-2"></i>Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Open Hours Section */}
            <div className="single-footer">
              <h2 className="text-2xl font-bold text-white mb-6">Open Hours</h2>
              <p className="text-gray-400 mb-6">
                We are open 7 days a week to ensure the best service to our clients.
              </p>
              <ul className="text-gray-400">
                <li className="mb-4">
                  Monday - Friday: <span className="text-white ml-2">8:00 AM - 8:00 PM</span>
                </li>
                <li className="mb-4">
                  Saturday: <span className="text-white ml-2">9:00 AM - 6:30 PM</span>
                </li>
                <li className="mb-4">
                  Sunday: <span className="text-white ml-2">9:00 AM - 3:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright py-4 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} | All Rights Reserved by{' '}
            <a href="https://www.wpthemesgrid.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              wpthemesgrid.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;