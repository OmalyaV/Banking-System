import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
//import api from '../apiConfig.js';
function Home() {
    useEffect(() => {
        axios.get("http://localhost:3002/user.routes.js").then((response) => {
          console.log(response.data);
        });
      }, []);
  return (
    <div>Home</div>
  )
}

export default Home