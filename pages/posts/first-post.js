import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import React from 'react'
import Layout from '../../components/layout'

function FirstPost() {
	return (
		<Layout>
			<Script
				src="https://connect.facebook.net/en_US/sdk.js"
				strategy="lazyOnload"
				onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
			/>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>first-post</h1>
			<h2>
				<Link href="/">Back to homepage</Link>
			</h2>
		</Layout>
	)
}

export default FirstPost