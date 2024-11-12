import ArrowDown from "../svg/ArrowDown";
import ArrowUp from "../svg/ArrowUp";
import { memo } from "react";

let status_diff; 

export default memo(function TestDifference({difference}){

    if(difference){
        difference = difference > 0 ? '+' + difference : difference;
        status_diff = difference > 0 ? 'status_more' : 'status_less'
    } else {
        status_diff = "status_none"
    }

    return(
        <div className={`status_difference center ${status_diff}`}>
            {difference > 0 ? <ArrowUp/> : ''}
            {difference < 0 ? <ArrowDown/>: ''}
            <span className="value" >{difference ?? 0}</span>
        </div>
    )
})