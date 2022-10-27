import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function XWP() {
    const apiurl = 'https://xwp.co/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="XWP" back="/product-company" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}