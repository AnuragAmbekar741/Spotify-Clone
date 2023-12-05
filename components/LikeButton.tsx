"use client"

import useAuthModal from "@/hooks/useAuthModal"
import { useUser } from "@/hooks/useUser"
import { useSessionContext } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

interface LikeButtonProps{
    songId:string
}
const LikeButton:React.FC<LikeButtonProps> = ({songId}) => {
  
    const router = useRouter()
    const {supabaseClient} = useSessionContext()

    const authModal = useAuthModal()
    const {user} = useUser()

    const [liked,setLiked] = useState<boolean>(false)

    useEffect(()=>{
        if(!user?.id) return
        
        const fetchData= async () => {
            const {data,error} = await supabaseClient.from('liked_songs').select('*').eq('user_id',user.id).eq('song_id',songId)

            if(!error && data) setLiked(true)
        }
        fetchData()
    },[songId,supabaseClient,user?.id])

    const Icon = liked ? AiFillHeart : AiOutlineHeart

  return (
   <button>
    <Icon color={liked?'#22c55e':'white'}/>
   </button>
  )
}

export default LikeButton