import React from 'react';
import useTitle from '../Title/Title';

const Blogs = () => {
    useTitle("Blogs")
    return (
        <div className='w-[80%] mx-auto pb-8 '>
            <h1 className='text-4xl font-bold text-center my-6'>FAQ</h1>
            <div>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-[#147970] text-primary-content peer-checked:bg-[#147970]peer-checked:text-secondary-content">
                        <strong>Question : </strong>What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </div>
                    <div className="collapse-content bg-[#147970] text-primary-content peer-checked:bg-[#147970] peer-checked:text-secondary-content">
                        <p>
                            <strong>Ans :</strong> <br /> <strong>Access Token : </strong> An access token is a credential that is used to access protected resources on behalf of a user or an application.  <br />  <p className='mb-2 mt-1'>Access tokens are typically short-lived and should be stored in a secure and non-persistent manner. One common approach is to store the access token in memory or a secure storage mechanism provided by the operating system or programming language. Examples include session storage or a token management library.</p>
                            <strong>Refresh Token : </strong> A refresh token is a credential that is used to obtain a new access token without requiring the user to log in again. While access tokens have a limited lifespan, refresh tokens are typically long-lived and can be used to request new access tokens whenever the current one expires. Refresh tokens are securely stored on the client-side. <br />  <p > Refresh tokens are long-lived and should be stored securely to prevent unauthorized access. They are commonly stored in a secure HTTP-only cookie, which ensures that the token is only accessible to the server. The cookie should have the secure and SameSite attributes enabled to prevent cross-site request forgery (CSRF) attacks.</p>
                        </p>
                    </div>
                </div>
                <div className="collapse border mt-2">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-[#147970] text-primary-content peer-checked:bg-[#147970] peer-checked:text-secondary-content">
                        <strong>Question : </strong>Compare SQL and NoSQL databases?
                    </div>
                    <div className="collapse-content bg-[#147970] text-primary-content peer-checked:bg-[#147970] peer-checked:text-secondary-content">
                        <ul className='list-disc ps-4'>
                            <li> SQL databases are relational, and NoSQL databases are non-relational.</li>
                            <li>SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                            </li>
                            <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                            </li>
                            <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                            </li>
                            <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.

                            </li>
                        </ul>
                    </div>
                </div>
                <div className="collapse border mt-2">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-[#147970] text-primary-content peer-checked:bg-[#147970] peer-checked:text-secondary-content">
                        <strong>Question : </strong>Compare SQL and NoSQL databases?
                    </div>
                    <div className="collapse-content bg-[#147970] text-primary-content peer-checked:bg-[#147970] peer-checked:text-secondary-content">
                        <p><strong>Ans : </strong> <br />
                            <strong>Express js : </strong> Express.js is a popular web application framework for Node.js. It is a minimal and flexible framework that provides a simple set of features for building web applications and APIs. Express.js allows developers to create server-side applications using JavaScript and provides a robust set of HTTP utility methods and middleware.
                        </p>
                        <p>
                            <strong> Nest js : </strong> NestJS is a progressive, server-side framework for building efficient and scalable web applications. It is built on top of Node.js and leverages TypeScript, which brings object-oriented programming concepts and static typing to JavaScript development.
                        </p>
                    </div>
                </div>
                <div className="collapse border mt-2">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-[#147970] text-primary-content peer-checked:bg-[#147970] peer-checked:text-secondary-content">
                        <strong>Question : </strong>What is express js? What is Nest JS ?
                    </div>
                    <div className="collapse-content bg-[#147970] text-primary-content peer-checked:bg-[#147970] peer-checked:text-secondary-content">
                        <p>
                            <strong>Ans : </strong>
                            <span>MongoDB's Aggregation Framework is a powerful tool for data processing and analysis within MongoDB. It allows you to perform complex data transformations, aggregations, and computations on the data stored in your MongoDB collections.</span>
                        </p>
                        <p className='mt-2'><strong>Here's a summary of how MongoDB's Aggregation Framework works:</strong></p>
                        <ul className='list-disc ps-4'>
                            <li>Pipeline Approach: The Aggregation Framework operates using a pipeline approach. You construct an aggregation pipeline consisting of multiple stages, with each stage transforming the data in some way. Each stage takes the output of the previous stage and passes it to the next stage, forming a sequence of data transformations.</li>
                            <li>Stages: The pipeline stages in the Aggregation Framework can include operations like filtering, grouping, sorting, projecting, joining, computing new fields, and performing various computations and transformations. Each stage modifies the data in some manner, allowing you to shape and aggregate the data according to your requirements.

                            </li>
                            <li>Data Processing: The input data for aggregation can come from a single collection or multiple collections. The pipeline stages are executed in the order specified, and the data is processed sequentially through each stage. As the data flows through the pipeline, each stage applies its operation and transforms the data accordingly.

                            </li>
                            <li>Result Sets: The output of the Aggregation Framework is a result set based on the operations performed in the pipeline. The result can be a combination of aggregated values, computed fields, grouped data, or any other desired data transformation. The output can be returned as a cursor, allowing for efficient processing of large result sets.

                            </li>
                            <li>Optimization: MongoDB's Aggregation Framework includes optimization techniques to improve performance. It can utilize indexes, perform parallel processing on multiple shards in a sharded cluster, and use various query optimization strategies to ensure efficient execution of aggregation queries.

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;