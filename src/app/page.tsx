import React from 'react';

export default function Home() {
  const version = process.env.NEXT_TEMPLATE_VERSION;
  return (
    <main>
      <h1>NextJS: {version}</h1>
    </main>
  );
}
