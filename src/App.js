import './App.css';
function App() {
  return (
    <div className='main-container'>
      <nav>
        <div>
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button>Login</button>
      </nav>
      <div className='hero'>
        <div className='hero-content'>
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className='hero-btn'>
            <button className='shop-btn'>Shop Now</button>
            <button className='category-btn'>Category</button>
          </div>
          <div className='shopping'>
            <p>Also Available On</p>
            <div className='online'>
              <img src="/images/flipkart.png" alt="flipkart" />
              <img src="/images/amazon.png" alt="amazon" />
            </div>
          </div>
        </div>
        <div className='hero-image'>
          <img src="/images/shoe_image.png" alt="shoes" />
        </div>
      </div>
    </div>
  );
}

export default App;
