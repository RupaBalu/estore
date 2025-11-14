import './_top-nav.scss';

export default function TopNav(){
    return(
        <div className='header bg-dark'>
          <div className='row topnav-row'>
            <div className='brand my-1'>
              <h1>eStore</h1>
            </div>
            <div className='inp-container p-0 my-4 w-50 h-25 bg-white '>
            <div className='dropdown p-0 m-0'>
                <select className='w-100 p-0 m-0' id="category" name="category">
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                </select>
            </div>
              <input className='form-control' placeholder='Search...'/>
              <button><i className='fa fa-search' /></button>
            </div>
            <div className='login-container p-0'>
              <i className='fa fa-user-circle user-icon'/>
              <a href="#"><h5>Login</h5></a> / <a href="#"><h5>Register</h5></a>
            </div>
            <div className='cart-container p-0'>
              <li><i className='fa fa-heart'/></li>
              <li><i className='fa fa-shopping-cart' /></li>
            </div>
        </div>
      </div>
    )
}