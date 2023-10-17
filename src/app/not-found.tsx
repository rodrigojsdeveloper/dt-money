export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-grey-2 p-12 max-sm:px-8">
      <div className="w-full h-49 flex justify-center items-center gap-5">
        <p className="font-medium text-2xl">404</p>
        <div className="w-px h-49 bg-white" />
        <p className="font-normal text-sm">This page could not be found.</p>
      </div>
    </div>
  );
}
