import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function WPdeveloper() {
    const apiurl = 'https://wpdeveloper.net/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="WPDeveloper" back="/product-company" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}