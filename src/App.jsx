import Hero from "./component/Hero"
// import Demo from "./Demo"

function App() {
  const ItemObj={
    name: "Vite",
    version: "3.2.0",
    size: "2.5 MB",
  }

  const BtnClick = () => {
    alert("Hello");
  }
  return (
    <>
      {/* <Demo /> */}
      <Hero title="Learn React With Vite" des="How to pass props" 
      item={ItemObj} 
      ChildBtnClick={BtnClick}/>
    </>
  )
}

export default App