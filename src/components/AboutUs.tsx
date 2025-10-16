'use client';
import { motion } from 'framer-motion';
import { CreditCard, Home, Banknote, DollarSign, ArrowRight } from 'lucide-react';

export default function AboutUs() {
  const paymentMethods = [
    {
      title: "House on credit",
      description: "We partner with several of Kurdistan's largest banks, which offer loans at rates starting from 5.5% per annum.",
      icon: Home,
      bgColor: "bg-gray-100",
      textColor: "text-gray-900",
      iconBg: "bg-gray-900",
      iconColor: "text-white"
    },
    {
      title: "Maternity Capital",
      description: "If you have received maternity capital from the state, you can use it to purchase a home",
      icon: Banknote,
      bgColor: "bg-gray-900",
      textColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-gray-900"
    },
    {
      title: "Subsidies",
      description: "We work with government subsidies. For favorable information, call our managers",
      icon: CreditCard,
      bgColor: "bg-gray-100",
      textColor: "text-gray-900",
      iconBg: "bg-gray-900",
      iconColor: "text-white"
    },
    {
      title: "Cashless Payment",
      description: "You can conclude a contract with the company and pay for work through cashless payments",
      icon: DollarSign,
      bgColor: "bg-gray-900",
      textColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-gray-900"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Consultation",
      subtitle: "and Design",
      description: "Discuss your wishes and requirements for the house, determine the budget, and receive"
    },
    {
      number: "02",
      title: "Construction",
      subtitle: "",
      description: "The team of specialists will carry out the construction of the frame house taking into account"
    },
    {
      number: "03",
      title: "Completion",
      subtitle: "and Finishing",
      description: "Complete all interior and exterior finishing work, conduct final inspections, and hand over the keys."
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Payment Methods Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            We offer payment methods
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${method.bgColor} ${method.textColor} rounded-3xl p-8 relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 min-h-[64px]">
                    {method.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-8 opacity-80">
                    {method.description}
                  </p>
                </div>

                <div className={`absolute bottom-6 right-6 ${method.iconBg} ${method.iconColor} w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <ArrowRight size={20} />
                </div>

                <div className="absolute top-6 right-6 opacity-10">
                  <method.icon size={80} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Steps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
                Three steps to a new home
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="relative">
                  <span className="text-[120px] font-bold text-gray-100 absolute -top-8 -left-4 select-none">
                    {step.number}
                  </span>
                  
                  <div className="relative z-10 pt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    {step.subtitle && (
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.subtitle}
                      </h4>
                    )}
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gray-200">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}