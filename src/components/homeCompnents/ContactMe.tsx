import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function ContactMe() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-10 bg-black text-white">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Reach out for collaborations, freelance projects, or just to say hi!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: faPhone,
              label: 'Phone',
              value: '+234 903 129 0387',
              bg: 'bg-green-500/10',
              iconColor: 'text-green-400',
            },
            {
              icon: faEnvelope,
              label: 'Email',
              value: 'emmanuelfrancismicah@gmail.com',
              bg: 'bg-blue-500/10',
              iconColor: 'text-blue-400',
            },
            {
              icon: faLocationDot,
              label: 'Location',
              value: 'worlwide',
              bg: 'bg-purple-500/10',
              iconColor: 'text-purple-400',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-[24px] p-4 items-center bg-[#111111] backdrop-blur-[36px] shadow-[inset_0px_0px_20px_0px_rgba(103,103,103,0.25)] hover:shadow-[inset_0px_0px_30px_0px_rgba(103,103,103,0.4)] transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <div className={`w-12 h-12 rounded-full flex justify-center items-center grow-0 shrink-0 ${item.bg}`}>
                  <FontAwesomeIcon icon={item.icon} className={`${item.iconColor} text-xl`} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{item.label}</h4>
                  <p className="text-sm text-gray-300 mt-1 break-words break-all w-[100%]">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
