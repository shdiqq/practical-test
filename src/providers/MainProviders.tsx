import ReactQueryProvider from '@/providers/ReactQueryProvider';

import ReactScan from '@/components/react-scan';
import { Toaster } from '@/components/ui/toaster';

const MainProviders = ({ children }: React.PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <ReactScan />
      {children}
      <Toaster />
    </ReactQueryProvider>
  );
};

export default MainProviders;
