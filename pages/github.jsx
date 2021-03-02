import React from 'react'
import SingleHeader from '../components/SingleHeader'
import Layout from '../components/Layout'
import Github from '../components/Github'
export default function TG() {
    return (
        <Layout>
            <SingleHeader title="Github Data" />
            <Github />
        </Layout>
    )
}
