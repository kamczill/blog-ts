import { Helmet } from 'react-helmet';

interface SeoProps {
    title: string;
    description: string;
}

const SEO = ({ title, description }: SeoProps) => (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );

export default SEO