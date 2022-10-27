import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function BusinessBloomer() {
    const apiurl = 'https://www.businessbloomer.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="Business Bloomer" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}