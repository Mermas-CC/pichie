'use client';

import { useState } from 'react';



export default function Home() {
  const [greeting, setGreeting] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name =
      (event.currentTarget.elements.namedItem("name") as HTMLInputElement)
        ?.value || "";

    const response = await fetch("/api/greeting", {
      method: "POST",
      body: JSON.stringify({ name }),
    });

    const data = await response.json();

    setGreeting(data.greeting);
  };
  
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  type="text" name="name" style={{ color: 'red' }}/>
        <button type="submit" style={{ background: 'blue' }}>Enviar</button>
      </form>
      <h1 style={{ color: 'red' }}>{greeting}</h1>
    </div>
  );
}
