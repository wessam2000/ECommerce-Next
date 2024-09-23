"use client";
import React from "react";

const Error = ({ error, reset }) => {
  return (
    <>
      <h1 className="text-center text-danger">Something went wrong, please try again.</h1>
      <h1 className="text-center text-danger">{error.message}</h1>
      <button className="btn btn-primary" onClick={reset}>Try again</button>
    </>
  );
};

export default Error;