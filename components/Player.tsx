"use client"

import useGetSongById from '@/hooks/useGetSongById'
import usePlayer from '@/hooks/usePlayer'
import React from 'react'

const Player = () => {
    const player = usePlayer()
    const {song} = useGetSongById(player.activeId)
    // const {songUrl} = useGetSongById
  return (
    <div>Player</div>
  )
}

export default Player