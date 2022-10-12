import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function WPOrg() {
    const apiurl = 'https://wpvip.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="WP VIP" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}