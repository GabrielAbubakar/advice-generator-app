import { useEffect, useState } from 'react';
import './App.css';
import IconDice from './images/icon-dice.svg'
import PatternDivider from './images/pattern-divider-desktop.svg'

// Interface declaration for the recieved data from fetch
type Data = {
    slip: {
        id: number,
        advice: string
    }
}


const App: React.FunctionComponent = () => {

    const [data, setData] = useState<Data>()

    const randomQuote = () => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        randomQuote()
        // console.log(data)
    }, [])





    return (
        <div className='container'>
            {
                data && (
                    <div className='advice-card'>
                        <div className='card-content'>
                            <p>Advice #{data.slip.id}</p>
                            <h1>
                                "{data.slip.advice}."
                            </h1>
                            <div className='section-divider'>
                                <img src={PatternDivider} alt="pattern-divider" />
                            </div>
                        </div>
                        <div className='button-container'>
                            <button className='random-button' onClick={randomQuote}>
                                <img src={IconDice} alt="dice-icon" />
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default App