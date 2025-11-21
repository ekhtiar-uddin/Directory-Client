const SingleCompanyCardSkeleton = () => {
  return (
    <div className="border border-b2 rounded-xl p-4 bg-white animate-pulse">
      {/* Logo Skeleton */}
      <div className="flex items-center justify-center mb-4">
        <div className="rounded-lg w-32 h-24  bg-gray-200"></div>
      </div>

      {/* Content Skeleton */}
      <div className="border-t pt-3 space-y-3">
        <div className="flex justify-between items-center">
          <div className="h-5 bg-gray-200 rounded w-2/3"></div>
          <div className="h-6 bg-gray-200 rounded-full w-20"></div>
        </div>

        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>

        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleCompanyCardSkeleton;
