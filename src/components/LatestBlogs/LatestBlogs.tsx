import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({blogs}:{blogs: Blog[]}) => {
    
  return (
    <div className="w-[90%] mx-auto">
        <h1 className="text-center text-4xl my-5">Latest blogs from <span className="text-accent">blogiz</span></h1>
        <p className="text-center text-xl text-gray-400 my-5 w-2/4 mx-auto">
        <i>
        Ahrefs’ Meta Description Generator can be a valuable tool for website owners, digital marketers, and SEO professionals who want to optimize their website's meta descriptions for search engine visibility. By inputting relevant keywords and a brief description of the webpage's content, the tool can generate concise and compelling meta descriptions that accurately represent the page and attract clicks from search engine users. This use case helps improve the website's ranking and click-through rates on search engine result pages.
        </i>
        </p>
        <div className="grid grid-cols-2 gap-4 my-5">
            {
                blogs.slice(0,2).map((blog) =>(
                <LatestBlogCard key={blog.id} blog={blog}/>))
            }
        </div>
        <div className="grid grid-cols-3 gap-4 my-5">
            {
                blogs.slice(2,5).map((blog) =>(
                <BlogCard key={blog.id} blog={blog}/>))
            }
        </div>
    </div>
  );
};

export default LatestBlogs;
