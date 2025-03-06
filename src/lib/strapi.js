const getBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=*`);
    const json = await res.json();

    if (!json.data) return [];

    return json.data.map((item) => ({
      id: item.id,
      title: item.title,
      slug: item.slug,
      content: item.content,
      author: item.author || "Unknown Author",
      publishedAt: item.publishedAt,
      category: item.category ? item.category.Name : "Uncategorized",
      image: item.Image ? item.Image.formats.medium.url : null, // Ensure image handling
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export default getBlogs;