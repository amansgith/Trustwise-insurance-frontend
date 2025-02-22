import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RelatedPosts() {
  const posts = [
    {
      id: 1,
      title: "The Rise of Progressive Web Apps",
      excerpt:
        "Explore how PWAs are changing the landscape of web development.",
    },
    {
      id: 2,
      title: "Mastering React Hooks",
      excerpt:
        "A deep dive into React Hooks and how they can simplify your code.",
    },
    {
      id: 3,
      title: "GraphQL vs REST: A Comparative Analysis",
      excerpt: "Understand the pros and cons of GraphQL and REST APIs.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle className="text-lg">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 mb-4">{post.excerpt}</p>
            <Link
              href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Read more →
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
