import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function Developerwp() {
    const apiurl = 'https://poststatus.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="Post Status" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}