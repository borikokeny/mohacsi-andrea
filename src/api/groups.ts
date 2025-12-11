export async function fetchGroupDetails(slug) {
  const entry = await client.getEntries({
    content_type: "group",
    "fields.slug": slug,
  });

  return entry.items[0];
}
