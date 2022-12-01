import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function DeveloperWPOrg() {
    const apiurl = 'https://developer.wordpress.org/news/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="Developer WP" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}