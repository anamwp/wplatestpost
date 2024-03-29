import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function Themesgrove() {
    const apiurl = 'https://themesgrove.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="Themesgrove" back="/product-company" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}