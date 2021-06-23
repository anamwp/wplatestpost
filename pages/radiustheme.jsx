import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function RadiusTheme() {
    const apiurl = 'https://radiustheme.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="Radius Theme" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}