import ReactCard from "./Components/Card"


function App() {

  const datas = [
    {
      cardName: "Free",
      price:"$0/month",

      list1a:"✔︎ Single User",
      list5a:"✘ Unlimited Private Projects ",
      list6a:"✘ Dedicated Phone Support ",
      list7a:"✘ Free Subdomain ",
      list8a:"✘ Monthly status reports ",
    },
    {
      cardName: "Plus",
      price:"$9/month",

      list1a:"✔︎ 5 Users",
      list5a:"✔︎ Unlimited Private Projects ",
      list6a:"✔︎ Dedicated Phone Support ",
      list7a:"✔︎ Free Subdomain ",
      list8a:"✘ Monthly status reports ",

      
    },
    {
      cardName: "Pro",
      price:"$49/month",

      list1a:"✔︎ Unlimited Users",
      list5a:"✔︎ Unlimited Private Projects ",
      list6a:"✔︎ Dedicated Phone Support ",
      list7a:"✔︎ Free Subdomain ",
      list8a:"✔︎ Monthly status reports ",
      
      
    },
  ]

  //  const tick = "✔︎" ;
  //  const cross = "✘";

  // const free = {props.cardName}  === {props.list5} ? "✔︎" : "✘";
  // const plus = datas[1].cardName === datas[1].list5 ? "✔︎" : "✘";
  // const  pro = datas[2].cardName === datas[2].list5 ? "✔︎" : "✘";


  return ( 
    
        <div className="container mt-5 bg-primary"> 
          
          <div className="row">

              { datas.map((data, index)=>( 
              <div className="col-12 col-md-4 col-sm-6 px-5  d-flex justify-content-center" key={{}}>
                  <ReactCard key={index} 
                      cardName={data.cardName} 
                      price={data.price}
                      list1a={data.list1a}
                      list5a={data.list5a}
                      list6a={data.list6a}
                      list7a={data.list7a}
                      list8a={data.list8a}
                                      
                                         />
              </div>     )) }

          </div>                                                              
        </div>
      
    )
}

export default App

