import Sdata from "./Sdata";
import Card from './Card';

const You=()=>{
    return (
        <Card
                    imgLink={Sdata[0].imgLink}
                    title={Sdata[0].title}
                    text={Sdata[0].text}
                    link_text={Sdata[0].link_text}
                    link={Sdata[0].link}
                />
    )
}
export default You;