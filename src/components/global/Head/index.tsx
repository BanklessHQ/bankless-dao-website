import NextHead from 'next/head'

export interface PageMetaProps {
  title: string
  description: string
  url: string
}

const Head = ({ title = '', description = '', url = '' }: PageMetaProps) => {
  // TODO social images
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
    </NextHead>
  )
}

export default Head