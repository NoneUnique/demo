import Link from 'next/link';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

export default function FinancingLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="text-center space-y-8 max-w-xl">
        <div className="animate-bounce">
          <WrenchScrewdriverIcon className="h-16 w-16 mx-auto text-gray-600" />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 animate-fade-in">
            Financing Solutions Coming Soon
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-delay">
            We're working hard to bring you innovative financing options that match our premium services. Stay tuned for updates!
          </p>
          <Link 
            href="/" 
            className="inline-block px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 animate-fade-in-delay-2"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}