import React from 'react';

const Stats = () => {
  const stats = [
    { label: 'Insurance Covered', value: '75+' },
    { label: 'Realized Projects', value: '2K' },
    { label: 'Happy Customers', value: '22K' },
    { label: 'Experience Doctors', value: '18+' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-5xl lg:text-6xl font-display font-black text-primary mb-2">{stat.value}</h3>
              <h4 className="text-lg font-bold text-dark-navy mb-2 uppercase tracking-widest">{stat.label}</h4>
              <div className="h-1 w-12 bg-secondary/30 mx-auto rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
