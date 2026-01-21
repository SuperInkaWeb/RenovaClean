import emailjs from "@emailjs/browser";

const useEmailJS = () => {
  const sendEmail = (formRef) => {
    return emailjs.sendForm(
      "service_87jkpjr",
      "template_24ms44k",
      formRef.current,
      "HQey1wswri0aASYg1"
    );
  };

  return { sendEmail };
};

export default useEmailJS;
