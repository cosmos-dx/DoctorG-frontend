import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const ClientOnly = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default dynamic(() => Promise.resolve(ClientOnly), { ssr: false });
