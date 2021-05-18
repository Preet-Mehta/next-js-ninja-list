import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Lost = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/"), 2500);
  }, []);

  return (
    <div className="lost">
      <h1>Oops...</h1>
      <h2>You seem to be lost.</h2>
      <p>
        Take me back to{" "}
        <Link href="/">
          <a>Home.</a>
        </Link>
      </p>
    </div>
  );
};

export default Lost;
