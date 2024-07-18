import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Inertia } from '@inertiajs/inertia';
import { Button } from "@/components/ui/button"

const Show_patients = ({ patientsdata, userdata }) => {
  const getUserName = (userId) => {
    const user = userdata.find(user => user.id === userId);
    return user ? user.name : 'Unknown';
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this patient?')) {
      Inertia.delete(`/admin/patient/${id}`, {
        onSuccess: () => {
          alert('Patient deleted successfully');
        }
      });
    }
  };

  return (
    <Table>
      <TableCaption>A list of patients.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Phone No</TableHead>
          <TableHead>CNIC</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Blood Group</TableHead>
          <TableHead>Sex</TableHead>
          <TableHead>Marital Status</TableHead>
          <TableHead>DOB</TableHead>
          <TableHead>Registration Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {patientsdata.map((patient) => (
          <TableRow key={patient.id}>
            <TableCell className="font-medium">{patient.id}</TableCell>
            <TableCell>{getUserName(patient.user_id)}</TableCell>
            <TableCell>{patient.address}</TableCell>
            <TableCell>{patient.phone_no}</TableCell>
            <TableCell>{patient.cnic}</TableCell>
            <TableCell>{patient.age}</TableCell>
            <TableCell>{patient.blood_group}</TableCell>
            <TableCell>{patient.sex}</TableCell>
            <TableCell>{patient.married_status}</TableCell>
            <TableCell>{patient.DOB}</TableCell>
            <TableCell>{patient.registration_date}</TableCell>
            <TableCell>
              <Button variant="danger" onClick={() => handleDelete(patient.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={12}>Total Patients: {patientsdata.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default Show_patients;
