import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function Matt() {
    const apiurl = 'https://ma.tt/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="Ma.tt" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}