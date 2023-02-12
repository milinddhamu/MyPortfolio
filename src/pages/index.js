import Head from "next/head";
import Topbar from "components/Topbar";
import Background from "components/Background";
import React from "react";
import { useRouter } from "next/router";
import FlipCard from "components/FlipCard";
import Profile from "components/Profile";
import Projects from "components/Projects";

export default function Home() {
  return (
    <>
    <div className="snap-y snap-mandatory h-screen scroll-smooth overflow-scroll no-scrollbar">
      <Profile className='snap-center'/>
        <div className=''>
        <Projects/>
        </div>          
    </div>
      
    </>
  );
}
