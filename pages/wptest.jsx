import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function WPOrg() {
    const apiurl = 'https://make.wordpress.org/test/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="WP Test" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}