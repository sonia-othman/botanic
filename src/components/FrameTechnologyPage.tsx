import React from 'react';
import {useTranslations} from 'next-intl';
export default function FrameTechnologyPage() {

  return (
    <div className=" bg-white  px-8">
      <div className=" mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="bg-white p-12 lg:p-16 pb-0 flex flex-col justify-between min-h-[500px]">            
              <div className="space-y-8 w-full text-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  We build houses <br />
                  using frame technology
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
                  Sun built using frame technology are widespread throughout the world, some of which have served people for many centuries.
                </p>
              </div>

              <div className="relative -mb-12 lg:-mb-16">
                <img 
                  src="/image/sketch1.png" 
                  alt="" 
                  className="w-full max-w-max mx-auto object-contain"
                />
              </div>
            </div>
          </div>


            {/* Right - Feature Cards */}
            <div className="p-12 lg:p-16- flex flex-col justify-center space-y-6 bg-white">
              {/* Card 1  */}
              <div className="bg-gradient-to-br  from-black to-gray-800 text-white rounded-2xl p-6 flex gap-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur overflow-hidden">
                    <img 
                      src="/image/1.jpg" 
                      alt="" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">High strength</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Not susceptible to deformation cracks
                  </p>
                </div>
              </div>

              {/* Card 2  */}
              <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-2xl p-6 flex gap-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur overflow-hidden">
                    <img 
                      src="/image/2.jpg" 
                      alt="" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Thermal Insulation</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Heat up quickly and retain warmth for a long time
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-2xl p-6 flex gap-6 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur overflow-hidden">
                    <img 
                      src="/image/3.jpg" 
                      alt="" 
                      className="w-full h-full object-cover"
                  />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">No Shrinkage</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Can be finished immediately after installation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}