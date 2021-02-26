import React from 'react'
import Content from '../components/Content';
import Layout from '../components/Layout';
import SingleHeader from '../components/SingleHeader';


export default function Gutenbergtimes() {
    const apiurl = 'https://gutenbergtimes.com/wp-json/wp/v2/posts';
    return (
        <Layout>
            <SingleHeader title="Gutenberg Times" />
            <Content apiurl = {apiurl} />
        </Layout>
    )
}