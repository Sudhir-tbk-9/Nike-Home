const Navigation = () => {

    return(

        <nav>
        <div className="logo">
          <img src="/public/Images/Nike-Logo-Transparent-Free-PNG.png" alt="logo" height={"70px"} width={"160px"}  />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
          
        </ul>
      <button className="login">login</button>
      </nav>

    );
};

export default Navigation ;