/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Row, Col, Post } from '../../components'

const PostList = ({ posts }) => {
  return (
    <Container>
      <Row>
        {posts.map(({ node }) => (
          <Col md={6} lg={4}>
            <Post node={node} />
          </Col>
        ))}{' '}
      </Row>
    </Container>
  )
}

export default PostList
