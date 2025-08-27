import { Link } from "react-router-dom";
import lost from "../../src/assets/lost.svg";

export default function NotFoundPage() {
  return (
    <div className="h-[100vh] grid gap-5 place-content-center text-center text-white">
      <img src={lost} alt="are you lost?" className="h-70 w-full" />
      <h2 className="text-4xl">Oops! You’re not supposed to be here.</h2>
      <Link
        to="/"
        className="text-[#f96d00] font-semibold text-xl hover:underline"
      >
        Click me my Friend
      </Link>
    </div>
  );
}
