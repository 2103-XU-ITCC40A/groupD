// SEND MESSAGE

const sendMessage2 = async (
  name: string,
  email: string,
  topic: string,
  message: string
) => {
  if (email === "" || name === "" || message === "") {
    return "Please fill in all fields";
  } else {
    try {
      const responseData = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          title: topic,
          messageContent: message,
          email: email,
        }),
      });

      return responseData;
    } catch (error) {
      return error;
    }
  }
};

export default sendMessage2;
