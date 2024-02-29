import ReactCard from "./Components/Card"


function App() {
  
  const datas = [
    {
      cardName: "Free",
      price:"$0/Month"
    },
    {
      cardName: "Plus",
      price:"$9/Month"
    },
    {
      cardName: "Pro",
      price:"$49/Month"
    },
  ]

  return ( 
    <div className="container mt-5 px-4 py-2 bg-gradient">
        <div className="row ">
            <div className="col-12 d-flex justify-content-center bg-primary">
                {  datas.map((data, index)=>(
                <ReactCard key={index} cardName={data.cardName} price={data.price}
                />)) }
            </div>
        </div>
    </div>
    )
}

export default App
