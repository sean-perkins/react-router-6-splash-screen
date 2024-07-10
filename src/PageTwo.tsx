import { Link } from "react-router-dom";

export default function PageTwo() {
  return (
    <>
      <h1>Page Two</h1>
      <p>Click on the links in the navigation bar to learn more</p>

      <Link to="/">Go to Home</Link>
    </>
  );
}
