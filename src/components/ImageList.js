import ShowImage from "./ShowImage"

function ImageList({data}) {
    const image=data.map((image,key)=>{
        return <ShowImage image={image} key={image.id}/>
    })
    return(
        <div>
            {image}
        </div>
    )
}

export default ImageList