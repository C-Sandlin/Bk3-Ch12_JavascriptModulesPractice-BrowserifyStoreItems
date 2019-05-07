const makeNavBar = () => {
  const navLocation = document.querySelector("#topNav");
  navLocation.innerHTML += `
    <div id="logo-container">
        <a href="http://127.0.0.1:5500/public/"><img src="https://logos.textgiraffe.com/logos/logo-name/Betsy-designstyle-smoothie-m.png"></a>
    </div>
    <div id="nav-links">
        <a href="#">Categories</a>
        <a href="#">Orders</a>
        <a href="#">Log Out</a>
    </div>`;
};

export default makeNavBar;
