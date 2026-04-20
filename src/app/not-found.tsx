import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <html lang="de">
      <head>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            background-color: #FDF8ED;
            -webkit-font-smoothing: antialiased;
          }
          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 50;
            background-color: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(12px);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }
          .navbar-content {
            max-width: 72rem;
            margin: 0 auto;
            padding: 0 1.5rem;
            height: 5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .logo {
            height: 3.5rem;
            width: auto;
            cursor: pointer;
          }
          .container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            padding-top: 5rem;
          }
          .content {
            text-align: center;
            max-width: 28rem;
          }
          .emoji {
            font-size: 6rem;
            margin-bottom: 1.5rem;
          }
          .title {
            font-size: 2.25rem;
            font-weight: 700;
            color: #111827;
            margin-bottom: 1rem;
          }
          .description {
            font-size: 1.125rem;
            color: #4B5563;
            margin-bottom: 2rem;
          }
          .button {
            display: inline-block;
            background-color: #F68B28;
            color: white;
            padding: 0.75rem 2rem;
            border-radius: 9999px;
            font-weight: 500;
            text-decoration: none;
            transition: all 0.2s;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .button:hover {
            background-color: #e07a1f;
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          }
          .hidden {
            display: none;
          }
        `}</style>
      </head>
      <body>
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-content">
            <Link href="/de">
              <Image
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692723a092e75b6d98e7c6e5/4228a2497_relengo_logo_logo_1.png"
                alt="Relengo"
                width={140}
                height={56}
                className="logo"
              />
            </Link>
          </div>
        </nav>

        {/* 404 Content - Default German */}
        <div className="container" id="de-content">
          <div className="content">
            <div className="emoji">🌵</div>
            <h1 className="title">Oops!</h1>
            <p className="description">
              Es sieht so aus, als hättest du einen leeren Ort gefunden.
            </p>
            <Link href="/de" className="button">
              Zurück zur Startseite
            </Link>
          </div>
        </div>

        {/* English version (hidden by default) */}
        <div className="container hidden" id="en-content">
          <div className="content">
            <div className="emoji">🌵</div>
            <h1 className="title">Oops!</h1>
            <p className="description">
              It seems like you&apos;ve found an empty place.
            </p>
            <Link href="/en" className="button">
              Back to Home
            </Link>
          </div>
        </div>
        
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const path = window.location.pathname;
              const isEnglish = path.startsWith('/en');
              
              if (isEnglish) {
                // Hide German, show English
                document.getElementById('de-content').classList.add('hidden');
                document.getElementById('en-content').classList.remove('hidden');
                // Update logo link
                document.querySelector('.navbar a').href = '/en';
              }
            })();
          `
        }} />
      </body>
    </html>
  );
}
