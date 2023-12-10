import { Song } from '@/types'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import React from 'react'

const useLoadSong = (Song:Song) =>{
    const supabaseClient = useSupabaseClient();

    if(!Song) return
    const {data:songData} = supabaseClient.storage.from('songs').getPublicUrl(Song.song_path)
    return songData.publicUrl
}

export default useLoadSong;