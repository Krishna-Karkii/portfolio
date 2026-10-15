---
title: Understanding mean squared error
date: 2026-10-14
status: open   # open | answered | revised
tags: [math, ml]
summary: Why models square their errors, and what that does to gradient descent.
---

## Concept

I'm studying how machine learning models measure their prediction errors. A model predicts $\hat{y}$ for a true value $y$, and the error is

$$
e = y - \hat{y}
$$

Errors can be positive or negative, so adding them directly can hide how wrong the model is. Mean squared error squares each error first, then averages over $n$ observations:

$$
\mathrm{MSE} = \frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y}_i)^2
$$

## Question

- Why square errors instead of using absolute values?
- How does MSE affect gradient descent?
- What happens when a model makes a very large error?

## Experiment / proof

Planned: fit a line from scratch with MSE and with mean absolute error (MAE), with and without a single outlier, and compare how far each fit moves. Not run yet.
