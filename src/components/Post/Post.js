/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Post = ({ node }) => {
  const randNum = (min, max) => Math.floor(Math.random() * (max - min)) + min

  const generateGradient = () => {
    const hue = randNum(0, 255)
    const sat = randNum(75, 100)
    const lit = 75

    return `linear-gradient(to right,
      hsl(
        ${hue - 15},
        ${sat}%,
        ${lit}%
      ),
      hsl(
        ${hue + 15},
        ${sat}%,
        ${lit}%
      ))`
  }

  return (
    <article
      key={node.fields.slug}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundImage: generateGradient(),
        border: '5px solid #ffffff',
        mb: 3,
        transition: '0.3s ease',
        ':hover, :focus, :active': {
          mt: -10,
        },
      }}
    >
      <Link
        to={node.fields.slug}
        sx={{
          variant: 'links.primary',
          padding: 4,
          boxShadow: `none`,
        }}
      >
        <header>
          <h3 sx={{ my: 2 }}>{node.frontmatter.title || node.fields.slug}</h3>
          <small>{node.frontmatter.date}</small>
        </header>
        <section>
          <p
            sx={{
              mb: 0,
            }}
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </section>
      </Link>
    </article>
  )
}

export default Post
