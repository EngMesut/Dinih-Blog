import { FaInstagram, FaTelegram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-white px-4 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center mb-4 sm:mb-6">
              <span className="text-primary font-bold text-xl">MH.</span>
              <span className="ml-2 text-gray-900">Dinih </span>
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-muted">
              <p>
                <strong>Corporate Head Office:</strong> KM4, Hodan District,
                Mogadishu, Somalia.
              </p>

              <p>
                <strong>Phone:</strong> 252-695-7759
              </p>
              <p>
                <strong>Fax:</strong> =02-222264303
              </p>
              <p>
                <strong>Email:</strong> info@dinih.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>Pricing</li>
              <li>Jobs</li>
              <li>Employer</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Others</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>How it works</li>
              <li>Terms and condition</li>
              <li>Privacy Policy</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">About us</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>Company milestone</li>
              <li>Web mail</li>
              <li>Board of Directors</li>
              <li>Senior Management</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t">
          <p className="text-xs sm:text-sm text-muted mb-4 sm:mb-0">
            ©2024 All rights reserved
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <FaInstagram className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </Button>
            <Button variant="ghost" size="icon">
              <FaTelegram className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </Button>
            <Button variant="ghost" size="icon">
              <FaTiktok className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </Button>
            <Button variant="ghost" size="icon">
              <FaYoutube className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
