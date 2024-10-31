import { Link, useNavigate } from "react-router-dom";



const Post = ({post}) => {

    const {id, title} = post;
    
    const navigate = useNavigate();


    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }

    const handleShowDetail = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div style={postStyle}>
            <h4>post of id: {id}</h4> 
            <p>{title}</p>
            <Link to={`/post/${id}`}>post Details</Link>
            <button onClick={handleShowDetail}>Show Details</button>    
        </div>
    );
};

export default Post;