import { useNavigate } from "react-router-dom";
import Pafrany from "../images/Pafrany.jpg";

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
      color: "bg-green-100 text-green-700",
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
    onClick={() => {
  console.log("CLICK", slug);
  navigate(`/group/${slug}`);
}}
      // onClick={() => navigate(`/group/${slug}`)}
      className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col gap-4"
    >
      <img src={image} alt={title} className="w-full h-60  object-cover " />
      {/* Status */}
      <div className="flex justify-between items-start">
        
        {/* <img src={Pafrany} alt={title} className="w-full h-full object-cover " /> */}
        <h3 className="text-xl font-semibold">{title}</h3>
        <span
          className={`text-sm px-3 py-1 rounded-full ${currentStatus.color}`}
        >
          {currentStatus.label}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600">{description}</p>

      {/* Info */}
      <div className="text-sm text-gray-500 space-y-1">
        <p>📅 {date}</p>
        <p>📍 {location}</p>
        <p>💰 {price}</p>
      </div>

      {/* CTA */}
      <button
        onClick={(e) => {
          e.stopPropagation();
            console.log("CLICK", slug);
          navigate(`/group/${slug}`);
        }}
        className="mt-2 bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
      >
        {currentStatus.button}
      </button>
    </div>
  );
}

// import { useNavigate } from "react-router-dom";

// export default function GroupCard({
//   title,
//   description,
//   date,
//   location,
//   price,
//   status,
//   slug,
// }: GroupCard) {
//   const navigate = useNavigate();

//   const statusConfig = {
//     open: {
//       label: "Jelentkezhető",
//       color: "bg-green-100 text-green-700",
//       button: "Jelentkezem",
//     },
//     soon: {
//       label: "Hamarosan indul",
//       color: "bg-yellow-100 text-yellow-700",
//       button: "Érdekel",
//     },
//     full: {
//       label: "Betelt",
//       color: "bg-red-100 text-red-700",
//       button: "Értesítést kérek",
//     },
//   };

//   const currentStatus = statusConfig[status];

//   return (
//     <div
//       onClick={() => navigate(`/csoportok/${slug}`)}
//       className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col gap-4"
//     >
//       {/* Status */}
//       <div className="flex justify-between items-start">
//         <h3 className="text-xl font-semibold">{title}</h3>
//         <span
//           className={`text-sm px-3 py-1 rounded-full ${currentStatus.color}`}
//         >
//           {currentStatus.label}
//         </span>
//       </div>

//       {/* Description */}
//       <p className="text-gray-600">{description}</p>

//       {/* Info */}
//       <div className="text-sm text-gray-500 space-y-1">
//         <p>📅 {date}</p>
//         <p>📍 {location}</p>
//         <p>💰 {price}</p>
//       </div>

//       {/* CTA */}
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           navigate(`/csoportok/${slug}`);
//         }}
//         className="mt-2 bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
//       >
//         {currentStatus.button}
//       </button>
//     </div>
//   );
// }
