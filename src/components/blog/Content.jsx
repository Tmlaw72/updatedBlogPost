import React from "react";

function Content({title, content, author}){
    return (
        <main className="content">
            <h1 className="content">{title}</h1>
            <p className="content">{content}</p>
            <p className="content">
                <strong className="content">Author:</strong> {author}
            </p>

        </main>

    );

}

export default Content;