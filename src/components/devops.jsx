import React from "react";
import { CheckCircle } from "lucide-react";

const DevOpsServices = () => {
  const services = [
    "CI/CD Pipeline Implementation",
    "Infrastructure as Code (IaC) using Terraform/CloudFormation",
    "Kubernetes Cluster Management",
    "Containerization with Docker",
    "Cloud Infrastructure Setup (AWS, Azure, GCP)",
    "Monitoring & Alerting Systems (Prometheus, Grafana, ELK)",
    "Configuration Management (Ansible, Puppet, Chef)",
    "DevOps Consultation & Automation Strategy"
  ];

  return (
    <div className="p-6 md:p-10 lg:p-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 border-b-4 border-blue-500 pb-2 w-fit">
          DevOps Engineering Services
        </h1>
        <p className="text-gray-600 text-lg mb-10 border-l-4 border-blue-400 pl-4">
          Streamline development and operations with comprehensive DevOps services.
          Our team helps businesses automate, scale, and optimize their infrastructure and deployment
          pipelines to achieve continuous delivery and operational efficiency.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 hover:border-blue-400 transition-shadow shadow-md rounded-2xl p-5 flex items-start space-x-4 hover:shadow-xl"
            >
              <CheckCircle className="text-green-500 mt-1" />
              <span className="text-gray-700 font-medium">{service}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <span className="inline-block text-sm text-blue-700 border-2 border-blue-500 px-6 py-3 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors">
            Contact us to learn how our DevOps expertise can empower your operations.
          </span>
        </div>
      </div>
    </div>
  );
};

export default DevOpsServices;