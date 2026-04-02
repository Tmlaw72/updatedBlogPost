import React, { useRef, useState, useEffect } from 'react';
import IndividualComment from './IndividualComment';
import { useParams } from 'react-router';
import axios from 'axios';

function Comments(){
    const params = useParams();
    console.log(params.post_id);
    
    const [comment, setComment] = useState({
        name: "",
        content: ""
    });

    const [commentList, setCommentList] = useState([]);
    const textboxRef = useRef();

    //const addComment = (comment) => {
    //   setCommentList([...commentList, comment])
    //}
    //console.log(comment);

    const postComment = () => {
        axios.post(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`, {
            name: comment.name,
            body: comment.content,
        }).then((res) => console.log(res));
    };  

    const [commentData, setCommentData] = useState([]);
    useEffect(() => {
    const fetchData = async () => {
        try{
            const comRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`);
            setCommentData(comRes.data);
            //console.log(comRes.data);
            //comRes.data[0] gives one comment
     
        }
        catch(e){
            console.log(e)
        }

    };

    fetchData();
    }, []);
    //console.log("HEWOOOO");
    console.log(commentData);
    //console.log(commentData.name)


    //`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`
    //console.log(res);

    return (
       /* <div className="comment">
            <h2 className="comment">Comments</h2>
            <input value={comment.name} onChange={(e) => setComment({...comment, name: e.target.value})} placeholder='Name' />
            <br></br>
            <textarea value={comment.content} onChange={(e) => setComment({...comment, content: e.target.value})} placeholder="Add a comment" rows="3" cols="75"></textarea>
            <br></br>
            <button onClick={postComment} type="submit" id="button1">Submit</button>
            {commentList.length === 0 ? <p className='comment'>There are no comments to display... it's quiet</p> : <div className='comment'>
            <h3>Existing Comments:</h3>
            <ul className="comment">
                {commentList.map((value, index) => (
                    <li key={index}><IndividualComment value={value}/></li>
                ))} 

            </ul>
            </div>}
        </div> */

       <div className="comment">
            <h2 className="comment">Comments</h2>
            <input value={comment.name} onChange={(e) => setComment({...comment, name: e.target.value})} placeholder='Name' />
            <br></br>
            <textarea value={comment.content} onChange={(e) => setComment({...comment, content: e.target.value})} placeholder="Add a comment" rows="3" cols="75"></textarea>
            <br></br>
            <button onClick={postComment} type="submit" id="button1">Submit</button>
            {commentData.length === 0 ? <p className='comment'>There are no comments to display... it's quiet</p> : <div className='comment'>
            <h3>Existing Comments:</h3>
            <ul className="comment">
               {commentData.map((value, index) => (
                    <li key={value.id}><IndividualComment name={value.name} content={value.body}/></li>
                ))}
            </ul>
            </div>}
        </div>
    ); 

    

}

export default Comments;