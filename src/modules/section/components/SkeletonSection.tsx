type TSkeletonSectionProps = {
  title?: string
}

export const SkeletonSection = ({ title }: TSkeletonSectionProps) => (
  <div className="mb-8">
    <div className="mt-10 mb-3 flex animate-pulse items-center justify-between">
      {title && <div className="text-xl font-bold">{title}</div>}
      {!title && <div className="h-6 w-16 rounded bg-gray-300"></div>}
    </div>
    <div className="no-scrollbar overflow-x-auto scroll-smooth whitespace-nowrap">
      <div className="flex space-x-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="w-44 flex-shrink-0 animate-pulse md:w-48">
            <div className="h-[250px] w-full rounded-lg bg-gray-300 shadow-sm md:h-[320px]"></div>
            <div className="mt-2 mr-1 h-4 w-3/4 rounded bg-gray-300"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
)
