import Comments from "@/components/comments";
import FormComments from "@/components/form-comments";

const BlogDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">Post One</h1>
      <p>Written by: john doe</p>
      <div className="mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        recusandae consectetur consequuntur repellat. Incidunt dolore neque
        veniam blanditiis qui repellendus.
      </div>

      <Comments />
      <FormComments />
    </div>
  );
};

export default BlogDetailPage;
