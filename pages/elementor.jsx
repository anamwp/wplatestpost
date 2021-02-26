import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function Elementor() {
    const apiurl = 'https://elementor.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="Elementor" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}