import React from 'react';


const images = [
    'https://via.placeholder.com/400x400',
    'https://via.placeholder.com/300x500',
    'https://via.placeholder.com/400x300',
    'https://via.placeholder.com/500x500',
    'https://via.placeholder.com/300x400',
    'https://via.placeholder.com/400x400',
    'https://via.placeholder.com/300x200',
    'https://via.placeholder.com/500x300',
    'https://via.placeholder.com/400x200',
  ];

  const companies = [
    { name: 'Wipro', logo: 'https://via.placeholder.com/150' }, 
    { name: 'Philips', logo: 'https://via.placeholder.com/150' },
    { name: 'Mindtree', logo: 'https://via.placeholder.com/150' },
    { name: 'IBM', logo: 'https://via.placeholder.com/150' },
    { name: 'Infosys', logo: 'https://via.placeholder.com/150' },
    { name: 'EMC', logo: 'https://via.placeholder.com/150' },
    { name: 'TCS', logo: 'https://via.placeholder.com/150' },
    { name: 'Cognizant', logo: 'https://via.placeholder.com/150' },
    { name: 'Cognizant', logo: 'https://via.placeholder.com/150' },
    { name: 'Wipro', logo: 'https://via.placeholder.com/150' }, 
    { name: 'Philips', logo: 'https://via.placeholder.com/150' },
    { name: 'Mindtree', logo: 'https://via.placeholder.com/150' },
    { name: 'IBM', logo: 'https://via.placeholder.com/150' },
    { name: 'Infosys', logo: 'https://via.placeholder.com/150' },
    { name: 'EMC', logo: 'https://via.placeholder.com/150' },
    { name: 'IBM', logo: 'https://via.placeholder.com/150' },
    { name: 'Infosys', logo: 'https://via.placeholder.com/150' },
    { name: 'EMC', logo: 'https://via.placeholder.com/150' },
    // Add more company logos here
  ];

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Half-Screen Header Section */}
      <header className="bg-gradient-to-r from-teal-500 to-green-600 text-white h-[50vh] flex flex-col justify-center items-center text-center px-4">
        <div>
          <h1 className="text-5xl font-extrabold mb-4">Welcome to BMSIT Placement Portal</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Empowering students for a brighter future through innovative education and career opportunities.
          </p>
        </div>
      </header>

      {/* Image Grid */}
      <section className="py-12">
      <div className="container mx-auto grid grid-cols-12 grid-rows-6 gap-2 h-[100vh]">
        {/* Grid layout based on the provided image */}
        <div className="col-span-3 row-span-3">
          <img
            src={images[0]}
            alt="Image 1"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-3 row-span-2">
          <img
            src={images[1]}
            alt="Image 2"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-6 row-span-3">
          <img
            src={images[2]}
            alt="Image 3"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-3 row-span-4">
          <img
            src={images[3]}
            alt="Image 4"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-3 row-span-1">
          <img
            src={images[4]}
            alt="Image 5"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-2 row-span-2">
          <img
            src={images[5]}
            alt="Image 6"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-3 row-span-2">
          <img
            src={images[6]}
            alt="Image 7"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-3 row-span-2">
          <img
            src={images[7]}
            alt="Image 8"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-2 row-span-1">
          <img
            src={images[8]}
            alt="Image 9"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

      {/* About Section */}
      <section className="container mx-auto py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">About BMSIT</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            BMS Institute of Technology and Management (BMSIT&M) is one of the top engineering colleges in India,
            known for its academic excellence and state-of-the-art infrastructure. Our mission is to provide a
            nurturing environment where students can excel in their studies and develop the skills necessary for
            a successful career.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Vision</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            To be a center of excellence in education and research, producing globally competent engineers who
            contribute to society through innovation, leadership, and service.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <ul className="text-gray-700 max-w-3xl mx-auto space-y-4 list-disc list-inside">
            <li>To provide quality education and training in the field of engineering and technology.</li>
            <li>To foster innovation, research, and development to address societal challenges.</li>
            <li>To cultivate leadership qualities and encourage entrepreneurial initiatives among students.</li>
            <li>To promote ethical and professional responsibility in all our endeavors.</li>
          </ul>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Recruiters</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {companies.map((company, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center">
              <img src={company.logo} alt={company.name} className="max-h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="bg-teal-600 text-white p-4 text-center">
        <p>&copy; 2024 BMS Institute of Technology and Management - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
