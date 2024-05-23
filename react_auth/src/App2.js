import './App.css';
import { createContext } from 'react';
import CompA from './components/CompA';

// create, provide, consume

// in case of useContext
// create, provide, useContext

const data = createContext()
const data1 = createContext()

const App2 = () => {

    const name = 'Haider Ali'
    const age = 24

  return (
    <>
        <data.Provider value={name}>
            <data1.Provider value={age}>
                <CompA/>
            </data1.Provider>
        </data.Provider>

    </>
  )
}

export default App2
export {data, data1}