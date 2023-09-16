import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
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