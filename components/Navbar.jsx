import Image from "next/image";
import styles from "./../styles/Navbar.module.css";
function Navbar() {
  let humb = () => {
    const hum = document.getElementsByClassName("hamburger")[0];
    document
      .getElementsByClassName("navbar")[0]
      .classList.toggle("deactive__navbar");
    hum.classList.toggle("active__hum");
  };
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav + " container"}>
        <div className={styles.logo}>
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={150}
            height={40}
          />
        </div>
        <div className={styles.navbar + " navbar"}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Company</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.hamburger + " hamburger"} onClick={humb}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <button className="main-outline btn sm-none">Book Now</button>
      </nav>
    </div>
  );
}

export default Navbar;
