import React, {useContext} from 'react'
import {data, data1} from '../App2.js'


const CompD = () => {

  const name = useContext(data)
  const age = useContext(data1)

  return (
    <>

      <h3>Name: {name}, Age:{age}</h3>
      {/* <data.Consumer>

        {
          (name) => {
            return(
              <data1.Consumer>
                {
                  (age) => {
                    return(
                      <h3>Name: {name} age:{age}</h3>
                    )
                  }
                }
              </data1.Consumer>
            )
          }
        }

      </data.Consumer> */}

    </>
  )
}

export default CompD