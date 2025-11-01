'use client';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Construction, LandPlot, Droplet, ArrowRight, Image, Flower2 , Droplets, Sprout, Leaf  } from 'lucide-react';

export default function Services() {
  const { t, i18n } = useTranslation();
  const paymentMethods = [
    {
      title: t('credit'),
      description: t('house'),
      icon: LandPlot,
      bgColor: "bg-accent",
      textColor: "text-green-900",
      iconColor: "text-primary"
    },
    {
      title: t('maternity'),
      description: t('if'),
      icon: Leaf,
      bgColor: "bg-green-900",
      textColor: "text-white",
      iconColor: "text-accent"
    },
    {
      title: t('subsidies'),
      description: t('subsidiesgv'),
      icon: Construction,
      bgColor: "bg-accent",
      textColor: "text-green-900",
      iconColor: "text-primary"
    },
    {
      title: t('cashless'),
      description: t('cashlesspayment'),
      icon: Droplet,
      bgColor: "bg-green-900",
      textColor: "text-white",
      iconColor: "text-accent"
    },
    {
      title: t('irrigation'),
      description: t('irrigationdesc'),
      icon: Droplets,
      bgColor: "bg-green-900",
      textColor: "text-white",
      iconColor: "text-accent"
    },
   
    {
      title: t('nursery'),
      description: t('nurserydesc'),
      icon: Flower2 ,
      bgColor: "bg-accent",
      textColor: "text-green-900",
      iconColor: "text-primary"
    },
    {
      title: t('greenroof'),
      description: t('greenroofdesc'),
      icon: Sprout ,
      bgColor: "bg-green-900",
      textColor: "text-white",
      iconColor: "text-accent"
    }
    
  ];


  return (
    <div className="bg-white rounded-4xl py-20">
      <div className="container mx-auto px-6 lg:px-8 ">
        {/* service */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            {t('offer')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
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

                <div className={`absolute bottom-6 right-6  ${method.iconColor} w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <ArrowRight size={20} />
                </div>

                <div className="absolute top-6 right-6 opacity-10">
                  <method.icon size={80} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

       
      </div>
    </div>
  );
}