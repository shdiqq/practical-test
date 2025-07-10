import ReactScan from '@/components/react-scan';

const MainProviders = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <ReactScan />
      {children}
    </>
  );
};

export default MainProviders;
