"use client"; 

import { useSearchParams } from "next/navigation";
import React from "react";

export const dynamic = "force-dynamic";
const NotFound = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Extract id from the query string

  return (
    <div className="text-center text-danger mt-5">
      <h1>Page Not Found!</h1>
      <span>{`This post with id ${id} was not found.`}</span>
    </div>
  );
};

export default NotFound;
