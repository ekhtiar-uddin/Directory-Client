import { Building2, Globe, Mail, MapPin, Phone, Users } from "lucide-react";

const SingleCompanyCard = ({ company }) => {
  const {
    name,
    description,
    location,
    industry,
    website,
    logoUrl,
    founded,
    size,
    email,
    phone,
    _id,
  } = company;

  return (
    <div className="border border-b2 rounded-xl hover:shadow-xl transition-all duration-500 p-4 relative bg-white">
      {/* Company Logo */}
      <div className="flex items-center justify-center mb-4">
        <img
          className="rounded-lg w-32 h-24 object-contain border border-gray-200"
          src="https://assets.themuse.com/uploaded/companies/11636/small_logo.png?v=1706802127"
          alt={name}
        />
      </div>

      {/* Company Name & Industry */}
      <div className="border-t pt-3">
        <div className="flex items-start justify-between mb-2">
          <h1 className="text-lg font-bold line-clamp-1">{name}</h1>
          <span className="text-[11px] border rounded-full font-semibold px-3 py-1 bg-blue-50 text-primary-600 whitespace-nowrap">
            {industry}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{description}</p>

        {/* Company Details */}
        <div className="space-y-2 text-sm">
          {/* Location */}
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="w-4 h-4 text-p1" />
            <span className="line-clamp-1">{location}</span>
          </div>

          {/* Size */}
          <div className="flex items-center gap-2 text-gray-700">
            <Users className="w-4 h-4 text-p1" />
            <span>{size} employees</span>
          </div>

          {/* Founded */}
          <div className="flex items-center gap-2 text-gray-700">
            <Building2 className="w-4 h-4 text-p1" />
            <span>Founded in {founded}</span>
          </div>

          {/* Website */}
          <div className="flex items-center gap-2 text-gray-700">
            <Globe className="w-4 h-4 text-p1" />
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:underline line-clamp-1"
            >
              {website.replace(/^https?:\/\//, "")}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 text-gray-700">
            <Mail className="w-4 h-4 text-p1" />
            <a
              href={`mailto:${email}`}
              className="text-gray-600 hover:underline line-clamp-1"
            >
              {email}
            </a>
          </div>

          {/* Phone (if available) */}
          {phone && (
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4 text-p1" />
              <a
                href={`tel:${phone}`}
                className="text-gray-600 hover:underline"
              >
                {phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCompanyCard;
