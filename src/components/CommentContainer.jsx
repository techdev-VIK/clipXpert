import { commentData } from "../utils/constants";


const Comment = ({data}) => {

    const {name, text} = data;

    return (
        <div className="flex bg-gray-100 my-3">
            <img 
            className="w-11 h-11"
            src="https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
            alt="user" />

            <div className="px-3">
                <p className="font-bold ">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}


const CommentList = ({comments}) => {

    return (
        comments.map((comment, index) => (
            <div key={index}>
            <Comment data={comment} />
                <div className="pl-5 border-l-2 border-gray-400 ml-5">
                    <CommentList  comments={comment.replies}/>
                </div>
            </div>
        ) )
    )
}



const CommentContainer = () => {

    return (
        <div className="m-5 p-2">
            <h1 className="font-bold text-2xl">Comments</h1>
            <CommentList comments={commentData}/>
        </div>
    )
}

export default CommentContainer;