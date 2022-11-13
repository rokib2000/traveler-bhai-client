import React from "react";

const Blog = () => {
  return (
    <div className="my-12">
      <div className="hero bg-base-200 my-6">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Blog</h1>
            <p className="py-6"> </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="card w-full bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title">Difference between SQL and NoSQL?</h2>
            <p>
              SQL databases are relational, and NoSQL databases are non-relational. SQL databases use structured query
              language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL
              databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are
              table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases
              are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
            </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title">What is JWT, and how does it work?</h2>
            <p>
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting data between parties as a
              JSON object. It is compact, readable, and digitally signed using a private key/or a public key pair by an
              Identity Provider .
            </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
            <p>
              JavaScript is a programming language used to write scripts on websites. NodeJS is a JavaScript runtime
              environment. 2. JavaScript can only be run in the browser.
            </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
            <p>
              NodeJS receives multiple client requests and puts them in an event queue. NodeJS is built with the concept
              of event-driven architecture. NodeJS has its own eventloop which is an infinite loop that receives
              requests and processes them
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
