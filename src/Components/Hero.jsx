
const Hero = () => {
  return (
    <main className="container">
      <div className="hero">
        <h1>Your Feet Deserve The Best</h1>
     <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aut magnam, et natus pariatur amet sapiente laudantium provident quod! Fuga quibusdam itaque veniam eaque vero.

     </p>

     <div className="hero-btn">
        <button>Shop Now</button>
        <button className="secondry-btn">Category</button>
     </div>

    <div className="shopping">
        <p>Also available on</p>
       
        <div className="flip-icon">
            <img src="/public/Images/flipkart-1024.webp" height={"100px"} width={"100px"} />
            <img src="/public/Images/th.jpeg" height={"100px"} width={"100px"} />

        </div>
    </div>

      </div>

      <div className="hero-image">
            <img src="/public/Images/shoe_image.png"></img>
      </div>
    </main>
  )
}

export default Hero
