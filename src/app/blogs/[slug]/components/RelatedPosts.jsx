import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RelatedPosts() {
  const posts = [
    {
      id: 1,
      title: "The Best Travel Insurance for all your needs.",
      excerpt:
        "Explore how Aaxel is changing the landscape of Travel insurance with super fast claims.",
    },
    {
      id: 2,
      title: "Best Insruance policy for your car in 2025.",
      excerpt:
        "Drive without any tension about your car.",
    },
    {
      id: 3,
      title: "Your best choice for Life Insurance this summer.",
      excerpt: "The best life inusrance for your whole family",
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
