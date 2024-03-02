import "../App.css"

export default function ReactCard(props) {

    const conbg = { }
   

  return (    
    
    <div className="card my-5">

        {/* Card-Header */}
        <div className="card-header bg-white">
            <div className="cart-text d-flex justify-content-center text-secondary"> {props.cardName} </div>
            <div className="card-title d-flex justify-content-center"><h3>{props.price}</h3></div>
        </div>

        {/* card body */}
        <div className="card-body d-flex justify-content-center">
        <ul className="list-item p-2" style={conbg}>
            <li>✔︎ Single User</li>
            <li>✔︎ Storage</li>
            <li>✔︎ Unlimited Public Projects</li>
            <li>✔︎ Community Access</li>           

            <li>{props.list5a}</li>
            <li>{props.list6a}</li>
            <li>{props.list7a}</li>
            <li>{props.list8a}</li>
        
            
        </ul>
        </div> 

        {/* Card Footer  */}
        <div className="card-footed">
            <div className="col mb-3 d-flex justify-content-center">
                    <button className="btn btn-primary"  type="submit">Button</button>
            </div>
        </div>

    </div>

  )
}

                    