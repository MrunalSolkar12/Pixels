//import ViewImage from "./ViewImage";
import ViewImage2 from "./ViewImage2";
//import NextViewImage from "./NextViewImage";
export default function Page(){
    return(
        <>
            <ViewImage2/>
        </>
    )
};

export function generateMetadata(){
    return{
        title:"Pixels Image View",
        description:"Pixels ImageView"
    }
}