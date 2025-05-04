// app/layout.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Salma Mukhtar - Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Salma Mukhtar, a Full-Stack Developer showcasing projects, skills, and experience." />
        <meta property="og:title" content="Salma Mukhtar - Full-Stack Developer" />
        <meta property="og:description" content="Portfolio of Salma Mukhtar, a Full-Stack Developer showcasing projects, skills, and experience." />
        <meta property="og:image" content="/salma.png" />
        <link rel="icon" href="/favicon.ico" />
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