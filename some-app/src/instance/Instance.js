import { memo } from "react"
import LineLeft from "../svg/instanceLine/LineLeft";
import LineRight from "../svg/instanceLine/LineRight";


export default memo(function Instance({children, name, line = "left", diffSize}){

    let diff = 90;
    if(diffSize){
        diff += Math.abs(diffSize); 
    }

    return(
        <div className="wrap_column">
            <div style={{'display': 'flex', 'height': `${diff}px`, 'overflow': 'hidden', 'paddingTop': '13px', 'position': 'relative'}}>
                { line === false ? <LineRight/>  : ''  }
                { line === true ?
                            <>
                               <LineLeft coords={true}/>
                               <LineRight coords={true}/>
                            </>
                            : ''
                 } 
                { line === "left" ? <LineLeft/> :  '' }
                
            </div>

            <div className='test_data'>
                {children}
            </div>
             <div className="data_txt">{name}</div>
        </div>
    )


})