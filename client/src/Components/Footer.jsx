import logo from "../Images/NoSenseLogo.png";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-gray-700 text-primary-content p-10">
      <aside>
        <img src={logo} className="h-16 w-auto" />
        <p className="font-bold">
          No Sense Indumentary.
          <br />
          Premium Clothes since 2024
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav></nav>
    </footer>
  );
}
