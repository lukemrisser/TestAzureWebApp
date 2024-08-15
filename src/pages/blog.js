import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = () => (
  <Layout>
    <h1>Twins Travel Here Blog</h1>
    <p>We can add the latest blog as well as past blogs on this page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Blog" />

export default Blog
