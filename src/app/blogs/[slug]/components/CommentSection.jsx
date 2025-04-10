// "use client"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";

// export default function CommentSection() {
//   const comments = [
//     {
//       id: 1,
//       author: "Alice Johnson",
//       content:
//         "Great article! I especially liked the part about AI-powered design assistance.",
//       date: "2 days ago",
//     },
//     {
//       id: 2,
//       author: "Bob Smith",
//       content:
//         "I'm curious about how AI will impact job prospects for web developers. Any thoughts on that?",
//       date: "1 day ago",
//     },
//   ];

//   return (
//     <div className="space-y-8">
//       <div className="space-y-6">
//         {comments.map((comment) => (
//           <div key={comment.id} className="flex space-x-4">
//             <Avatar>
//               <AvatarImage
//                 src="https://picsum.photos/200/300"
//                 alt={comment.author}
//               />
//               <AvatarFallback>
//                 {comment.author
//                   .split(" ")
//                   .map((n) => n[0])
//                   .join("")}
//               </AvatarFallback>
//             </Avatar>
//             <div className="flex-1">
//               <div className="flex items-center space-x-2 mb-1">
//                 <span className="font-medium text-slate-700">
//                   {comment.author}
//                 </span>
//                 <span className="text-sm text-slate-500">{comment.date}</span>
//               </div>
//               <p className="text-slate-600">{comment.content}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div>
//         <h3 className="text-xl font-semibold text-slate-800 mb-4">
//           Leave a comment
//         </h3>
//         <Textarea placeholder="Write your comment here..." className="mb-4" />
//         <Button>Post Comment</Button>
//       </div>
//     </div>
//   );
// }
