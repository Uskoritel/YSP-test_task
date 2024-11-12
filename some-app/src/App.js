import './App.css';
import { useEffect, useState } from 'react'
import LoadData from './api/LoadData';
import DropDownBtn from './svg/DropDownBtn';
import DropDown from './DropDown/DropDown';
import useFetch from './hooks/useFetch';
import InstanceData from './instanceData/InstanceData'
import Footer from './footer/Footer';

const system = [
                {
                    name: 'OS Doors',
                    value: 1
                },
                {
                    name: 'OS Bombuntu',
                    value: 2
                },
                {
                    name: 'Mibre Office',
                    value: 3
                },
                {
                    name: 'LoWtEx',
                    value: 4
                },
                {
                    name: 'W$ POS',
                    value: 5
                },
              ]



function App() {

  const [data, setData] = useState({});
  const [paramSystem, setParam] = useState(1);
  const [activeDrop, setActiveDrop] = useState(false);
  const [load, fetchData] = useFetch( async () => {
      const response = await LoadData(paramSystem);
      setData(response);
  });

  useEffect(() => {

    fetchData(paramSystem);

  },[paramSystem])


  if(!load){
    return (
      <div className="App">
          <div className='container'>
              <div className='head_title_conf'>
                <div>Количество пройденных тестов "{data.title}"</div>  
                <div className='open_dropdown_btn' onClick={() => setActiveDrop(true)}>
                  <DropDownBtn/>
                  { activeDrop && 
                    <DropDown onClick={(e) => { e.stopPropagation(); setParam(e.target.dataset.value); setActiveDrop(false)}} setState={setActiveDrop}>
                        {
                          system.map( (el, index) => {
                            return(
                              <div key={index} data-value={el.value}>{el.name}</div>
                            )
                          })
                        }
                    </DropDown>
                  }
                </div>
              </div>
             <InstanceData data={data}/>
             <Footer/>
          </div>
      </div>
    );
  }
}

export default App;
