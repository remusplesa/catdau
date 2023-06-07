import { useState, useEffect } from "react";
import { Button, TextInput } from "@mantine/core";
import { notifications } from '@mantine/notifications';

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const pattern = /\S+@\S+\.\S+/;
    if (email.length > 0 && !pattern.test(email)) {
      setHasError(true);
    } else {
      setHasError(false)
    }
  }, [email])

  async function submitEmail() {
    if (email.length > 0) {
      fetch("/api/emailSubmit", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          date: new Date().toISOString()
        }),
      }).then(() => {
        setEmail("");
        notifications.show({
          title: 'Înregistrare reușită',
          message: 'O să te anunțăm când lansăm 🎉',
        });
      }).catch(err => notifications.show({
        title: 'A apărut o problema',
        message: JSON.stringify(err),
        color: 'red',
      }))
    }
  }

  return (
    <footer className="absolute bottom-0 left-0 right-0 z-10 m-auto flex w-11/12 flex-col items-center justify-end gap-2 rounded-t-lg bg-slate-50 py-4 px-4 md:px-6 shadow-md sm:w-5/6 md:flex-row md:gap-1">
      <h1 className="pb-2 md:mr-auto md:pb-0 text-lg font-semibold text-slate-700">
        Anunță-mă când e gata 💖
      </h1>
      <span className="flex flex-row items-start md:items-center justify-end gap-1 ">
        <TextInput
          error={hasError}
          type="email"
          placeholder="email@google.com"
          onChange={e => setEmail(e.target.value)}
        />
        <Button
          disabled={hasError}
          variant="outline"
          color="yellow"
          onClick={submitEmail}
        >
          Înregistrează-mă
        </Button>
      </span>
    </footer>
  );
};
