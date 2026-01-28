export default function Services() {
  return (
    <section className="services bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-lg transition">
            <img src="/images/hk-limited-company.jpg" alt="HK Limited Company" className="mb-4 w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold mb-4">HK Limited Company</h3>
            <p className="text-gray-600">We provide comprehensive services for setting up and managing HK limited companies.</p>
          </div>
          {/* Service 2 */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-lg transition">
            <img src="/images/bvi-oversea-company.jpg" alt="BVI & Oversea Company" className="mb-4 w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold mb-4">BVI & Oversea Company</h3>
            <p className="text-gray-600">Establish and manage offshore companies in BVI and other jurisdictions.</p>
          </div>
          {/* Service 3 */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-lg transition">
            <img src="/images/company-secretary.jpg" alt="Company Secretary" className="mb-4 w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold mb-4">Company Secretary</h3>
            <p className="text-gray-600">Professional company secretary services to ensure compliance and smooth operations.</p>
          </div>
          {/* Service 4 */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-lg transition">
            <img src="/images/accounting-services.jpg" alt="Accounting Services" className="mb-4 w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold mb-4">Accounting Services</h3>
            <p className="text-gray-600">Comprehensive accounting services to manage your financial records effectively.</p>
          </div>
          {/* Service 5 */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-lg transition">
            <img src="/images/tax-consulting.jpg" alt="Tax Consulting" className="mb-4 w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold mb-4">Tax Consulting</h3>
            <p className="text-gray-600">Expert tax consulting services to optimize your tax strategy and compliance.</p>
          </div>
          {/* Service 6 */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-lg transition">
            <img src="/images/business-advisory.jpg" alt="Business Advisory" className="mb-4 w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-semibold mb-4">Business Advisory</h3>
            <p className="text-gray-600">Strategic business advisory services to help you achieve your goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
}