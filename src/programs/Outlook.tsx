import styles from "./Outlook.module.css";
import mailto from "../../assets/toolbar/mailto.png";
import send from "../../assets/toolbar/sendmail.png";
import Image from "next/image";
import cut from "../../assets/toolbar/cut.png";
import copy from "../../assets/toolbar/copy.png";
import paste from "../../assets/toolbar/paste.png";
import undo from "../../assets/toolbar/undo.png";
import check from "../../assets/toolbar/check.png";
import spelling from "../../assets/toolbar/spelling.png";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { AppDirectory } from "@/appData";
import { addTab } from "@/redux/tabSlice";
import store from "@/redux/store";
import { useSelector } from "react-redux";
import { RootState } from "@/types";

const Outlook = () => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const captchaRef = React.useRef(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const subjectRef = React.useRef<HTMLInputElement>(null);
  const messageRef = React.useRef<HTMLTextAreaElement>(null);

  // Submissions are handled by Netlify Forms, which posts back to the site root.
  // The matching static form lives in pages/index.tsx so Netlify can detect it at build time.
  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");

  const sendEmail = async () => {
    if (from === "" || subject === "") {
      return;
    }
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          email: from,
          subject: subject,
          message: message,
        }),
      });
      if (!response.ok) {
        throw new Error("Form submission failed: " + response.status);
      }
      const newTab = {
        ...AppDirectory.get(7),
        id: uuidv4(),
        zIndex: currTabID,
        title: "Outlook - Message Sent!",
        message: "Your message has been sent! I will get back to you soon!",
      };
      store.dispatch(addTab(newTab));
      if (emailRef.current !== null) {
        emailRef.current.value = "";
        setFrom("");
      }
      if (subjectRef.current !== null) {
        subjectRef.current.value = "";
        setSubject("");
      }
      if (messageRef.current !== null) {
        messageRef.current.value = "";
        setMessage("");
      }
    } catch (error) {
      const newTab = {
        ...AppDirectory.get(5),
        id: uuidv4(),
        zIndex: currTabID,
        title: "Outlook - Send Failed",
        message:
          "Sorry, your message could not be sent. Please email me directly at glenpringle1@gmail.com.",
      };
      store.dispatch(addTab(newTab));
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.icons_toolbar}>
        <div
          className={
            from !== "" && subject !== "" && message !== ""
              ? styles.icon
              : styles.icon_disabled
          }
        >
          <Image
            style={
              from !== "" && subject !== "" && message !== ""
                ? { margin: "0 4px" }
                : {
                    margin: "0 4px",
                    filter: "grayscale(100%) brightness(0.9)",
                  }
            }
            alt="send"
            width={40}
            height={30}
            src={send.src}
            onClick={sendEmail}
          />
          <p>Send</p>
        </div>
        <div className={styles.vertical_line} />
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="cut"
            width={25}
            height={30}
            src={cut.src}
          />
          <p>Cut</p>
        </div>
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="copy"
            width={28}
            height={30}
            src={copy.src}
          />
          <p>Copy</p>
        </div>
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="paste"
            width={28}
            height={30}
            src={paste.src}
          />
          <p>Paste</p>
        </div>
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="undo"
            width={28}
            height={30}
            src={undo.src}
          />
          <p>Undo</p>
        </div>
        <div className={styles.vertical_line} />
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="check"
            width={32}
            height={30}
            src={check.src}
          />
          <p>Check</p>
        </div>
        <div className={styles.icon}>
          <Image
            style={{ margin: "0 10px" }}
            alt="spelling"
            width={32}
            height={30}
            src={spelling.src}
          />
          <p>Spelling</p>
        </div>
      </div>
      <div>
        <div className={styles.mailing}>
          <div className={styles.mailing_text}>
            <div className={styles.field_text}>
              <Image
                style={{ margin: "0 4px" }}
                alt="arrow_down"
                width={20}
                height={20}
                src={mailto.src}
              />
              <p>To:</p>
            </div>
            <div className={styles.field_text}>
              <Image
                style={{ margin: "0 4px" }}
                alt="arrow_down"
                width={20}
                height={20}
                src={mailto.src}
              />
              <p>From:</p>
            </div>
            <div className={styles.field_text}>
              <p>Subject:</p>
            </div>
          </div>
          <div className={styles.mailing_fields}>
            <input
              className={styles.textfield}
              style={{ cursor: "default" }}
              disabled
              id="text21"
              type="text"
              value="Glen Pringle (glenpringle1@gmail.com)"
            />
            <input
              className={styles.textfield}
              ref={emailRef}
              placeholder="Enter your email address"
              onChange={(e) => {
                setFrom(e.target.value);
              }}
              type="email"
            />
            <input
              className={styles.textfield}
              ref={subjectRef}
              placeholder="What is this message/email regarding?"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              type="text"
            />
          </div>
        </div>
      </div>
      <div className={styles.richfield}>
        <textarea
          draggable={false}
          ref={messageRef}
          className={styles.richtextbox}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          id="text24"
          placeholder="Type your message here...Say hi or something :)"
        ></textarea>
      </div>
    </div>
  );
};

export default Outlook;
