import Organization from "./Organization";
import organizations from "../../data/organizations.json";

export default function Organizations() {
  return (
    <div className="bg-transparent">
      <div className="mx-auto w-full px-4 py-6 sm:px-6 sm:py-6 md:px-8 lg:px-10 xl:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
          Организации
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
          {organizations.map((organization) => (
            <Organization key={organization.id} organization={organization} />
          ))}
        </div>
      </div>
    </div>
  );
}
