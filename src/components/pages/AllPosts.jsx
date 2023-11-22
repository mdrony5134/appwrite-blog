import{Container, PostCard} from "../index"
import appwriteService from '../../appwrite/conf'
import { useEffect, useState } from "react"
import AllPostBanner from "../AllPostBanner"
const AllPosts = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{},[])
    appwriteService.getPosts([]).then((posts)=>{
        setLoading(false)
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
  <div>
    <AllPostBanner/>
    {loading ? (
         <div className="py-48 text-center text-2xl">loading...</div>
    ) : (
        <div className="w-full py-8">
        <Container>
            <div className="flex flex-wrap">
                {posts.map((post)=>(
                    <div key={post.$id} className="p-2">
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
    )}
  </div>
  )
}

export default AllPosts