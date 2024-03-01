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
            <li><span></span> Single User</li>
            <li><span></span> 50GB Storage</li>
            <li><span></span> Unlimited Public Projects</li>
            <li><span></span> Community Access</li>

            <li><span></span>{props.list5}</li>
            <li><span></span>{props.list6}</li>
            <li><span></span>{props.list7}</li>

            <li><span></span>{props.list8}</li>
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

                    