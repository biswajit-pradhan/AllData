const Footer=(props)=>{
    return (
        <div className="container">
            <hr/>
            <div className="row">
                <div className="col">
                    About Us
                </div>
                <div className="col">
                    Our Team
                </div>
                <div className="col">
                    Contact Us
                </div>
                <div className="col">
                    <a href="#">{props.email}</a>
                </div>
            </div>
        </div>
    )
}
export default Footer;