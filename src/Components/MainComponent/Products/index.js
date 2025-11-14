import './_products.scss';
import img1 from '../../../assets/images/shop/img1.jpg';

const Products = () => {
    const productData = [
        {
            productName: 'Jacket',
            productPrice: 100,
            img: img1
        },
         {
            productName: 'Jacket',
            productPrice: 100,
            img: img1
        },
         {
            productName: 'Jacket',
            productPrice: 100,
            img: img1
        },
         {
            productName: 'Coat',
            productPrice: 100,
            img: img1
        },
         {
            productName: 'Shirt',
            productPrice: 100,
            img: img1
        },
         {
            productName: 'Boots',
            productPrice: 100,
            img: img1
        },
         {
            productName: 'Shoes',
            productPrice: 100,
            img: img1
        },
         {
            productName: 'Crocks',
            productPrice: 100,
            img: img1
        },
         {
            productName: 'Sandals',
            productPrice: 100,
            img: img1
        },

    ];
   return (
   <div className='product-wrapper'>
     {productData.map((product) => (
        <div className='product-container col-lg-3 col-md-6 m-3 p-1'>
            <div className='product-image'>
                <img src={product.img} />
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
