export function Video({...props}: React.VideoHTMLAttributes<HTMLVideoElement>) {
    return (
      <div className="transition-all duration-300 pointer-events-none p-4 sm:p-8 sm:hover:p-4">
        <video
          className="transition-all duration-300 rounded-md shadow-lg shadow-black/35 ring-1 ring-primary pointer-events-auto sm:hover:shadow-lg sm:hover:ring-0"
          {...props}
        />
      </div>
    );
}