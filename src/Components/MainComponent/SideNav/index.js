import { useSelector } from 'react-redux';
import './_side-nav.scss';
import accordionSlice from '../../../Redux/Accordion/accordionSlice';

export default function SideNav(){
    
    const accordionData = useSelector(accordionSlice.getInitialState);
    return (
        <div className="side-ctr">
            <div className="section-title">
                <h3>Category</h3>
            </div>
            <div className='accordion'>
               {accordionData.map((accordion, index) => (
                 <div className='accordion-item individual-category'>
                    <div className='accordion-header'>
                        <button className='accordion-button' data-bs-target={"#collapse"+index} data-bs-toggle="collapse">
                            <div className='category-title'>
                                <a href="#">{accordion.category}</a>
                            </div>
                        </button>
                    </div>
                    <div className='accordion-collapse collapse-show' id={"collapse"+index}>
                        <div className='accordion-body'>
                            <ul>
                                {accordion.items.map((item) => (
                                    <li><div><a href="#">{item}</a></div></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
               ))}
            </div>
        </div>
    )
}