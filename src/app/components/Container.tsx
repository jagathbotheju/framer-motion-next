interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  //2480px
  return (
    <div className="max-w-7xl px-4 sm:px-2 md:px-10 xl:px-20 mx-auto">
      {children}
    </div>
  );
};

export default Container;
