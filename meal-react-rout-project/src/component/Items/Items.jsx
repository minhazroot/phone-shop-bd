import { useLoaderData } from "react-router-dom";




const Items = () => {
    const comments = useLoaderData;
    console.log(comments);
    return (
        <div>
            {/* <p>Items {comments.length} </p> */}

        </div>
    );
};

export default Items;