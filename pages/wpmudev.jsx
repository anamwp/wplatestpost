import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function WPMUDEV() {
    const apiurl = 'https://wpmudev.com/blog/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="wpmudev" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}