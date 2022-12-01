import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function Masterwp() {
    const apiurl = 'https://masterwp.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="Master WP" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}