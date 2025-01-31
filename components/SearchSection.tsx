"use client"
import { Search, X, CheckCircle, Star } from "lucide-react";
import { useState } from "react";

export function SearchSection() {
  const [tags, setTags] = useState([
    "Strategic planning",
    "Creative thinking",
    "Brand",
    "Data analysis",
    "Content marketing",
    "Social Media",
  ]);

  const removeTag = (tagToRemove:string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-background rounded-[2rem] py-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              One platform for <span className="text-primary">everything</span> you need
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Our platform is constantly evolving. We are always adding new features and services to meet your needs.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-full text-md font-medium shadow-lg hover:bg-primary-light transition">
              Learn more <span className="ml-2">→</span>
            </button>
          </div>

          <div className="bg-card-bg p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">Search for Mentor</h3>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search for Mentor"
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-6 h-6" />
            </div>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-primary-light/20 text-primary text-sm font-medium"
                >
                  {tag}
                  <X className="ml-2 w-4 h-4 cursor-pointer" onClick={() => removeTag(tag)} />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-card-bg p-8 rounded-xl shadow-lg space-y-4">
            <p className="text-2xl font-semibold text-text-primary">237 Mentors</p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary w-6 h-6" />
                <span className="text-text-primary">Online</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary w-6 h-6" />
                <span className="text-text-primary">30.7/hr</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary w-6 h-6" />
                <span className="text-text-primary">Local Mentors</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary w-6 h-6" />
                <span className="text-text-primary">Weekly</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary w-6 h-6" />
                <span className="text-text-primary">5+ Years Experience</span>
              </div>
            </div>
          </div>
          <div className="bg-card-bg p-8 rounded-xl shadow-lg space-y-4">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">Highly Rated Mentors</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-3">
                <Star className="text-yellow-400 w-6 h-6" />
                <span className="text-text-primary">4.9 Average Rating</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-yellow-400 w-6 h-6" />
                <span className="text-text-primary">98% Success Rate</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-yellow-400 w-6 h-6" />
                <span className="text-text-primary">Top Mentors Globally</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-yellow-400 w-6 h-6" />
                <span className="text-text-primary">5.0 Global Customer Satisfaction</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="text-yellow-400 w-6 h-6" />
                <span className="text-text-primary">100% Performance Guarantee</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight p-5">
            Find the  <span className="text-primary">best</span> specialist
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-12">
              Connect with top-rated mentors who specialize in various fields to help you achieve your goals and grow your career.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-background text-primary p-6 rounded-2xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                  <p className="text-black">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}

const stats = [
  {
    title: "2371 Mentors",
    description:
      "Join a vibrant and dedicated community that's constantly growing, where signature-sharing tips connect reading.",
  },
  {
    title: "98% Mentors get hired",
    description:
      "Our mentors are highly skilled in assisting others in reaching their goals, which enhances the user experience.",
  },
  {
    title: "4.9 Rating on the App Store",
    description: "The prominence of our app is reflected by its rating, which enhances the user experience.",
  },
];
