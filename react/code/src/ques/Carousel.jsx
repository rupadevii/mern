import { useState } from 'react'

export default function Carousel() {
    const images = [
        "https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/25125210/frieren_beyond_journeys_end_gallery_sekw.jpg",
        "https://static0.polygonimages.com/wordpress/wp-content/uploads/2025/12/frieren-looking-up-in-the-trailer-for-season-2.jpg?w=1200&h=628&fit=crop",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoAdzx9dR_YlcVIeTDtMBz933DV8yXHH5LRqifCIkSxTZtKCkLs-DBP7GB-QEJdSqol7j7lOOoGto1QBpzz1G0oAoh9O0Z1zkcrhV1w&s=10",
        "https://static0.srcdn.com/wordpress/wp-content/uploads/2023/10/frieren-1.jpg?w=1200&h=675&fit=crop",
    ]

    const [index, setIndex] = useState(0)

    function handlePrev(){
        setIndex(prev => prev===0 ? images.length-1 : prev-1)
    }

    function handleNext(){
        setIndex(prev => prev===images.length-1 ? 0: prev+1)
    }

    return (
        <div>
            <img src={images[index]} alt="image" height="300px" width="500px"/>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>

            <div>
                {images.map((_, id) => (
                    <button className={`navigator ${index===id && "active"}`} onClick={() => setIndex(id)}></button>
                ))}
            </div>
        </div>
    )
}
