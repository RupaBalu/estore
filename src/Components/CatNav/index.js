import { useSelector } from 'react-redux';
import './_cat-nav.scss';
import categorySlice from '../../Redux/Category/categorySlice'


export default function CatNav(){
    const category = useSelector(categorySlice.getInitialState);

    return (
        <div class="catnav-container">
            <ul>
              {category.map((item) => (
                <li><a href="#">{item}</a></li>
              ))}
            </ul>

        </div>
    )
}