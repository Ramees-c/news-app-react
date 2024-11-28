import React from 'react'

function Card({news}) {
    const {updated, title, abstract, media} = news

    const mediaMetaData = media?.[0]?.["media-metadata"]
    const mediaURL = mediaMetaData?.[0]?.url
    const mediaCaption = media?.[0]?.caption || "Media image"
  return (
    <div className='news-card | grid gap-30'>
        <div className="news-card-date">{updated}</div>
        <article className="grid gap-40">
            <div className="news-card-content">
                <h3>{title}</h3>
                <p>{abstract}</p>
            </div>
            <div className="news-card-media">
                <img src={mediaURL} alt={mediaCaption} />
            </div>
        </article>

    </div>
  )
}

export default Card