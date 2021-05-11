import React from 'react';
import './Technologies.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3, FaReact } from 'react-icons/fa';
import express from './express.svg';
import {
  SiRedux,
  SiJavascript,
  SiMysql,
  SiPython,
  SiCplusplus,
  SiC,
  SiDjango,
  SiGit,
  SiGithub,
  SiGnome,
  SiLinux,
  SiUbuntu,
  SiNodeDotJs,
  SiGooglecloud,
  SiFirebase,
  SiTypescript,
  SiBootstrap,
  SiMongodb,
  SiPostman,
  SiBabel,
} from 'react-icons/si';
function Technologies() {
  return (
    <div className="Technologies">
      <h1 className="Tech">Skills</h1>
      <div className="icons">
        <AiFillHtml5 fill="#E34F26" />
        <FaCss3 fill="#1572B6" />
        <SiBabel fill="#F9DC3E" />
        <SiBootstrap fill="#7952B3" />
        <SiJavascript fill="#F7DF1E" />
        <SiTypescript fill="#3178C6" />
        <FaReact fill="#61DAFB" />
        <SiRedux fill="#764ABC" />
        <SiNodeDotJs fill="#339933" />
        <img className="express" src={express} alt="reactlogo" />
        <SiMysql fill="#4479A1" />
        <SiMongodb fill="#47A248" />
        <SiC fill="#A8B9CC" />
        <SiPython fill="#3776AB" />
        <SiCplusplus fill="#00599C" />
        <SiDjango fill="#092E20" />
        <SiGit fill="#F05032" />
        <SiGithub fill="var(--text-color)" />
        <SiGnome fill="#4A86CF" />
        <SiLinux fill="#FCC624" />
        <SiUbuntu fill="#E95420" />
        <SiGooglecloud fill="#4285F4" />
        <SiPostman fill="#FF6C37" />
        <SiFirebase fill="#FFCA28" />
      </div>
    </div>
  );
}

export default Technologies;
