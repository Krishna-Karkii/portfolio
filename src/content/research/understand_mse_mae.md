
# Understanding Mean Squared Error

I'm studying how machine learning models measure their prediction errors.

## The problem

Suppose a model predicts a value called `y_pred`, while the actual value is `y_true`.

The error is:

\[
e = y_{\text{true}} - y_{\text{pred}}
\]

Errors can be positive or negative. Simply adding them can hide how wrong the model is.

## Mean Squared Error

Mean Squared Error (MSE) squares each error and then calculates their average.

For n observations:

\[
MSE = \frac{1}{n}\sum_{i=1}^{n}(y_i-\hat{y}_i)^2
\]

## Questions I'm investigating

- Why do we square errors instead of using absolute values?
- How does MSE affect gradient descent?
- What happens when a model makes a very large error?

## Current status

This is an ongoing research note. I'll add experiments and results as I implement linear regression from scratch.
