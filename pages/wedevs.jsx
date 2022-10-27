import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function Wedevs() {
    const apiurl = 'https://wedevs.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="weDevs" back="/product-company" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}