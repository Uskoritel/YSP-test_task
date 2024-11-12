export default function LineLeft({coords}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="try" viewBox="0 0 1 100" fill="none">
              <defs>
              <marker
                    id="arrow"
                    viewBox="0 0 10 10"
                    refX="4"
                    refY="4.5"
                    markerWidth="16"
                    markerHeight="13"
                    orient="auto-start-reverse"
                    stroke="#898290"
                    >
                    <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" />
                    </marker>
                </defs>
            <line x1={coords ? '6' : '0'} y1="0.5" x2={coords ? '6' : '0'} y2="90%" stroke="#898290" strokeWidth="1" vectorEffect="non-scaling-stroke"  markerEnd="url(#arrow)" ></line>
            <line x1={coords ? '6' : '0'} y1="0.5" x2="-100" y2="0.5" stroke="#898290" strokeWidth="1" vectorEffect="non-scaling-stroke"></line>
       </svg>
    )
}