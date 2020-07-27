import fetch from "node-fetch";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout/Layout';
import Main from '../../components/Main/Main';
import Preview from '../../components/Preview/Preview';
import Search from '../../components/Search/Search';
import { route } from "next/dist/next-server/server/router";

const Jobs = props => {

    const router = useRouter();

    const [ state, setState ] = useState({
        fetching: false,
        job: undefined,
        updating: false,
        title: '',
        body: ''
    });

    useEffect(() => {

        const getJob = async id => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id );

            const data = await res.json();

            setState({ ...state, job: data, fetching: false });
        }

        if(router.query.job) {
            setState({ ...state, fetching: true, query: router.query.job });
            getJob(router.query.job);
        } 

    }, [router.query]);

    const initUpdatePostHandler = () => {
        const title = state.job.title;
        const body = state.job.body;

        setState({ ...state, updating: true, title, body });
    }

    const updatePostHandler = e => {
        e.preventDefault();
        setState({ ...state, updating: false });
    }

    return (
        <Layout>
            <Main> 
                <>
                    <div className="main__content">
                        <h2 className="main__title">
                            {!state.updating ? 'Job posts' : 'Update job post'}
                        </h2>
                        <h5 className="main__subtitle">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </h5>
                        {!state.updating && <Search />}
                    </div>
                    {
                        !state.updating ? (
                            <ul className="main__list">
                                {
                                    props.data.map(post => (
                                        <Link href={`/jobs?job=${post.id}`} key={post.id}>
                                            <li className="main__list--item">
                                                <h3 className="heading">
                                                    {post.title}
                                                </h3>
                                                <p className="text">
                                                    {post.body}
                                                </p>
                                            </li>
                                        </Link>
                                    ))
                                }
                            </ul>
                        ) : (
                            <div className="main__content">
                                <form className="update__form" onSubmit={e => updatePostHandler(e)}>
                                    <div className="form-group">
                                        <input type="text" name="" placeholder="Job Title" value={state.title} onChange={e => setState({ ...state, title: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="" cols="30" rows="10" placeholder="Description" value={state.body} onChange={e => setState({ ...state, body: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <div className="form-flex-container">
                                            <div className="form-half">
                                                <div className="select-container">
                                                    <select name="" id="">
                                                        <option value="category">Category</option>
                                                        <option value="category1">Category 1</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-half">
                                                <div className="select-container">
                                                    <select name="" id="">
                                                        <option value="location">Location</option>
                                                        <option value="location1">Location 1</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="button-container right">
                                            <button type="submit" className="btn btn-primary">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )
                    }
                </>
            </Main>
            {
                <Preview>
                    {
                        state.fetching ? <div className="spinner-center"><div className="spinner"></div></div> : 
                        state.job && (
                            <>
                                <h2 className="preview__title">
                                    {state.job.title}
                                </h2>
                                <h5 className="preview__subtitle">
                                    {state.job.body}
                                </h5>
                                <div className="preview__area"></div>
                                <div className="preview__buttons">
                                    <button className='btn btn-preview white' onClick={initUpdatePostHandler}>
                                        Update
                                    </button>
                                    <button className='btn btn-preview transparent'>
                                        Delete
                                    </button>
                                </div>
                            </>
                        )
                    }
                </Preview>
            }
        </Layout>
    )
};

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await res.json();

    return { 
        props: { data }
    };
};

export default Jobs;