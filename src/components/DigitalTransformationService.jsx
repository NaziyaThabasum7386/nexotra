import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Laptop, Brain, Cpu, Network } from "lucide-react";

function DigitalTransformationService() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-yellow-600 hover:text-yellow-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Laptop className="w-12 h-12 text-yellow-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">
              Digital Transformation
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive digital transformation services to modernize your
              business and stay ahead in the digital age.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Brain className="w-8 h-8 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Digital Strategy</h3>
                <p className="text-gray-600">
                  Custom digital transformation roadmap. Technology adoption
                  strategy and planning.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Laptop className="w-8 h-8 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Process Digitization
                </h3>
                <p className="text-gray-600">
                  Convert manual processes to digital workflows. Implement
                  paperless solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Network className="w-8 h-8 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">IoT Integration</h3>
                <p className="text-gray-600">
                  Connect devices and systems seamlessly. Real-time monitoring
                  and control.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <Cpu className="w-8 h-8 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  AI & ML Solutions
                </h3>
                <p className="text-gray-600">
                  Intelligent automation and predictions. Machine learning model
                  implementation.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                Why Choose Our Digital Transformation?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Accelerated business growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Enhanced customer experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Improved operational efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Data-driven decision making</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalTransformationService;
