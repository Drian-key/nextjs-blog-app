import { FC } from "react";
import prisma from "@/lib/db";
import { format } from "date-fns";
import Image from "next/image";

interface CommentsProps {
  postId: string;
}

const Comments: FC<CommentsProps> = async ({ postId }) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      User: true,
    },
  });

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="mb-4 bg-slate-200 p-2">
            <div className="flex items-center mb-2">
              <div className="text-blue-500 font-bold mr-2 flex gap-2 items-center">
                <Image
                  src={comment.User?.image as string}
                  alt="tes"
                  width={500}
                  height={500}
                  className="w-8 h-auto rounded-full"
                />
                <p>{comment.User?.name}</p>
              </div>
              <div className="text-gray-500">
                <small>{format(comment.createdAt, "MMMM d, yyyy")}</small>
              </div>
            </div>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
