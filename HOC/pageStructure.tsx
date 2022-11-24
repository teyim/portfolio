type pageStructureProps = {
  children: React.ReactNode;
  width: string;
  heading: string;
};

function PageStructure({ children, heading, width }: pageStructureProps) {
  return (
    <div className="p-5 text-xl text-gray-500">
      <div className={`max-w-7xl flex-col mx-auto p-4 md:p-10 ${width}`}>
        <h1 className="text-gray-400 text-5xl font-bold font-SG text-center">
          {heading}
        </h1>
        <div className="my-3">{children}</div>
      </div>
    </div>
  );
}

export default PageStructure;
