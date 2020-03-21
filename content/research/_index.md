+++
title = "Research"

[[research_area]]
  name = "Uncertainty Quantification"
  description = '''Many physical models from the natural sciences and from engineering involve sources of uncertainty that lead to uncertain model outputs, e.g, uncertainties in the orientation of layers of carbon fibres in the manufacturing process of aircraft wings will result in uncertainty about the location and type of possible. The goal of uncertainty quantification is to use mathematical and computational methods to account for uncertainty in the model, and to understand how such uncertainties propagate through to the model outputs. 
<br />
<br />
The research of our group focuses on developing innovative numerical methods to efficiently quantify uncertainty, and on using those techniques to tackle large-scale problems arising from real applications, often modelled in the form of differential equations. We strive for a balance between efficient numerical schemes, rigorous numerical analysis and realistic model problems. As a brief overview, some of the techniques we develop are based on Monte Carlo/quasi-Monte Carlo sampling, stochastic collocation, sophisticated hierarchical/multilevel strategies, dimension reduction through low-rank tensor approximations, etc. The applications we study range from groundwater flow, to nuclear physics and carbon fibre composites in manufacturing.'''

  publications = [
    'J. Lang, R. Scheichl and D. Silvester, **A Fully Adaptive Multilevel Stochastic Collocation Strategy for Solving Elliptic PDEs with Random Data**, Preprint [(Link)](https://arxiv.org/abs/1902.03409).',
    'T.J. Dodwell, S. Kynaston, R. Butler, R.T. Haftka, Nam H. Kim and R. Scheichl, **Multilevel Monte Carlo Simulations of Composite Structures with Uncertain Manufacturing Defects**, Preprint [(Link)](https://arxiv.org/abs/1907.10271).',
    'A.D. Gilbert, I.G. Graham, F.Y. Kuo, R. Scheichl and I.H. Sloan, **Analysis of Quasi-Monte Carlo Methods for Elliptic Eigenvalue Problems with Stochastic Coefficients**, Numerische Mathematik **142**(4):863-915, 2019.',
    'G. Detommaso, T. Dodwell and R. Scheichl, **Continuous Level Monte Carlo and Sample-Adaptive Model Hierarchies**, SIAM/ASA Journal on Uncertainty Quantification **7**(1):93-116, 2019.'
  ]

[[research_area]]
  name = "Inverse Problems and Bayesian Inference"
  description = '''When studying real world processes mathematically, essentially all problems can be crudely put into two classes: Forward and inverse problems. A forward problem concerns the calculation of the state of a physical system, given all the necessary parameters, as well as boundary and initial conditions. Inverse problems, on the other hand, are concerned with computing parameters given observations of the state of the system. Since they tell us about quantities that typically cannot be observed directly, they are among the most important mathematical problems in applications. Uncertainty quantification plays a crucial role in both cases.

A very popular and practically useful approach to treating inverse problems is to consider them in the framework of Bayesian inference, a subbranch of statistics and of data science that automatically quantifies also the uncertainties of the estimated parameters. This naturally resolves their inherent ill-posedness and has proven to be fruitful in many applications. A particular focus in our group is the design and numerical analysis of efficient numerical techniques for high- and infinite-dimensional Bayesian inverse problems, especially PDE constrained ones. We look at the effect of choosing high-level priors, develop efficient multilevel algorithms and surrogates, incorporate novel ideas from numerical analysis into this setting and explore links to machine learning.
  '''
  publications = [
  'J. Kruse, G. Detommaso, R. Scheichl and U. Köthe, **HINT: Hierarchical Invertible Neural Transport for Density Estimation and Bayesian Inference**, Preprint [(Link)](https://arxiv.org/abs/1905.10687), 2020.',
  'S. Dolgov, K. Anaya-Izquierdo, C. Fox and R. Scheichl, **Approximation and Sampling of Multivariate Probability Distributions in the Tensor Train Decomposition**, Statistics and Computing **30**:603-625, 2020.',
  'T.J. Dodwell, C. Ketelsen, R. Scheichl and A.L. Teckentrup, **Multilevel Markov Chain Monte Carlo**, SIAM Review **61**(3):509-545, 2019.',
  'G. Detommaso, T. Cui, A. Spantini, Y. Marzouk and R. Scheichl, **A Stein Variational Newton Method**, Advances in Neural Information Processing Systems (NIPS 2018) **31**:9187-9197, 2018.'
]

[[research_area]]
  name = "Multiscale methods"
  description = '''Natural or engineered materials often contain two or more constituents, arranged in a heterogeneous structure varying at different scales. Such materials are desirable because their macroscopic properties can be superior to the properties of the individual constituents. It is even possible to explicitly design them for a particular purpose by changing the composition of the constituents, e.g.  carbon fibre composites for lightweight structures and vehicles. The mathematical modelling of such heterogeneous or composite materials naturally leads to partial differential equations (PDEs) with highly oscillating coefficients. Direct numerical solution of such problems with traditional methods, such as finite elements (FE) is computationally expensive. Just to compute the correct qualitative behaviour the mesh size would need to be sufficiently small to capture all fine scale details. 

In our group, we study and develop multiscale numerical methods that do not suffer from this drawback. We are particularly interested in systems without periodic structure or scale separation and in problems with a high contrast in the constituent material properties. Such problems require custom-made approximation spaces, computable via localised boundary value or eigen-problems. There are also strong links to model order reduction and domain decomposition methods. Examples include multiscale finite elements, generalised multiscale finite elements, or the localizable orthogonal decomposition method. Target applications are again subsurface flow and carbon fibre composites, but also biological materials such as bone or cells. 
  '''

  publications = [
  'R. Butler, T.J. Dodwell, A. Reinarz, A. Sandhu, R. Scheichl and L. Seelinger, **High-Performance dune Modules for Solving Large-Scale, Strongly Anisotropic Elliptic Problems with Applications to Aerospace Composites**, Computer Physics Communications **249**:106997, 2020.',
  'T.J. Dodwell, A. Sandhu and R. Scheichl, **Customized Coarse Models for Highly Heterogeneous Materials**, in Bifurcation and Degradation of Geomaterials with Engineering Applications (Papamichos E, Papanastasiou P, Pasternak E, Dyskin A, Eds.), IWBDG 2017, Springer Series in Geomechanics and Geoengineering, Springer, 2017.',
  'D. Peterseim and R. Scheichl, **Robust Numerical Upscaling of Elliptic Multiscale Problems at High Contrast**, Computational Methods in Applied Mathematics **16**(4):579-603, 2016.',
  'N. Spillane, V. Dolean, P. Hauret, F. Nataf, C. Pechstein and R. Scheichl, **Abstract Robust Coarse Spaces for Systems of PDEs via Generalized Eigenproblems in the Overlaps**, Numerische Mathematik **126**(4):741-770, 2014.'
]

[[research_area]]
  name = "Numerical Analysis & Scientific Computing"
  description = '''Scientific computing and numerical simulation are playing an ever more important role in science and technology. Hardly any new developments, e.g., in engineering or the geosciences, that take place without careful mathematical modelling, analysis and optimisation. More and more complicated systems are being tackled, in particular in the life sciences and in the context of climate change. This requires continued research into efficient and robust numerical methods, especially in the context of heterogeneous or random media, and in their careful and rigorous numerical analysis. Increased efficiency requires a redesign of traditional algorithms to harness the power of modern many-core computing architectures (hardware-aware scientific computing), while data-driven (“predictive”) scientific computing poses new challenges for the robustness of existing methods.

Here, the focus of our group encompasses (a) more traditional topics, such as efficient preconditioning and discretisation methods for heterogeneous and anisotropic PDEs, or efficient algorithms for large-scale eigenproblems, as well as (b) more modern topics that arise naturally in the context of uncertainty quantification or Bayesian inference, such as high-dimensional approximation and quadrature, including Monte Carlo, quasi-Monte Carlo, sparse grid, low-rank tensor approximation or deep learning. In terms of novel software, we contribute in particular to DUNE (the Distributed and Unified Numerical Environment) and to MUQ (the MIT Uncertainty Quantification Library).
  '''

  publications = [
  'P.B. Rohrbach, S. Dolgov, L. Grasedyck and R. Scheichl, **Rank Bounds for Approximating Gaussian Densities in the Tensor-Train Format**, Preprint [(Link)](https://arxiv.org/abs/2001.08187), 2020.',
  'M. Bachmayr, I.G. Graham, V.K. Nguyen and R. Scheichl, **Unified Analysis of Periodization-Based Sampling Methods for Matern Covariances**, Preprint [(Link)](https://arxiv.org/abs/1905.13522), 2019.',
  'D. Drzisga, B. Gmeiner, U. Rüde, R. Scheichl and B. Wohlmuth, **Scheduling Massively Parallel Multigrid for Multilevel Monte Carlo Methods**, SIAM Journal on Scientific Computing **39**(5):S873-S897, 2017.',
  'E.H. Mueller and R. Scheichl, **Massively Parallel Solvers for Elliptic PDEs in Numerical Weather- and Climate Prediction**, Quarterly Journal of the Royal Meteorological Society **140**(685):2608-2624, 2014.'
  ]
+++