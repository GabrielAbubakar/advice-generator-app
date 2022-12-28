import './App.css';
import IconDice from '../public/images/icon-dice.svg'
import PatternDivider from '../public/images/pattern-divider-desktop.svg'


const App: React.FunctionComponent = () => {
    return (
        <div className='container'>
            <div className='advice-card'>
                <div className='card-content'>
                    <p>Advice #117</p>
                    <h1>
                        "It is easy to sit up and take notice, what's difficult is getting up and taking action."
                    </h1>
                    <div className='section-divider'>
                        <img src={PatternDivider} alt="pattern-divider" />
                    </div>
                </div>
                <div className='button-container'>
                    <button className='random-button'>
                        <img src={IconDice} alt="dice-icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App