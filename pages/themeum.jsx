import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function Themeum() {
    const apiurl = 'https://themeum.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="Themeum" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}