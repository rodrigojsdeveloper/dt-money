export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-grey-2 p-8 sm:px-12">
      <div className="flex h-[3.063rem] w-full items-center justify-center gap-5">
        <p className="text-2xl font-medium">404</p>
        <div className="h-[3.063rem] w-px bg-white" />
        <p className="text-sm font-normal">This page could not be found.</p>
      </div>
    </div>
  )
}
