import React, { useState } from 'react';
import Navbar from './Navbar';
import SideBarDr from './SideBarDr';

const show_drs = () => {
  const [click, setClicked] = useState(false);

  const Click = () => {
    console.log(click);
    setClicked(!click);
  };

  return (
    <>
      <Navbar click={Click} />
      <div className="flex flex-col h-[20vh]">
        <div id='sidebar' className="w-[100%] flex flex-row ">
          {click && <SideBarDr />}
        </div>
      </div>
    </>
  );
};

export default show_drs;
