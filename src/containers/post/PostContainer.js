import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PostComponent from '../../components/post/PostComponent'
import { readPost, unloadPost } from '../../modules/posts'

const PostContainer = () => {
    const { postId } = useParams()
    const dispatch = useDispatch()

    const {
        postDetail,
        postDetailError,
        postDetailLoading,

    } = useSelector(({ posts, loading }) => ({
        postDetail: posts.postDetail,
        postDetailError: posts.postDetailError,
        postDetailLoading: loading['posts/READ_POST'],
    }));

    useEffect(() => {
        dispatch(unloadPost());
    }, [dispatch]);

    useEffect(() => {
        if (postId) {
            dispatch(readPost(postId));
        }
    }, [dispatch, postId]);
    return (
        <PostComponent 
            postDetail={postDetail}
            postDetailError={postDetailError}
            loading={postDetailLoading}
        />
    )
}
export default PostContainer