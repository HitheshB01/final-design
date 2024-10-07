import React from 'react'

const JobPortal = () => {
  return (
    <div>
      <div className="h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white p-6 border-r border-gray-300">
        {/* Logo */}
        <div className="mb-6">
          <img
            src="path-to-logo" // Replace with logo path
            alt="TAGES Logo"
            className="h-10 mx-auto"
          />
        </div>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search Jobs"
          className="w-full mb-6 p-2 border border-gray-300 rounded-md"
        />

        {/* Status Section */}
        <div className="mb-6">
          <h3 className="font-semibold mb-4">Status</h3>
          <ul>
            <li className="text-gray-600 mb-2 cursor-pointer">Active</li>
            <li className="text-gray-600 mb-2 cursor-pointer">Archived</li>
            <li className="text-gray-600 cursor-pointer">Closed</li>
          </ul>
        </div>

        {/* Job Listings */}
        <div>
          <h3 className="font-semibold mb-4">Posted Jobs</h3>
          <ul className="space-y-4">
            <li className="cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Analyst</p>
                  <p className="text-gray-500 text-sm">TCS | Experienced</p>
                </div>
                <span className="text-red-500">Archived</span>
              </div>
            </li>
            {/* Add more jobs similarly */}
          </ul>
        </div>
      </aside>

      {/* Job Details Section */}
      <main className="w-3/5 p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Open Source Analyst</h1>
              <p className="text-gray-600">Redhat | Bangalore East, Karnataka</p>
              <p className="text-gray-600">Posted 1 month ago | Job ID: 637454345</p>
            </div>
            <button className="text-white bg-red-500 px-4 py-2 rounded-md">
              Archive Job
            </button>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex space-x-4 mb-8">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md">
            On Site
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">3-5 Yrs Experience</button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">12 Applicants</button>
        </div>

        {/* Job Description, Responsibilities, Qualifications, and Skills */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="font-semibold text-lg mb-4">Job Description</h2>
            <p className="text-gray-600">
              Uber is seeking a Cloud Analyst to join our dynamic team...
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-4">Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Oversee deployment, maintenance, and operation of cloud infrastructure.</li>
              <li>Ensure high availability and reliability of cloud services.</li>
              {/* Add more responsibilities */}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-4">Qualifications</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Bachelor's degree in Computer Science or related field.</li>
              <li>Proficiency in AWS, Azure, or Google Cloud.</li>
              {/* Add more qualifications */}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-4">Skills</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Experience in Agile software engineering teams.</li>
              <li>Proficient in JavaScript, TypeScript, and cloud security tools.</li>
              {/* Add more skills */}
            </ul>
          </div>
        </div>
      </main>

      {/* Placeholder for right section */}
      <aside className="w-1/5 p-6 bg-gray-50">
        {/* Any additional content or placeholder */}
      </aside>
    </div>

    </div>
  )
}

export default JobPortal
