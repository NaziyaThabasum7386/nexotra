import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Clock, Users, Code2 } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: <Code2 className="text-blue-400" size={24} />,
      title: "Custom Development",
      description: "Tailored solutions built with cutting-edge technologies"
    },
    {
      icon: <Users className="text-green-400" size={24} />,
      title: "Team Augmentation",
      description: "Skilled developers to strengthen your existing team"
    },
    {
      icon: <Clock className="text-purple-400" size={24} />,
      title: "24/7 Support",
      description: "Round-the-clock maintenance and technical support"
    }
  ];

  return (
    <div id="contact" className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Our team of expert developers is here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-400" size={24} />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400">Support@nexotra.com</p>
              </div>
            </div>
            {/* <div className="flex items-center space-x-4">
              <Phone className="text-blue-400" size={24} />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-400" size={24} />
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-400">Silicon Valley, CA</p>
              </div>
            </div> 
            
             <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
            <div>
              <select className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-gray-400">
                <option value="">Select Service</option>
                <option value="custom">Custom Development</option>
                <option value="team">Team Augmentation</option>
                <option value="support">Technical Support</option>
              </select>
            </div>
            <div>
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Let's Discuss Your Project
            </button>
          </motion.form>
            
            */}
          </motion.div>

         
        </div>
      </motion.div>
    </div>
  );
}