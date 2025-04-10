// "use client"
// import Link from "next/link";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// export default function RelatedPosts({ posts }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {posts.map((post) => (
//         <Card key={post.id}>
//           <CardHeader>
//             <CardTitle className="text-lg">{post.title}</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-sm text-slate-600 mb-4">{post.excerpt}</p>
//             <Link
//               href={`/blogs/${post.slug}`}
//               className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//             >
//               Read more →
//             </Link>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }