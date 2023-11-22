import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom"

const AuthBanner = () => {
  return (
    <div className="px-28 flex mt-40 container justify-between gap-10 items-center">
    <div className="text-black text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold capitalize mb-5">Read the most interesting blog</h1>
        <p className="text-black w-3/5 mx-auto mb-5">Start your blog today and join a community of writers and readers  who are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips and tutorials.</p>
        <Link to={"/add-post"} className='text-xl mt-6 px-4 py-2 bg-orange-600 text-white  rounded font-semibold inline-flex items-center gap-2 hover:bg-green-500'>Post Blog <FaArrowRightLong/></Link>
    </div>
    <div className="lg:max-w-[841px]">
      <img src="/blog-writer.png"  className="w-full"/>
    </div>
</div>
  )
}

export default AuthBanner