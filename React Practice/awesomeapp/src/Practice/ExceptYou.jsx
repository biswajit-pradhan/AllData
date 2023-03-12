import Card from "./Card";
import Sdata from './Sdata';


const ExceptYou=()=>{
    return <>
        {
                Sdata.map((Sdata,index) => (
                    <Card
                        key={index}
                        imgLink={Sdata.imgLink}
                        title={Sdata.title}
                        text={Sdata.text}
                        link_text={Sdata.link_text}
                        link={Sdata.link}
                    />
                ))
            }
    </>
}
export default ExceptYou;