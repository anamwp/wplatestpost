import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function Techcrunch() {
    const apiurl = 'https://techcrunch.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="Tech Crunch" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}