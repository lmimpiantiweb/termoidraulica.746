import { Helmet } from 'react-helmet-async';


interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    noindex?: boolean;
    structuredData?: object;
}

const SEO = ({ title, description, canonical, noindex = false, structuredData }: SEOProps) => {
    const siteUrl = 'https://lavianoimpianti.it';
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Canonical */}
            <link rel="canonical" href={fullCanonical} />

            {/* Robots */}
            {noindex && <meta name="robots" content="noindex, nofollow" />}
            {!noindex && <meta name="robots" content="index, follow" />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullCanonical} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
