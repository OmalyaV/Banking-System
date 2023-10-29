import './App.css';
function App() {
<<<<<<< Updated upstream

  return (<div className="App"> </div>);
=======
  return (
    <div className="App">
      <AuthContextProvider>
        {/* <Account/> */}
        <Welcome/>
      </AuthContextProvider>
    </div>
  )
>>>>>>> Stashed changes
}

export default App;
