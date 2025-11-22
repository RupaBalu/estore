import { useSelector } from 'react-redux';
import './_products.scss';
import productslice from '../../../Redux/Products/productsSlice';

const Products = () => {
    const productData = useSelector(productslice.getInitialState)
   return (
   <div className='product-wrapper'>
     {productData.map((product) => (
        <div className='product-container col-lg-3 col-md-6 m-3 p-1'>
            <div className='product-image'>
                <img src={require('../../../assets/images/shop/' + product.img)} />
            </div>
            <div className='product-details'>
                <h5><a href="#">{product.productName}</a></h5>
                <p>${product.productPrice}</p>
                <div class="product-rating">
                    <i className='fa fa-star' />
                    <i className='fa fa-star' />
                    <i className='fa fa-star' />
                    <i className='fa fa-star' />
                </div>
            </div>
        </div>
     ))}
   </div>
    
   )
   
    
}

export default Products;
