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
      author: item.author.Name || "Unknown Author",
      publishedAt: item.datePublished,
      category: item.category ? item.category.Name : "Uncategorized",
      image: item.Image ? item.Image.formats.small.url : null, // Ensure image handling
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export default getBlogs;