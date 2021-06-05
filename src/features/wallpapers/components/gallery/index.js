import React from 'react'
import './styles.css'
const Gallery = (props) => {
    const { gallery, loadMore, saveImagesData, selectedImage } = props
    const { src } = selectedImage;
    return (
        <div className="content">
            <section className="grid">
                {gallery.length && gallery.map((image, index) => (
                    <div
                        key={image.id}
                        className="zoom">
                        <img
                            src={image.urls.small}
                            alt={image.description}
                            data-toggle="modal" data-target="#selected-img-modal"
                            onMouseOver={() => saveImagesData(index)}
                        />
                        <button onClick={() => window.open(src)} className="downloadBtn">Download</button>
                    </div>
                )
                )}
            </section>
            <button type="button" className="btn btn-outline-primary" onClick={loadMore}>Load more...</button>
        </div >
    )
}

export default Gallery