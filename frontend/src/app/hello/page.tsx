"use client";

import { useEffect, useState } from "react";

export default function HelloPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://api.stackops.nip.io/hello")
      .then((res) => res.text())
      .then((text) => setMessage(text));
  }, []);

  return (
    <div className="p-4 text-xl">
      Message from API: <strong>{message || "Loading..."}</strong>
    </div>
  );
}
