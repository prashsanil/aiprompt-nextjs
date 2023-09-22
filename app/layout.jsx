import '@styles/globals.css';

import Navbar from '@components/Navbar';

// import Footer from "@components/Footer";

export const metadata = {
  title: 'WikiPrompts',
  description: 'Go to place to find the best AI Prompts',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
           <div className='gradient'/>
        </div>

        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;