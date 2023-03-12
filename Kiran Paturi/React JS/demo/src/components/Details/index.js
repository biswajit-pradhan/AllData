const Details=()=>{

    const product=[{
        id:1,
        imageUrl:"https://m.media-amazon.com/images/I/61l9ppRIiqL._SX522_.jpg",
        name:"iphone",
        version:"14 pro",
        feature:{
            camera: "8M",
            memory: "128GB",
            processor: "appleprocessor"
        }
    },
    {
        id:2,
        imageUrl:"https://m.media-amazon.com/images/I/71AvQd3VzqL._SX569_.jpg",
        name:"oneplus",
        version:"note 9 pro max",
        feature:{
            camera: "64MP",
            memory: "128GB",
            processor: "snapdragon"
        }
    },
    {
        id:3,
        imageUrl:"https://m.media-amazon.com/images/I/61l9ppRIiqL._SX522_.jpg",
        name:"iphone",
        version:"14 pro",
        feature:{
            camera: "8M",
            memory: "128GB",
            processor: "appleprocessor"
        }
    },
    {
        id:4,
        imageUrl:"https://m.media-amazon.com/images/I/61l9ppRIiqL._SX522_.jpg",
        name:"iphone",
        version:"14 pro",
        feature:{
            camera: "8M",
            memory: "128GB",
            processor: "appleprocessor"
        }
    },
    {
        id:5,
        imageUrl:"https://m.media-amazon.com/images/I/61l9ppRIiqL._SX522_.jpg",
        name:"iphone",
        version:"14 pro",
        feature:{
            camera: "8M",
            memory: "128GB",
            processor: "appleprocessor"
        }
    },
    {
        id:1,
        imageUrl:"https://m.media-amazon.com/images/I/61l9ppRIiqL._SX522_.jpg",
        name:"iphone",
        version:"14 pro",
        feature:{
            camera: "8M",
            memory: "128GB",
            processor: "appleprocessor"
        }
    }]

    return (
        <table className="table">
            <tbody>
                {product.map((item)=>{
                    return (
                        <tr>
                             <div className="row">
                                <div className="col-sm-6">
                                    <div className="card">
                                    <div className="card-body">
                                        <div className="text-center">
                                        <h5 className="card-title">Picture</h5>
                                        <img src={item.imageUrl} className="rounded"/>                                            
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-title">ID:{item.id}</h6>
                                        <h6 className="card-title">Name:{item.name}</h6>
                                        <h6 className="card-title">Version:{item.version}</h6>
                                        <h6 className="card-title">Camera:{item.feature.camera}</h6>
                                        <h6 className="card-title">Memory:{item.feature.memory}</h6>
                                        <h6 className="card-title">Processor:{item.feature.processor}</h6>
                                        <hr/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );

}
export default Details;