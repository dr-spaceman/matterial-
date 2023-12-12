import NextLink from 'next/link'
import { Link } from '../../../matterial/src'

import { getDocsFiles } from 'utils/mdx'
import { capitalize } from 'utils/string'
import { Layout } from 'components/Layout'

type Props = {
  slugs: string[]
}

export default function Foo({ slugs }: Props) {
  return (
    <Layout>
      <h1>UI Components</h1>
      <ul>
        {slugs.map(slug => (
          <li key={slug}>
            <NextLink href={`/components/${slug}`} passHref legacyBehavior>
              <Link>{capitalize(slug)}</Link>
            </NextLink>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const slugs = getDocsFiles().map(file => file.replace('.docs.mdx', ''))

  return { props: { slugs } }
}
