import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RelatedPosts from "./components/RelatedPosts";
import CommentSection from "./components/CommentSection";
import Link from "next/link";

export default async function Page({ params }) {
  const slug = (await params).slug;
  const title = slug.replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl capitalize font-bold text-slate-800 mb-4">
            {title}
          </h1>

          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <Avatar>
                <AvatarImage
                  src="https://picsum.photos/id/237/200/300"
                  alt="John Doe"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-slate-700">Aaxel Insurance</p>
                <p className="text-sm text-slate-500">
                  Published on May 15, 2023 • 10 min read
                </p>
              </div>
            </div>

            <Link href="/call-back-request">
              <button className="py-2.5 px-6 rounded-lg sm:px-8 uppercase text-white bg-[#2a80b4] hover:bg-[#9ecb75] hover:text-black text-base sm:text-lg font-bold transition duration-300">
                Get a Quote
              </button>
            </Link>
          </div>

          <img
            src="https://app.requestly.io/delay/1000/https://heroui.com/images/fruit-4.jpeg"
            alt="blog image"
            className="rounded-lg mb-8 w-full h-auto max-w-4xl mx-auto"
          />

          <div className="prose prose-slate max-w-none">
            <p className="text-base sm:text-lg font-medium my-2">
              Commercial auto insurance is an essential investment for
              businesses of all sizes, yet it's often misunderstood. Many
              businesses, whether startups or established enterprises, fall prey
              to common myths that can lead to financial losses, insufficient
              coverage, or unexpected liabilities. Aaxel Insurance stands as a
              reliable partner in helping business owners debunk these
              misconceptions and secure the right policies to protect their
              assets.
            </p>
            <p className="text-base sm:text-lg font-medium my-2">
              In this article, we'll uncover the common misconceptions about
              commercial auto insurance, explain the truth behind these myths,
              and provide guidance to ensure you're fully informed. This
              detailed guide will help you make better decisions for your
              business and avoid pitfalls associated with incorrect assumptions.
            </p>

            <div className="my-2">
              <h2 className="text-2xl sm:text-3xl font-semibold my-4">
                Introduction to Commercial Auto Insurance
              </h2>
              <p className="text-base sm:text-lg font-medium my-2">
                Commercial auto insurance is specifically designed to protect
                vehicles used for business purposes. Whether you own a single
                delivery van or manage a fleet of trucks, having the right
                coverage ensures that you are financially protected in case of
                accidents, damages, or other liabilities.
              </p>
              <p className="text-base sm:text-lg font-medium my-2">
                Despite its importance, many business owners misunderstand its
                role and coverage. These misconceptions often stem from
                assumptions about pricing, scope of coverage, and who needs the
                policy. Without the right information, businesses risk being
                underinsured or overpaying for coverage they don’t need.
              </p>
            </div>

            <div className="my-2">
              <h2 className="text-2xl sm:text-3xl font-semibold my-4">
                Misconception 1: “Personal Auto Insurance Covers Business Use”
              </h2>
              <p className="text-base sm:text-lg font-medium my-2">
                Personal auto insurance does not cover business-related vehicle
                use. Commercial auto insurance caters to the unique risks
                associated with business vehicle operations, ensuring protection
                against accidents and liabilities.
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold my-4">Truth:</h2>
              <p className="text-base sm:text-lg font-medium my-2">
                Without proper commercial coverage, claims can be denied if the
                vehicle was used for business purposes. It's crucial to ensure
                you have the right type of policy for your needs.
              </p>
            </div>
          </div>
        </article>

        {/* Centered Get a Quote button */}
        <div className="flex justify-center mt-8">
          <Link href="/call-back-request">
            <button className="py-2.5 px-6 rounded-lg sm:px-8 uppercase text-white bg-[#2a80b4] hover:bg-[#9ecb75] hover:text-black text-base sm:text-lg font-bold transition duration-300">
              Get a Quote
            </button>
          </Link>
        </div>

        <hr className="my-12" />

        <section className="max-w-4xl mx-auto mb-12 px-4 sm:px-0">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Related Posts</h2>
          <RelatedPosts />
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-0">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Comments</h2>
          <CommentSection />
        </section>
      </main>
    </div>
  );
}
