import './globals.css';

export const metadata = {
  title: 'Anshula Addanki | Portfolio',
  description: 'Web design and development internship portfolio.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
