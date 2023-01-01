import Head from 'next/head'

export default function Meta(props: { title: string, keywords: string, description: string }) {
    const { title, keywords, description } = props
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'brandbikega',
    keywords: 'brandbikega, brand, bike, ga',
    description: 'brandbikega is a brand bike ga'
}