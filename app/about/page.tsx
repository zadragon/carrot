import React from "react";

export async function generateMetadata() {
  return {
    title: "About",
  };
}

const About = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold pb-2">About us</h1>
      <p className="leading-5">Welcome to the official explorer for the New York Times Best Seller list explorer. We hope you enjoy your stay!</p>
    </div>
  );
};

export default About;
