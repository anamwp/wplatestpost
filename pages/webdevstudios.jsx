import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function WebDevStudio() {
    const apiurl = 'https://webdevstudios.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="WebDevStudios" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}