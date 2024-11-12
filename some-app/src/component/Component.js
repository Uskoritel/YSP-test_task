import { memo } from "react"

export default memo(function Component({count, height, comp}){
    return(
        <div className={`data_column ${comp}`} style={{'height': `${height}px`}}>
            <div>{count}</div>
        </div>
    )
})