import React from 'react';
import PageHeader from '../components/layout/PageHeader';

const GalleryPage = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800&h=600', title: 'Modern Equipment' },
    { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=600', title: 'Office Interior' },
    { url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800&h=600', title: 'Consultation Room' },
    { url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=600', title: 'Our Doctors' },
    { url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800&h=600', title: 'Treatment Success' },
    { url: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800&h=600', title: 'Dental Lab' },
    { url: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800&h=600', title: 'Patient Care' },
    { url: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800&h=600', title: 'Advanced Technology' },
  ];

  return (
    <main>
      <PageHeader title="Gallery" />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-[2.5rem] aspect-[4/3] shadow-lg border-4 border-light-bg">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center p-6 backdrop-blur-[2px]">
                  <h3 className="text-white text-xl font-black font-display uppercase tracking-widest">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <h2 className="section-title mb-12">Patient <span className="text-primary font-black">Transformations</span></h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {[1, 2].map(i => (
                <div key={i} className="flex flex-col gap-6 bg-light-bg p-8 rounded-[3rem] border border-slate-50 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-[2rem] overflow-hidden relative shadow-md">
                      <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400&h=300" alt="Before" className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-dark-navy text-white text-[8px] font-black px-3 py-1 rounded-lg tracking-widest uppercase shadow-lg">BEFORE</div>
                    </div>
                    <div className="rounded-[2rem] overflow-hidden relative shadow-md">
                      <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400&h=300" alt="After" className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-primary text-white text-[8px] font-black px-3 py-1 rounded-lg tracking-widest uppercase shadow-lg">AFTER</div>
                    </div>
                  </div>
                  <h4 className="font-black text-dark-navy uppercase tracking-widest text-sm">Cosmetic Success Case #{i}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
