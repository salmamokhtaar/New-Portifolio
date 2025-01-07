// app/layout.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Salma Portfolio</title>
        <meta name="description" content="Welcome to Salma's portfolio." />
      </Head>
      <body>
        <Header />
        <main className="container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}