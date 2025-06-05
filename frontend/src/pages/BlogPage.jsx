import { MdOutlineArrowRightAlt } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

const BlogPage = () => {
  return (
    <div className="w-full h-screen pt-24 px-10">
      {/* Date and Event */}
      <div className="flex items-center gap-2 font-[300] text-[#c1dbde]">
        <p className="flex items-center">Tue 27 Aug 2024</p>
        <span className="pb-1">|</span>
        <p className="underline text-lg">News & Events</p>
      </div>

      <h1 className="mt-4 text-4xl font-[700] text-teal-400">
        Season like this and a day like this...
      </h1>

      <div className="mt-5 flex items-center gap-3 sm:gap-4">
        {/* profile_pic div */}
        <div className="overflow-hidden w-10 h-10 rounded-full flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ8uPahgoQ-QpRIzGilpiskF67MbGATe-Hxg&s"
            alt="profile_img"
          />
        </div>

        {/* User Detail div */}
        <div className="flex flex-col tracking-wide">
          <h1>Little Krishna</h1>
          <p className="text-xs font-[100]">Universe Creator</p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <hr />
        {/* Rxns Div */}
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1 text-sm">
            <MdOutlineRemoveRedEye size={20} />
            99B+
          </p>
          <p className="flex items-center gap-1 text-sm">
            <FaRegHeart size={18} />
            99M+
          </p>
        </div>
        <hr />
      </div>

      {/* Content Div */}
      <div className="text-xl mt-4">
        <p>
          If you just love to travel and reach places where you can relax your mind and eyes with the beauty of nature then this is it. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat eius vitae nesciunt, voluptas repudiandae quisquam incidunt corrupti adipisci natus perspiciatis vel at deserunt explicabo voluptatibus obcaecati exercitationem repellat nisi ab doloremque, eligendi atque odio, labore consequuntur voluptates? Voluptatem, itaque quidem.
        </p>
      </div>

      {/* image div */}
      <div className="flex mx-auto w-full md:w-170 h-[40vh] md:h-[45vh] lg:h-[50vh] overflow-hidden rounded-xl items-center mt-4">
        <img
          className="h-full w-full"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
          alt="blog_img"
        />
      </div>

      <div>
        <ol type="1" className="flex flex-col gap-4 text-lg mt-8">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati ipsum sequi rerum doloribus quae minima voluptatem facilis, ex cumque deleniti accusantium earum fuga maxime reprehenderit reiciendis alias consequatur quo quam qui commodi! Sunt incidunt labore soluta harum nisi, dignissimos repellendus tempora veniam assumenda laboriosam voluptatum id amet eligendi quam minima fugit? Vitae, officiis sapiente est fuga facere sunt nisi eaque, rem voluptates consectetur soluta et, cupiditate quos tenetur? At deserunt praesentium amet, qui obcaecati sit libero, placeat ipsum eveniet asperiores cum accusamus officia saepe doloremque atque error inventore a vero alias explicabo officiis ea quibusdam? Cumque ab consectetur vero.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati ipsum sequi rerum doloribus quae minima voluptatem facilis, ex cumque deleniti accusantium earum fuga maxime reprehenderit reiciendis alias consequatur quo quam qui commodi! Sunt incidunt labore soluta harum nisi, dignissimos repellendus tempora veniam assumenda laboriosam voluptatum id amet eligendi quam minima fugit? Vitae, officiis sapiente est fuga facere sunt nisi eaque, rem voluptates consectetur soluta et, cupiditate quos tenetur? At deserunt praesentium amet, qui obcaecati sit libero, placeat ipsum eveniet asperiores cum accusamus officia saepe doloremque atque error inventore a vero alias explicabo officiis ea quibusdam? Cumque ab consectetur vero</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati ipsum sequi rerum doloribus quae minima voluptatem facilis, ex cumque deleniti accusantium earum fuga maxime reprehenderit reiciendis alias consequatur quo quam qui commodi! Sunt incidunt labore soluta harum nisi, dignissimos repellendus tempora veniam assumenda laboriosam voluptatum id amet eligendi quam minima fugit? Vitae, officiis sapiente est fuga facere sunt nisi eaque, rem voluptates consectetur soluta et, cupiditate quos tenetur? At deserunt praesentium amet, qui obcaecati sit libero, placeat ipsum eveniet asperiores cum accusamus officia saepe doloremque atque error inventore a vero alias explicabo officiis ea quibusdam? Cumque ab consectetur vero</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati ipsum sequi rerum doloribus quae minima voluptatem facilis, ex cumque deleniti accusantium earum fuga maxime reprehenderit reiciendis alias consequatur quo quam qui commodi! Sunt incidunt labore soluta harum nisi, dignissimos repellendus tempora veniam assumenda laboriosam voluptatum id amet eligendi quam minima fugit? Vitae, officiis sapiente est fuga facere sunt nisi eaque, rem voluptates consectetur soluta et, cupiditate quos tenetur? At deserunt praesentium amet, qui obcaecati sit libero, placeat ipsum eveniet asperiores cum accusamus officia saepe doloremque atque error inventore a vero alias explicabo officiis ea quibusdam? Cumque ab consectetur vero</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur obcaecati ipsum sequi rerum doloribus quae minima voluptatem facilis, ex cumque deleniti accusantium earum fuga maxime reprehenderit reiciendis alias consequatur quo quam qui commodi! Sunt incidunt labore soluta harum nisi, dignissimos repellendus tempora veniam assumenda laboriosam voluptatum id amet eligendi quam minima fugit? Vitae, officiis sapiente est fuga facere sunt nisi eaque, rem voluptates consectetur soluta et, cupiditate quos tenetur? At deserunt praesentium amet, qui obcaecati sit libero, placeat ipsum eveniet asperiores cum accusamus officia saepe doloremque atque error inventore a vero alias explicabo officiis ea quibusdam? Cumque ab consectetur vero</li>
        </ol>
      </div>

      <hr className="py-6 mt-6" />
    </div>
  );
};

export default BlogPage;
