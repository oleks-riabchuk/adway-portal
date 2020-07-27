import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

import Layout from '../components/Layout/Layout';
import Main from '../components/Main/Main';
import Preview from '../components/Preview/Preview';

import { CheckedIcon } from '../components/Icons/Icons';

const UpdateAd = () => {

    const [ state, setState ] = useState({
        title: '',
        description: '',
        targetUrl: '',
        images: [
            {
                id: 0,
                image: null,
                error: false,
                errorMessage: ''
            }
        ]
    });

    const onDrop = acceptedFiles => {
        const totalFiles = acceptedFiles.length;
        const currentImg = Object.assign({}, state.images[state.images.length - 1]);
        const stateImages = [...state.images];
        if(totalFiles === 1) {
            // check for file type 
            const file = acceptedFiles[0];
            const types = ['image/png', 'image/jpeg', 'image/gif'];
            const checkFileType = () => {
                let correct = false;
                types.forEach(type => {
                    if(type === file.type) return correct = true; 
                });
                return correct;
            };
            if(checkFileType()) {
                currentImg.image = file;
                // last item in array is item to update
                stateImages[stateImages.length - 1] = currentImg;
                // // add new item
                const lastId = stateImages[stateImages.length - 1].id;
                const newImageObj = {
                    id: lastId + 1,
                    image: null,
                    error: false,
                    errorMessage: ''
                };
                stateImages.push(newImageObj);

                setState({ ...state, images: stateImages }); 
            } else {
                currentImg.error = true;
                currentImg.errorMessage = 'File format should be <span class="blue">JPG, PNG</span> or <span class="blue">GIF</span>';
                stateImages[stateImages.length - 1] = currentImg;
                setState({ ...state, images: stateImages });
            }
                       
        } else {
            // fail message
            currentImg.error = true;
            currentImg.errorMessage = 'Please select only <span class="blue">one image</span>';
            stateImages[stateImages.length - 1] = currentImg;
            setState({ ...state, images: stateImages });
        }
    }
        
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const submitFormHandler = e => {
        e.preventDefault();

        // dont send last image
        const images = [...state.images];
        images.pop();
        console.log(images)
    }

    return (
        <Layout>
            <Main>
                <div className="main__content">
                    <h2 className="main__title">
                        Update Ad
                    </h2>
                    <h5 className="main__subtitle">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </h5>
                    <form className="update-ad__form" onSubmit={e => submitFormHandler(e)}>
                        <div className="form-group">
                            <input type="text" name="title" placeholder="Title" value={state.title} onChange={e => setState({ ...state, title: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <textarea name="description" cols="30" rows="10" placeholder="Description" value={state.description} onChange={e => setState({ ...state, description: e.target.value })} />
                        </div>

                        <div className="form-group files">
                            <div className="update-ad__files">
                                {
                                    state.images.map(image => {
                                        return (
                                            <div className={`update-ad__file ${isDragActive ? 'active' : ''} ${!image.image ? 'text' : ''}`} {...getRootProps()} key={image.id}>
                                                <input type="file" name="image" {...getInputProps()} />
                                                {image.image ? (
                                                    <>
                                                        <img src={URL.createObjectURL(image.image)} alt="" className="preview-img"/>
                                                        <div className="image-uploaded">
                                                            <CheckedIcon />
                                                        </div>
                                                    </>
                                                ) : (
                                                    !image.error ? <p><span className="blue">Browse</span> or drag and drop to upload an image</p> : <p dangerouslySetInnerHTML={{ __html: image.errorMessage }}></p>
                                                )}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="form-group">
                            <input type="text" name="targetUrl" placeholder="Target-url" value={state.targetUrl} onChange={e => setState({ ...state, targetUrl: e.target.value })} />
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
            </Main>
            <Preview>
                <h2 className="preview__title">
                    Preview Ad
                </h2>
                <h5 className="preview__subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h5>
                <img src="/images/phone.png" alt="phone" className="update-ad__phone"/>
                <div className="preview__buttons">
                    <button className='btn btn-preview white'>
                        Update
                    </button>
                    <button className='btn btn-preview transparent'>
                        Delete
                    </button>
                </div>
            </Preview>
        </Layout>
    )
}

export default UpdateAd;