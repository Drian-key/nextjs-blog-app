"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEvent, useState } from "react";

interface FormCommentsProps {
  postId: string;
}

const FormComments: FC<FormCommentsProps> = ({ postId }) => {
  const [comment, setCommet] = useState<string>("");
  const router = useRouter();
  const { data } = useSession();

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommet(e.target.value);
  };

  const handleSubmitComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/comments", {
        text: comment,
        postId,
      });

      if (response.status === 200) {
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
    setCommet("");
  };

  return (
    <form onSubmit={handleSubmitComment}>
      <div className="mt-4">
        <label
          htmlFor="comments"
          className="block text-gray-700 text-sm font-bold mb-2">
          Add Comments
        </label>
        <input
          type="text"
          disabled={!data?.user.email}
          className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          name="comment"
          value={comment}
          onChange={handleCommentChange}
          required
        />
        <button
          disabled={!data?.user.email}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-2 disabled:bg-gray-400">
          Submit Comment
        </button>
      </div>
    </form>
  );
};

export default FormComments;
