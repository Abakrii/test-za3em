import React, { useEffect, useState } from 'react'
import Gallery from './components/gallery'
const Wallpapers = () => {
    const [gallery, setGallery] = useState([]);
    const [searchedQuery, setSearchQuery] = useState('')
    const [page, setPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState({
        description: '',
        src: '',
        username: '',
        page: '',
    })
    let ROOT = `https://api.unsplash.com/`;
    let KEY = "?client_id=Ec1n2AKEb00jiprb4C_6LFncc57yZHxst8TYXNPvp7s";
    let PERPAGE = `&per_page=30`;

    const fetchInitialImages = () => {
        setSearchQuery('Curated Collection')
        const url = `${ROOT}photos${KEY}${PERPAGE}&page=1`
        fetch(url)
            .then(response => response.json())
            .then(res => {
                let results = res
                setGallery([...results])
            })
            .catch(error => console.log(error))
    }

    const saveImagesData = (index) => {
        setSelectedImage({
            description: gallery[index].description,
            src: gallery[index].urls.regular,
            username: gallery[index].user.username,
            page: gallery[index].user.links.html,
        })
    }
    const loadMore = () => {
        setPage(page + 1);
        const url = `${ROOT}search/photos${KEY}&query=${searchedQuery}${PERPAGE}&page=${page}`;
        fetch(url)
            .then(response => response.json())
            .then(res => {
                let results = res.results
                setGallery([...gallery, ...results])
            })
            .catch(error => console.log(error))

    }
    useEffect(() => {
        fetchInitialImages()
    }, [])

    return (
        <>
            <h1 className="text-center">Unsplash Wallpaper Downloader</h1>
            <Gallery gallery={gallery} loadMore={loadMore} saveImagesData={saveImagesData} selectedImage={selectedImage} />
        </>
    )

}




export default Wallpapers