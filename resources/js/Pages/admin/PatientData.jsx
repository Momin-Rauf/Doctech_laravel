import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

const PatientData = (props) => {
    const { post } = useForm();
    const save = (e) => {
        e.preventDefault();  //
        props.bioData({
          id: e.target.id.value,
          age: e.target.age.value,
          phone: e.target.phone.value,
          cnic: e.target.cnic.value,
          sex: e.target.sex.value,
          marriedstatus: e.target.marriedstatus.value,
          DOB: e.target.DOB.value,
          registrationDate: e.target.registrationDate.value,
          bloodgroup: e.target.bloodgroup.value,
          address: e.target.address.value,
          history: e.target.history.value,
        });
      
        const formData = new FormData(e.target);
        console.log(e.target);
      
        post(route('admin.store'), formData);
      };
      

  return (
    <form onSubmit={save}>
      <label htmlFor="id">ID:</label>
      <input name="id" type="number" defaultValue={props.data.id} />

      <label htmlFor="age">Age:</label>
      <input name="age" type="number" defaultValue={props.data.age} />

      <label htmlFor="phone">Phone:</label>
      <input name="phone" type="number" defaultValue={props.data.phone} />

      <label htmlFor="cnic">CNIC:</label>
      <input name="cnic" type="number" defaultValue={props.data.cnic} />

      <label htmlFor="sex">Sex:</label>
      <input name="sex" type="text" defaultValue={props.data.sex} />

      <label htmlFor="marriedstatus">Marriage Status:</label>
      <input name="marriedstatus" type="text" defaultValue={props.data.marriedstatus} />

      <label htmlFor="DOB">DOB:</label>
      <input name="DOB" type="date" defaultValue={props.data.DOB} />

      <label htmlFor="registrationDate">Registration Date:</label>
      <input name="registrationDate" type="date" defaultValue={props.data.registrationDate} />

      <label htmlFor="bloodgroup">Blood group:</label>
      <input name="bloodgroup" type="text" defaultValue={props.data.bloodgroup} />

      <label htmlFor="address">Address:</label>
      <textarea name="address" cols="30" rows="10" defaultValue={props.data.address}></textarea>

      <label htmlFor="history">History:</label>
      <textarea name="history" cols="30" rows="10" defaultValue={props.data.history}></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default PatientData;
