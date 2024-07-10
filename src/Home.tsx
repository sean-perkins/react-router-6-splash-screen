import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Click on the links in the navigation bar to learn more</p>

      <Link to="page-two">Go to Page Two</Link>
    </>
  );
}
