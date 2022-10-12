import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function Tenup() {
    const apiurl = 'https://10up.com/wp-json/wp/v2/posts/';
    return (
        <Layout>
            <SingleHeader title="10UP" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}