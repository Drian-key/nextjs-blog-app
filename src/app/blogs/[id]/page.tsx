import Comments from "@/components/comments";
import FormComments from "@/components/form-comments";
import { FC } from "react";
import prisma from "@/lib/db";

interface BlogDetailPageParams {
  params: {
    id: string;
  };
}

const BlogDetailPage: FC<BlogDetailPageParams> = async ({ params }) => {
  const post = await prisma.post.findFirst({
    where: {
      id: params.id,
    },
    include: {
      User: true,
    },
  });

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">{post?.title}</h1>
      <p>Written by: {post?.User?.name}</p>
      <div className="mt-4">{post?.content}</div>

      <Comments postId={params.id} />
      <FormComments postId={params.id} />
    </div>
  );
};

export default BlogDetailPage;
