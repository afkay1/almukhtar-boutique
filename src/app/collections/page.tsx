import { CollectionsClient } from "@/components/collections/CollectionsClient";

export default async function CollectionsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; brand?: string }>;
}) {
  const params = await searchParams;

  return (
    <CollectionsClient
      initialCategory={params.category ?? "all"}
      initialBrand={params.brand ?? "all"}
    />
  );
}
