import './FirstSection.css'
import BuySellFilter from './BuySellFilter';

const Firstsection = () => {
    return (
        <div className="flex-container">

            <div className="left-side">
             <BuySellFilter/>
            </div>
            <div className="right-side">Right side</div>
        </div>
    )
}

export default Firstsection
