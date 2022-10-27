import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function RichTabor() {
    const apiurl = 'https://richtabor.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="Rich Tabor" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}