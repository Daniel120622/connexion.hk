import React from 'react';

export default function LocalImmigrationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Local Immigration</h1>
        </div>
      </header>

    <main className="container mx-auto px-4 py-10">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Local
        </h2>
        <p className="text-gray-700 mb-6">
          We specialize in providing comprehensive local immigration services to help individuals and families navigate the complexities of the immigration process.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Visa Application Assistance: Guidance and support for various types of visas.</li>
          <li>Residency Permits: Assistance with obtaining and renewing residency permits.</li>
          <li>Legal Consultation: Expert advice on immigration law and regulations.</li>
        </ul>
      </section>
    </main>
    
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 Connexions HK. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}