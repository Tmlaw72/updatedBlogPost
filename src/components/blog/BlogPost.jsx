import { useParams } from 'react-router';
import Content from './Content';
import Comments from './Comments';
import { useEffect, useState } from 'react';
import axios from 'axios';
function BlogPost(){
    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [postData, setPostData] = useState();
    const [authorData, setAuthorData] = useState();

    useEffect(() => {
       // fetch('https://jsonplaceholder.typicode.com/posts/1')
       // .then((response) => response.json())
       // .then((json) => console.log(json)); //once data is retrieved, then do action
    
    //axios.get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}`)
    //.then((res) => setPostData(res.data))
    //.catch(e => alert("Action not successful"))
    //.finally(() => setLoading(false));

    const fetchData = async () => {
        try{
            const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}`);
            setPostData(postRes.data)

            const authorRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`);
            setAuthorData(authorRes.data)
        }
        catch(e){
            console.log(e)
        }
        finally{
            setLoading(false)
        }

    };

    fetchData();
    }, []);

    /*const post = {
    title: 'Travelling Blog Post ' + params.post_id,
    content: "Hello, everyone! And welcome to my new blog. This is where I'm going to be posting about my travels around the world. This includes any travel inside of the United States, the America's, and outside of the continent! I'm so excited to share my anecdotes and findings with you all. Come back to this page to stay up to date!",
    author: "Tamera Law",
    date: "05-03-2026", 
  };  */
    
    return (
    <div className="posting">
        {loading ? (<p>Loading</p>) : 
        <>
        <Content title={postData.title} content={postData.body} author={authorData.name}/>
        <Comments />
        </>
        }
    </div>
    );
}

export default BlogPost;