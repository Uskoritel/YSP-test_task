import { memo } from "react"
export default memo(function Normative({count, height}){

    return(
        <div className="wrap_column">
            <div className="normative" style={{'height': `${height}px`}}> 
                <div className="normative_body">{count}</div>
            </div>
            <div className="data_txt">Норматив</div>
      </div>
    )
})