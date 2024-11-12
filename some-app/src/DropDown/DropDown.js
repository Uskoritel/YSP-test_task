import { memo } from "react";
export default memo(function DropDown({onClick, children, setState}) {
    return(
        <>
            <div className="dropDown" onClick={onClick}>
                {children}
            </div>
            <div className="area" onClick={(e) => { e.stopPropagation(); setState(false)}}></div>
        </>
    )
})