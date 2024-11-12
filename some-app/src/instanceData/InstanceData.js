import Normative from '../normative/Normative'
import TestDifference from '../testDifference/TestDifference'
import React, { memo } from 'react';
import Component from '../component/Component'
import Instance from '../instance/Instance'


export default memo(function InstanceData({data}){
    
        const instance = ["dev", "test", "prod"];
        const component = ["front", "back", "db"];
  
        let instSumH = new Map().set('norm', data.norm);
        
        instance.map((inst, index) => {
           return instSumH.set(inst, (component.reduce((acum, elem, index) => { return acum += data[inst][elem]},0)))
        })
        
        const maximumInstHeight = 414;
        const instMaxH = Math.max(...instSumH.values());

        const getInstanceFullH = (instance) => Math.floor(maximumInstHeight * (instance / instMaxH));
           
        const getHeightLine = (currentInst) => {
            const again = getInstanceFullH(instSumH.get(currentInst))
            const diff = maximumInstHeight - again
            return diff       
        } 

        const getH = (name, param) => {
            const sum = instSumH.get(name);
            const maxH = getInstanceFullH(instSumH.get(name))
            if(sum === 0) return maximumInstHeight / 3
            const height = Math.floor(maxH * (param / sum));
            return height
        };
        
        const diffInst = (currentInst, index) => {
            if(index !== instance.length){
                return instSumH.get(instance[index]) - instSumH.get(currentInst) ;
            }
        }

        const getLine = (index) =>  {
            if(index !== instance.length - 1){
               return index === 1 ? true : false;
            }
        }

        return(
            <div className='instance_container'>
                {
                    instance.map((inst, indexInst) => {
                        return(
                            <React.Fragment key={indexInst}>
                                
                               <Instance name={inst} line={getLine(indexInst)} diffSize={getHeightLine(inst)} >
                        
                                     { 
                                       component.map((comp, indexComp) => <Component key={indexComp} comp={comp} count={data[inst][comp]} height={getH(inst, data[inst][comp])}/>)  
                                     }
            
                                </Instance>
                                {
                                    component.length - 1 === indexInst ? <Normative count={data.norm} height={getH("norm", data.norm)}/> : <TestDifference difference={diffInst(inst, indexInst + 1)}/>    
                                }
                            </React.Fragment>
                        )
                    })
                }
            </div>
        )
})