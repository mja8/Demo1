import React from 'react';

const Faculties = () => {
  const teachers = [
    { id: 1, name: 'MRS. SIRAT PARWEEN', designation: 'Principal' },
    { id: 2, name: 'MR. RAM CHANDRA THAKUR', designation: 'PGT' },
    { id: 3, name: 'MR. SHAYAM', designation: 'PGT' },
    { id: 4, name: 'MR. BASUKI NATH JHA', designation: 'PGT' },
    { id: 5, name: 'MR. RAJEEK SINGH', designation: 'PGT' },
    { id: 6, name: 'MR. SANJIV KUMAR CHOUDHARY', designation: 'PGT' },
    { id: 7, name: 'MR. GUFRAN KHAN', designation: 'PGT' },
    { id: 8, name: 'MR. MANOJ KUMAR CHOUDHARY', designation: 'PGT' },
    { id: 9, name: 'MR. ARUN KUMAR PATEL', designation: 'TGT' },
    { id: 10, name: 'MR. RAJESH KUMAR', designation: 'TGT' },
    { id: 11, name: 'MR. AMIT KUMAR PASWAN', designation: 'TGT' },
    { id: 12, name: 'MISS SONALI BASAK', designation: 'TGT' },
    { id: 13, name: 'MR. KUMAR GAURAV', designation: 'TGT' },
    { id: 14, name: 'MR. BIDYANATH PODDAR', designation: 'TGT' },
    { id: 15, name: 'MR. JAFAR HUSSAIN', designation: 'TGT' },
    { id: 16, name: 'MRS. MALAYA ROY', designation: 'TGT' },
    { id: 17, name: 'MR. AMIR HAMZA', designation: 'TGT' },
    { id: 18, name: 'MR. SYED MASUD ALAM', designation: 'TGT' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-blue-900 font-bold text-center mb-8">List of Teachers</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-green-500 text-black">
              <th className="border px-4 py-2 text-left">Sl.No.</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Designation</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr
                key={teacher.id}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                <td className="border px-4 py-2 text-black">{teacher.id}</td> {/* Text in black */}
                <td className="border px-4 py-2 text-black">{teacher.name}</td> {/* Text in black */}
                <td className="border px-4 py-2 text-black">{teacher.designation}</td> {/* Text in black */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Faculties;
