import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Database, Cog, BarChart, RefreshCw } from "lucide-react";

function EnterpriseService() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-green-600 hover:text-green-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Database className="w-12 h-12 text-green-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">
              Enterprise Solutions
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Custom enterprise-grade solutions that streamline your business
              operations and drive digital transformation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Cog className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">ERP Integration</h3>
                <p className="text-gray-600">
                  Seamless integration of enterprise resource planning systems.
                  Optimize business processes and workflows.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <RefreshCw className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Process Automation
                </h3>
                <p className="text-gray-600">
                  Automate repetitive tasks and workflows. Increase efficiency
                  and reduce human error.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <BarChart className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Analytics & BI</h3>
                <p className="text-gray-600">
                  Data-driven insights and business intelligence. Real-time
                  reporting and analytics dashboards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Database className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Legacy Modernization
                </h3>
                <p className="text-gray-600">
                  Update and modernize legacy systems. Ensure compatibility with
                  modern technologies.
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                Benefits of Our Enterprise Solutions
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Improved operational efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Better data management and analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Reduced operational costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Enhanced business agility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterpriseService;
