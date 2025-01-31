import Image from "next/image"

export function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-background rounded-b-[2rem] md:rounded-tr-[2rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              Find a <span className="text-primary">mentor</span> who can guide you on your{" "}
              <span className="text-primary">career</span> journey
            </h1>
            <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto lg:mx-0">
              A mentor can help you set goals, develop your skills, and navigate your education journey.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-primary text-white px-8 py-3 rounded-full text-md font-medium shadow-lg hover:bg-primary-light transition-colors">
                Lets get started <span className="ml-2">→</span>
              </button>
              <button className="bg-white text-primary px-6 py-2 rounded-full text-md font-medium transition-colors shadow-sm border-2 border-primary hover:bg-gray-300">
                Free trial
            </button>
            </div>

            {/* Rating Card - Moved to bottom of left column */}
            <div className="mt-12 inline-flex items-center gap-2 bg-white p-4 rounded-xl shadow-sm">
              <span className="text-2xl">⭐</span>
              <p className="text-sm font-medium text-text-primary">
                4.9/5 rating on the App Store • Based on 10k+ reviews
              </p>
            </div>
          </div>

          {/* Right Column - Images with Mentor Details */}
          <div className="relative mt-5 lg:mt-0">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-text-primary">Anny Gray</h3>
                  <p className="text-sm text-text-secondary">UX/UI Developer</p>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop"
                  alt="Ann Gray - UX/UI Developer"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="space-y-3 md:mt-12">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-text-primary">Shivam Pathak</h3>
                  <p className="text-sm text-text-secondary">FullStack Developer</p>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop"
                  alt="James Lincoln - Senior Developer"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}