import Link from 'next/link';
import { ArrowRight, Smartphone, LineChart, QrCode, FileSpreadsheet } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Plott
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Transform your property listings into interactive 3D experiences
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/view/demo-unit-1"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              View Demo 3D Tour
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl shadow-lg border-2 border-gray-200 transition-all">
              Start Free Trial
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3D Virtual Tours</h3>
              <p className="text-sm text-gray-600">
                Interactive walkthroughs with checkpoint navigation
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <LineChart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Lead Tracking CRM</h3>
              <p className="text-sm text-gray-600">
                Track engagement, time spent, and client activity
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <QrCode className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">QR Codes & Links</h3>
              <p className="text-sm text-gray-600">
                Shareable links for social media and print materials
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <FileSpreadsheet className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Auto Computation</h3>
              <p className="text-sm text-gray-600">
                Generate payment estimates and capture qualified leads
              </p>
            </div>
          </div>

          {/* Pricing Preview */}
          <div className="mt-16 p-8 bg-white rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-5xl font-bold text-blue-600">₱1,499</span>
              <span className="text-xl text-gray-600">/month</span>
            </div>
            <p className="text-gray-600 mb-6">
              Pro Plan: 3 active units • Unlimited shares • Full CRM • QR codes • Analytics
            </p>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Start 7-Day Free Trial
            </button>
          </div>

          {/* Footer */}
          <div className="mt-16 text-sm text-gray-500">
            <p>Made for Philippine real estate agents 🇵🇭</p>
            <p className="mt-2">
              <Link href="/privacy-policy" className="hover:text-blue-600 underline">
                Privacy Policy
              </Link>
              {' • '}
              <Link href="/scanning" className="hover:text-blue-600 underline">
                3D Scanning Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
