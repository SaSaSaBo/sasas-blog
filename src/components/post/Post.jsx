import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZH4kIDelPH3Hg5Xz3Y06VNieGZVh2fhX3Q&usqp=CAU" 
                alt="" 
                className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem, ipsum dolor.</span>
                <hr />
                <span className="postDate">19.08.01</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Facere, ducimus. Consectetur unde minus ab, 
                quas nam illo quae earum dignissimos eaque vel sint labore aspernatur! 
                Aliquid, magnam a assumenda quaerat inventore blanditiis reiciendis eligendi? 
                Doloribus eum asperiores accusantium consectetur quae dignissimos magni accusamus corrupti perferendis. 
                Tenetur rerum deleniti, 
                ducimus modi odit nihil eum cum commodi a fugit temporibus facere sunt sit laboriosam voluptas sequi ipsa dicta animi voluptatem quos cumque in tempora.
                Eligendi, commodi. Beatae iure, expedita consectetur tempore temporibus labore asperiores minima eaque? 
                Possimus.
            </p>
        </div>
    )
}
