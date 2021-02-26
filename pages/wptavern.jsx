import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function WPTavern() {
    const apiurl = 'https://wptavern.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="WP Tavern" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}