import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div>Layout</div>
        {children}
      </body>
    </html>
  );
}
