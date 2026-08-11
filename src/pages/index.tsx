import Head from "next/head";
import { Inter } from "@next/font/google";
import StartBar from "components/StartBar/StartBar";
import "xp.css/dist/XP.css";
import styles from "../styles/Home.module.css";
import DesktopIcon from "components/DesktopIcon/DesktopIcon";
import mycomputer from "../../assets/mycomputer.png";
import bin from "../../assets/recycling_bin.png";
import pdf from "../../assets/pdf.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import solitare from "../../assets/solitaire.png";
import linkedin from "../../assets/linkedin.png";
import WinForm from "components/WinForm/WinForm";
import { useEffect, useState } from "react";
import store from "@/redux/store";
import { AppDirectory } from "@/appData";
import { App, RootState, Tab } from "@/types";
import { addTab } from "@/redux/tabSlice";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Outlook from "@/programs/Outlook";
import MyWork from "@/programs/MyWork";
import MsgBox from "components/MsgBox/MsgBox";
import Welcome from "@/programs/Welcome";
import MyGallery from "@/programs/MyGallery";
import Paint from "@/programs/Paint";
import paint from "../../assets/paint.png";
export default function Home() {
  const Tabs = useSelector((state: RootState) => state.tab.tray);
  const currTabID = useSelector((state: RootState) => state.tab.id);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };

  const iconClicked = () => {
    console.log("Icon Clicked!");
  };
  const handleOpenGitHub = () => {
    window.open("https://github.com/gpinfocap", "_blank", "noreferrer");
  };

  const handleOpenLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/glenpringle1/",
      "_blank",
      "noreferrer"
    );
  };

  const handleOpenResume = () => {
    window.open("/Glen%20Pringle%20-%20Resume.pdf", "_blank", "noreferrer");
  };

  return (
    <>
      <Head>
        <title>Glen Pringle - Agentic Automation Engineer</title>
        <meta
          name="description"
          content="Glen Pringle's personal home page. Welcome to my site!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />

        {/* Link previews. Most platforms read only the og: tags, and the
            image URL has to be absolute for them to fetch it. */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Glen Pringle" />
        <meta property="og:url" content="https://glenpringle.com/" />
        <meta
          property="og:title"
          content="Glen Pringle - Agentic Automation Engineer"
        />
        <meta
          property="og:description"
          content="Glen Pringle's personal home page. Welcome to my site!"
        />
        <meta
          property="og:image"
          content="https://glenpringle.com/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="A Windows XP desktop with a Quick Start Guide window welcoming visitors to Glen Pringle's site"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Glen Pringle - Agentic Automation Engineer"
        />
        <meta
          name="twitter:description"
          content="Glen Pringle's personal home page. Welcome to my site!"
        />
        <meta
          name="twitter:image"
          content="https://glenpringle.com/og-image.png"
        />
      </Head>
      <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="email" name="email" />
        <input type="text" name="subject" />
        <textarea name="message" />
        <input type="text" name="bot-field" />
      </form>
      <main className={styles.main}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          <DesktopIcon
            appID={1}
            doubleClick={iconClicked}
            title="My Computer"
            img={mycomputer}
          />
          <DesktopIcon
            appID={2}
            doubleClick={iconClicked}
            title="Recycling Bin"
            img={bin}
          />
          <DesktopIcon
            appID={3}
            doubleClick={handleOpenResume}
            title="My Resume"
            img={pdf}
          />
          <DesktopIcon
            appID={4}
            doubleClick={handleOpenLinkedin}
            title="My LinkedIn"
            img={linkedin}
          />
          <DesktopIcon
            appID={5}
            doubleClick={handleOpenGitHub}
            title="My Github"
            img={github}
          />
          <DesktopIcon
            appID={6}
            doubleClick={() => handleRunApp(2)}
            title="My Work"
            img={cmd}
          />

          <DesktopIcon
            appID={7}
            doubleClick={iconClicked}
            title="My Hobbies"
            img={solitare}
          />
          <DesktopIcon
            appID={8}
            doubleClick={() => handleRunApp(9)}
            title="Paint"
            img={paint}
          />
          {Tabs.map((tab, index) => {
            return tab.isMinimized ? (
              <></>
            ) : (
              <WinForm
                key={tab.id}
                id={tab.id}
                title={tab.title}
                message={tab.message}
                icon={tab.Icon}
                zIndex={tab.zIndex}
                programType={tab.program}
                prompt={tab.prompt}
              >
                {tab.program === App.MYWORK ? (
                  <MyWork id={tab.id} />
                ) : tab.program === App.OUTLOOK ? (
                  <Outlook />
                ) : tab.program === App.WELCOME ? (
                  <Welcome id={tab.id} />
                ) : tab.program === App.MYGALLERY ? (
                  <MyGallery id={tab.id} />
                ) : tab.program === App.PAINT ? (
                  <Paint id={tab.id} />
                ) : tab.program === App.ERROR ? (
                  <p>{tab.message}</p>
                ) : tab.program === App.INFO ? (
                  <MsgBox id={tab.id} message={tab.message} icon={tab.Icon} />
                ) : tab.program === App.WARNING ? (
                  <p>{tab.message}</p>
                ) : tab.program === App.HELP ? (
                  <p>{tab.message}</p>
                ) : null}
              </WinForm>
            );
          })}
        </div>
        <StartBar />
      </main>
    </>
  );
}
