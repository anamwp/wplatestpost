import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function WPLeaders() {
    const apiurl = 'https://wpleaders.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="WP Leaders" back="/product-company" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}