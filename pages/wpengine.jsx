import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function WPEngine() {
    const apiurl = 'https://wpengine.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="WP Engine" back="/product-company" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}