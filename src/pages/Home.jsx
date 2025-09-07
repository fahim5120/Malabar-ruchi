import React, { useState } from 'react'
import Header from '../components/Header'
import AppDownload from '../components/AppDownload'
// import ExploreMenu from '../components/ExploreMenu'

function Home() {
    const[category, setCategory]= useState("All")
          return (
            <div>
                <Header />
                {/* <ExploreMenu category={category} setCategory={setCategory}/> */}
                <AppDownload/>
            </div>
        )
}

export default Home