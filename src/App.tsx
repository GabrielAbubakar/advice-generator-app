import './App.css';
import IconDIce from '../public/images/icon-dice.svg'


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
                        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" /><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
                    </div>
                </div>
                <div className='button-container'>
                    <button className='random-button'>
                        <img src={IconDIce} alt="dice-icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App