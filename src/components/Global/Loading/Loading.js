import React from 'react';
import { useSelector } from 'react-redux';

const Loading = () => {

  const {isLoading} = useSelector((state) => state.loading);
  if (isLoading){
    return (
      <div className="fixed bg-gray-300 w-full h-full flex justify-center items-center z-10">
        <img src={require("../../../assets/Images/load.gif")} alt="" />
      </div>
    );
    
  }
  else{
    return "";
  }
};

export default Loading;