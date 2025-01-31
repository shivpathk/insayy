import Image from "next/image"

interface CompanyLogo {
  name: string
  logo: string
}

const companies: CompanyLogo[] = [
  { name: "Slack", logo: "/logos/slack.png" },
  { name: "LinkedIn", logo: "/logos/linkedin.png" },
  { name: "Facebook", logo: "/logos/facebook.png" },
  { name: "Amazon", logo: "/logos/amazon.png" },
  { name: "Google", logo: "/logos/google.png" },
  { name: "Microsoft", logo: "/logos/microsoft.png" },
]

export function Companies() {
  return (
    <div className="bg-card-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <CompanyLogo key={index} company={company} />
          ))}
        </div>
      </div>
    </div>
  )
}

function CompanyLogo({ company }: { company: CompanyLogo }) {
  return (
    <div className="relative h-12 filter grayscale hover:grayscale-0">
      <Image src={company.logo || "/placeholder.svg"} alt={`${company.name} logo`} layout="fill" objectFit="contain" />
    </div>
  )
}

