import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';

const DrHomepage = ({ patient, pData, Sugar, Bp, prescriptions }) => {
  const [view, setView] = useState(false);
  const { data, setData, post } = useForm({
    pid: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    post(route('doctor.searchPatient'));
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={submitHandler} className="mb-4 flex items-center justify-center">
        <input
          onChange={(e) => setData('pid', e.target.value)}
          type="number"
          value={data.pid}
          className="border-2 border-blue-500 rounded-l px-4 py-2 w-1/3 focus:outline-none"
          placeholder="Enter Patient ID"
        />
        <button
          type='submit'
          className="bg-blue-500 text-white px-8 py-2 rounded-r focus:outline-none"
        >
          Search
        </button>
      </form>

      <button
        onClick={() => { setView(!view) }}
        className="bg-green-500 text-white px-6 py-2 rounded mb-4 focus:outline-none"
      >
        {view ? 'Hide Details' : 'Show Details'}
      </button>

      {view &&
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow-md mb-4">
              <h2 className="text-2xl font-semibold mb-4">Patient Information</h2>
              <p className="text-gray-600 mb-2"><span className="font-semibold">ID:</span> {patient.id}</p>
              <p className="text-gray-600 mb-2"><span className="font-semibold">Name:</span> {patient.name}</p>
              <p className="text-gray-600 mb-2"><span className="font-semibold">Email:</span> {patient.email}</p>
            </div>

            {/* Render Sugar Data */}
            <div className="bg-white p-4 rounded shadow-md mb-4">
              <h2 className="text-2xl font-semibold mb-4">Sugar Data</h2>
              <table className="w-full">
                {/* Table Head */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Sugar Level</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {Sugar.map((sugarData) => (
                    <tr key={sugarData.id}>
                      <td>{sugarData.id}</td>
                      <td>{sugarData.sugar_level}</td>
                      <td>{sugarData.date}</td>
                      <td>{sugarData.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Render BP Data */}
            <div className="bg-white p-4 rounded shadow-md mb-4">
              <h2 className="text-2xl font-semibold mb-4">BP Data</h2>
              <table className="w-full">
                {/* Table Head */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Systolic</th>
                    <th>Diastolic</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {Bp.map((bpData) => (
                    <tr key={bpData.id}>
                      <td>{bpData.id}</td>
                      <td>{bpData.date}</td>
                      <td>{bpData.time}</td>
                      <td>{bpData.systolic}</td>
                      <td>{bpData.diastolic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Render Prescriptions */}
          <div className="bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-2xl font-semibold mb-4">Prescriptions</h2>
            <table className="w-full">
              {/* Table Head */}
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Medicine Name</th>
                  <th>Dose</th>
                  <th>Frequency</th>
                  <th>Done</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {prescriptions.map((prescription) => (
                  <tr key={prescription.id}>
                    <td>{prescription.id}</td>
                    <td>{prescription.medicine_name}</td>
                    <td>{prescription.dose}</td>
                    <td>{prescription.frequency}</td>
                    <td>{prescription.done ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      }
    </div>
  );
};

export default DrHomepage;
