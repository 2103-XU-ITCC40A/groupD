import { Button, Dropdown, Input, Textarea } from "@nextui-org/react";
import Head from "next/head";
import React, { useState } from "react";
import details from "../../src/static/details.json";
import { selectTopic } from "../../src/static/list";
import { toast } from "react-toastify";
import sendMessage2 from "../../src/functions/sendMessage";
import Image from "next/image";
import cont from "../../public/images/xxxx.jpg";

export default function Contacts() {
  // FORM STATE
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  // BUTTON STATE
  const [button, setButton] = useState("Send");
  const [errorCaution, setErrorCaution] = useState(false);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      form.name.length === 0 ||
      form.email.length === 0 ||
      form.message.length < 0
    ) {
      setErrorCaution(true);
      toast.error("It should not be empty!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        setErrorCaution(false);
      }, 4000);
    } else {
      setButton("Sent");
      toast.success("Your message wes sent successfuly", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setForm({
        name: "",
        email: "",
        topic: "",
        message: "",
      });
      setTimeout(() => {
        setButton("Send");
      }, 3000);
    }
  };

  return (
    <div>
      <Head>
        <title>{details.details.contact_page.title}</title>
        <meta
          name="description"
          content="This app was created by Jovellabay."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="h-56 cons" />
        <div className="sub-container min-h-[500px] py-10 px-4 md:px-0">
          <h1 className="contact-header-form text-2xl md:text-4xl text-center text-[#3A53A4]">
            {details.contacts.header}
          </h1>

          {/* FORM */}
          <form
            className="mx-auto max-w-[360px] grid grid-cols-1 gap-8 mt-10"
            onSubmit={sendMessage}
          >
            <Input
              type="text"
              label="Fullname"
              placeholder="Enter your fullname"
              status={errorCaution ? "error" : "default"}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              type="email"
              label="Email Address"
              placeholder="Enter your email address"
              status={errorCaution ? "error" : "default"}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <select
              className="bg-[#F1F3F5] py-2 px-1 rounded-xl"
              name="topic"
              title="topic"
              onChange={(e) => setForm({ ...form, topic: e.target.value })}
            >
              {selectTopic.map((item, index) => {
                return (
                  <option key={index} value={item.topicName}>
                    {item.topicName}
                  </option>
                );
              })}
            </select>
            <Textarea
              label="Message"
              placeholder="Explain your message..."
              status={errorCaution ? "error" : "default"}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            {/* BUTTON SUBMIT */}
            <Button type="submit" value="Submit" flat>
              {button}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
