import WelcomeIcon from "components/WelcomeIcon/WelcomeIcon";
import styles from "./Welcome.module.css";
import linkedin from "../../assets/linkedin.png";
import outlook from "../../assets/outlook_large.png";
import pdf from "../../assets/pdf.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import users from "../../assets/users.png";
import butterfly from "../../assets/butterfly.png";
import { AppDirectory } from "@/appData";
import store from "@/redux/store";
import { addTab, setBackBtn } from "@/redux/tabSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";

const INTRO = `Hi, I'm Glen - nice to meet you! I'm an Agentic Automation Engineer at Infocap,
based in Lake Villa, Illinois. I'm passionate about using modern technology to take the tedious,
repetitive parts of work off people's plates so they can spend their time on the parts that actually
need a human. These days that means building agentic workflows and AWS-based systems: wiring large
language models and cloud services into the enterprise systems businesses already run on, and doing
it in a way that keeps people in control of the process rather than at the mercy of it.

I got here the long way round - help desk, then PC support, then the core banking system at a credit
union, then consulting, and at every stop the part I kept gravitating towards was the same one:
finding the process everybody dreads and quietly making it disappear.`;

const WHYSITE = `Most of my working life is spent on automation, AI and cloud infrastructure - all
things that did not exist in anything like their current form when I first sat down in front of a
computer. So there is something pleasing about presenting all of it inside a Windows XP desktop.
It is the operating system a lot of us learned on: the double-click, the start menu, the taskbar,
the satisfying clunk of a window snapping to maximised. A portfolio is really just a folder of
things you have made, and this felt like a more honest way to show you around one than yet another
scrolling landing page. Have a click around - the icons all do something, and Paint genuinely
works.`;

const INTERESTS = `My route into automation ran through security and problem-solving. At Saint Leo
University I was part of the InfoSec Club and the Computer Club, interned with the university's
information security team auditing servers for vulnerabilities, and took first place in the Saint
Leo CTF Challenge in 2016. Capture-the-flag competitions are still my favourite way to think about
how systems actually behave versus how they are documented to behave - which turned out to be
exactly the instinct that matters in automation work, where the gap between the documented process
and the real one is where every interesting problem lives.`;

const INTERESTS2 = `I like building things that have nothing to do with my day job, too. Wrath of
Verath is a game I have been putting together in Godot - a completely throwaway project in the best
sense, built to learn an engine rather than to ship anything. This website is in the same category.
Side projects are where you get to make all the decisions badly and learn something from it, which
is harder to do in production.`;

const INTERESTS3 = `Before any of the engineering, the design side came first: my earliest
certification is an Adobe Certified Associate in Photoshop, from back in 2011. I still care a lot
about how things look and feel to use, which is probably obvious from the amount of time I have
spent getting the title bars on this site right. Outside of screens entirely, I'm an Eagle Scout -
a slow lesson in planning a project properly and then actually finishing it, which has been more
useful professionally than it has any right to be.`;

interface props {
  id: number;
}

const Welcome = ({ id }: props) => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)]
        .backBtnActive
  );

  const [aboutmeView, setAboutmeView] = useState(false);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };
  const handleSwitchView = () => {
    setAboutmeView(true);
    store.dispatch(setBackBtn({ id: id, backBtnActive: true }));
  };
  useEffect(() => {
    setAboutmeView(backBtnActive);
  }, [backBtnActive]);
  return (
    <div className={styles.main}>
      {!aboutmeView ? (
        <div>
          <h3 className={styles.welcome_text}>
            Welcome To Glen Pringle&apos;s Personal Website
          </h3>
          <p className={styles.subtitle}>
            Learn more about me by clicking any of the icons below to get
            started!
          </p>
          <div className={styles.content}>
            <div className={styles.leftpanel}>
              <WelcomeIcon
                img={butterfly}
                text={"About Me"}
                tooltip="Who am I?"
                onClick={handleSwitchView}
              />
              <WelcomeIcon
                img={github}
                text={"My GitHub Profile"}
                tooltip="My Brain Dump"
                onClick={() => {
                  window.open(
                    "https://github.com/geepee123",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={linkedin}
                text={"My Linkedin"}
                tooltip="Connect with me!"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/glenpringle1/",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
            </div>
            <div className={styles.rightpanel}>
              <WelcomeIcon
                img={cmd}
                text={"My Work"}
                tooltip="Interesting projects I have done"
                onClick={() => handleRunApp(2)}
              />
              <WelcomeIcon
                img={outlook}
                text={"Send Me An Email"}
                tooltip="Reach out to me!"
                onClick={() => handleRunApp(1)}
              />
              <WelcomeIcon
                img={pdf}
                text={"My Resume"}
                tooltip="My Curriculum Vitae"
                onClick={() => {
                  window.open("./Resume.pdf", "_blank", "noreferrer");
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={styles.welcome_text}>About Me</h3>
          <p className={styles.subtitle}></p>
          <div className={styles.content}>
            <div className={styles.text_col}>
              <p className={styles.subtitle}>{INTRO}</p>
              <h3 className={styles.subtitle_header}>
                Why a personal website like this?
              </h3>
              <p className={styles.subtitle}>{WHYSITE}</p>
              <h3 className={styles.subtitle_header}>
                What are your interests?
              </h3>
              <p className={styles.subtitle}>{INTERESTS}</p>
              <br></br>
              <p className={styles.subtitle}>{INTERESTS2}</p>
              <br></br>
              <p className={styles.subtitle}>{INTERESTS3}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
