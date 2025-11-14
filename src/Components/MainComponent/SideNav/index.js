import './_side-nav.scss';

export default function SideNav(){
    return (
        <div className="side-ctr">
            <div className="section-title">
                <h3>Category</h3>
            </div>
            <div className='accordion'>
                <div className='accordion-item individual-category'>
                    <div className='accordion-header'>
                        <button className='accordion-button' data-bs-target="#accordion-heading-one" data-bs-toggle="collapse">
                            <div className='category-title'>
                                <a href="#">Men</a>
                            </div>
                        </button>
                    </div>
                    <div className='accordion-collapse collapse-show' id="accordion-heading-one">
                        <div className='accordion-body'>
                            <ul>
                                <li><div><a href="#">Shirts</a></div></li>
                                <li><div><a href="#">Pants</a></div></li>
                                <li><div><a href="#">Party wear</a></div></li>
                                <li><div><a href="#">Coats</a></div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}