import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist'
import { Navbar, SearchFeed, VideoDetail } from './Components'
import FeedComponent from './Components/Feed'
import ChannelDetail from './Components/ChannelDetail'
import './index.css'
 
function App() {
  return (
    < >
       <BrowserRouter>
       <Box sx={{ backgroundColor: '#000' }}>
       <Navbar />
       <Routes>
       <Route exact path='/' element={<FeedComponent />} />
       <Route path='/video/:id' element={<VideoDetail />} />
       <Route path='/channel/:id' element={<ChannelDetail />} />
       <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
       </Box>
       </BrowserRouter>
    </>
  )
}

export default App
