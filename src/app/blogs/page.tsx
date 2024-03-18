import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";

const BlogsPage = async() => {
    const res = await fetch("http://localhost:5000/blogs",{
        cache:"no-store"
    });
    const blogs = await res.json();
    return (
      <div className="w-[90%] mx-auto ">
         <h1 className="text-center text-4xl my-5">All blogs from <span className="text-accent">blogiz</span></h1>
         <p className="text-center text-xl text-gray-400 my-5 w-2/4 mx-auto">
        <i>
        Ahrefs’ Meta Description Generator can be a valuable tool for website owners, digital marketers, and SEO professionals who want to optimize their website's meta descriptions for search engine visibility. By inputting relevant keywords and a brief description of the webpage's content, the tool can generate concise and compelling meta descriptions that accurately represent the page and attract clicks from search engine users. This use case helps improve the website's ranking and click-through rates on search engine result pages.
        </i>
        </p>
        <div className="grid grid-cols-3 gap-4 my-10">
           {
            blogs.map((blog: Blog)=><BlogCard 
            key={blog.id} blog={blog}/>)
           }
        </div>
      </div>
    );
  };
  
  export default BlogsPage;
  