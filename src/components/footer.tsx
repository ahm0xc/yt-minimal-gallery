import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="text-neutral-400">
        <p>
          images are downloaded from{" "}
          <Link
            href="https://unsplash.com"
            className="text-neutral-50"
            target="_blank"
          >
            @unsplash
          </Link>
        </p>
      </div>
    </footer>
  );
}
