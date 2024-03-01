import ReactCard from "./Components/Card"


function App() {

  const datas = [
    {
      cardName: "Free",
      price:"$0/Month",
      list5:"Unlimited Private Projects",
      list6:"Dedicated Phone Support",
      list7:"Free Subdomain",
      list8:"Monthly Status Reports",
    },
    {
      cardName: "Plus",
      price:"$9/Month",
      list5:"Unlimited Private Projects",
      list6:"Dedicated Phone Support",
      list7:"Free Subdomain",
      list8:"Monthly Status Reports",
    },
    {
      cardName: "Pro",
      price:"$49/Month",
      list5:"Unlimited Private Projects",
      list6:"Dedicated Phone Support",
      list7:"Free Subdomain",
      list8:"Monthly Status Reports",
    },
  ]

  const tick = "✓" ;
  const cross = "x";

  const free = datas[0].cardName === "Free" ? tick : cross;
  const plus = datas[1].cardName === "Plus" ? tick : cross;
  const pro = datas[2].cardName === "Pro" ? tick : cross;




  return ( 
        
        <div className="container mt-5 bg-primary"> 
          <div className="row">

              { datas.map((data, index)=>( 
              <div className="col-12 col-md-4 col-sm-6 px-5  d-flex justify-content-center" key={{}}>
                  <ReactCard key={index} 
                  cardName={data.cardName} 
                  price={data.price}
                  list5={data.list5}
                  list6={data.list6} 
                  list7={data.list7} 
                  list8={data.list8} />
              </div>     )) }

          </div>                                                              
        </div>
    )
}

export default App

