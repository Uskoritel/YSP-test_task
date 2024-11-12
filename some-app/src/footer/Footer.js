import { memo } from "react"

export default memo(function Footer(){
    return(
        <div className='column_desc'>
            <div className="column_name">
                  <div className='client_name'></div>
                  <div>Клиентская часть</div>
            </div>
            <div className="column_name">
                  <div className='server_name'></div>
                  <div>Серверная часть</div>
            </div>
            <div className="column_name">
                 <div className='database_name'></div>
                 <div>Базы данных</div>
            </div>
        </div>
    )
})