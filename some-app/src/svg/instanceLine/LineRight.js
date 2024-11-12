export default function LineRight({coords}){
    
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="try" viewBox="0 0 1 62" fill="none">
            <line x1={coords ? '-6' : '0'} y1="56.5" x2={coords ? '-6' : '0'} y2="0.5" stroke="#898290" strokeLinecap="round" strokeWidth="1" vectorEffect="non-scaling-stroke"></line>
            <line x1={coords ? '-6' : '0'} y1="0.5" x2="100" y2="0.5" stroke="#898290" strokeLinecap="round" strokeWidth="1" vectorEffect="non-scaling-stroke "></line>
         </svg>
    )
}