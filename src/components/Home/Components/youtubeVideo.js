import React from 'react'
function YoutubeVideo(){
    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width:"100%",
        height: "0",
        marginTop:100,
        paddingBottom: '56.25%',
        position: 'relative',
        overflow: 'hidden',
      }}>
      <iframe
        title="YouTube video"
        width="100%"
        height="80%"
        src="https://www.youtube.com/embed/84_RVj_5V8Y"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </div>
}

export default YoutubeVideo