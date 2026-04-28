import { useNavigate } from "react-router-dom";

type Status = "open" | "soon" | "full";

export type GroupCardProps = {
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
  price: string;
  status: Status;
  slug: string;
  email: string;
};

export default function GroupCard({
  image,
  title,
  description,
  date,
  location,
  price,
  status,
  slug,
}: GroupCardProps) {
  const navigate = useNavigate();

  const statusConfig: Record<
    Status,
    { label: string; color: string; button: string }
  > = {
    open: {
      label: "Jelentkezhető",
      color: "bg-[#e6efee] text-[#2f6f6b]",
      button: "Bővebben",
    },
    soon: {
      label: "Hamarosan indul",
      color: "bg-yellow-100 text-yellow-700",
      button: "Bővebben",
    },
    full: {
      label: "Betelt",
      color: "bg-red-100 text-red-700",
      button: "Értesítést kérek",
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <div
      onClick={() => navigate(`/group/${slug}`)}
      className="cursor-pointer bg-white rounded-lg border border-[#e5e5e5] hover:border-[#4f8f8a]/40 transition overflow-hidden"
    >
      {/* IMAGE */}
      <div className="relative w-full h-56">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#2f6f6b]/40"></div>
      </div>
      {/* CONTENT */}
      <div className="p-6 space-y-4">
        {/* TITLE + STATUS */}
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-lg font-medium text-[#2f2f2f]">{title}</h3>

          <span
            className={`text-xs px-3 py-1 rounded-full ${currentStatus.color}`}
          >
            {currentStatus.label}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-[#555] text-sm leading-relaxed">{description}</p>

        {/* INFO */}
        <div className="text-sm text-[#666] space-y-1">
          <p>📅 {date}</p>
          <p>📍 {location}</p>
          <p>💰 {price}</p>
        </div>

        {/* CTA */}
        <div className="pt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/group/${slug}`);
            }}
            className="text-[#2f6f6b] underline text-sm"
          >
            {currentStatus.button} →
          </button>
        </div>
      </div>
    </div>
  );
}
