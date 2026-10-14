
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const article = `
# Understanding Mean Squared Error

I'm studying how machine learning models measure prediction errors.

## The problem

Suppose a model predicts a value, while the actual value is different.

The error is:

\`error = actual - prediction\`

Errors can be positive or negative. Adding them directly can hide how wrong the model is.

## Mean Squared Error

MSE squares each error and calculates the average.

\`MSE = average((actual - prediction)^2)\`

## Questions I'm investigating

- Why square errors instead of using absolute values?
- How does MSE affect gradient descent?
- What happens when a model makes a very large error?

**Status:** Ongoing research.
`

function BlogPost() {
  return (
    <article className="blog-post">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {article}
      </ReactMarkdown>
    </article>
  )
}

export default BlogPost
