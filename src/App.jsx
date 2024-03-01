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
        
        <div className="container mt-5 bg-primary"> 
          <div className="row">
            
                {  datas.map((data, index)=>( 
                <div className="col-12 col-md-4 col-sm-6 px-5  d-flex justify-content-center" key={{}}>
                  {/* Resposive View */}
                    <ReactCard key={index} cardName={data.cardName} price={data.price} />
                </div>
                  )) }
            
          </div>                                                              
        </div>
    )
}

export default App

