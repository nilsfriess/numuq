+++ 
title = "Home"
avatar = "img/group.jpg"

address = """
Institute of Applied Mathematics and   
Interdisciplinary Center for Scientific Computing (IWR)   
Ruprechts-Karls-Universität Heidelberg   
Im Neuenheimer Feld 205   
69120 Heidelberg, Germany 
"""

# Line breaks = 2 or more spaces at end of line
secretary = """
Herta **Fitzer**  
NumOpt [at] iwr.uni-heidelberg.de    
+49 6221 5414111    
Room: 1 / 318 
"""

# Latex can be used here. Note, however, that you need
# to escape backslashes '\' by putting another backslash
# before it, eg. instead of \sum_i it should be \\sum_i
[[research_area]]
  name = "Uncertainty Quantification"
  description = '''Many physical models from the natural sciences and from engineering involve sources of uncertainty that lead to uncertain model outputs, e.g, uncertainties in the orientation of layers of carbon fibres in the manufacturing process of aircraft wings will result in uncertainty about the location and type of possible. The goal of uncertainty quantification is to use mathematical and computational methods to account for uncertainty in the model, and to understand how such uncertainties propagate through to the model outputs. 
<br />
<br />
The research of our group focuses on developing innovative numerical methods to efficiently quantify uncertainty, and on using those techniques to tackle large-scale problems arising from real applications, often modelled in the form of differential equations. We strive for a balance between efficient numerical schemes, rigorous numerical analysis and realistic model problems. As a brief overview, some of the techniques we develop are based on Monte Carlo/quasi-Monte Carlo sampling, stochastic collocation, sophisticated hierarchical/multilevel strategies, dimension reduction through low-rank tensor approximations, etc. The applications we study range from groundwater flow, to nuclear physics and carbon fibre composites in manufacturing.'''
[[research_area]]
  name = "Inverse Problems and Bayesian Inference"
  description = '''
  When studying real world processes mathematically, essentially all problems can be crudely put into two classes: Forward and inverse problems. A forward problem concerns the calculation of the state of a physical system, given all the necessary parameters, as well as boundary and initial conditions. Inverse problems, on the other hand, are concerned with computing parameters given observations of the state of the system. Since they tell us about quantities that typically cannot be observed directly, they are among the most important mathematical problems in applications. Uncertainty quantification plays a crucial role in both cases.
<br />
<br />
A very popular and practically useful approach to treating inverse problems is to consider them in the framework of Bayesian inference, a subbranch of statistics and of data science that automatically quantifies also the uncertainties of the estimated parameters. This naturally resolves their inherent ill-posedness and has proven to be fruitful in many applications. A particular focus in our group is the design and numerical analysis of efficient numerical techniques for high- and infinite-dimensional Bayesian inverse problems, especially PDE constrained ones. We look at the effect of choosing high-level priors, develop efficient multilevel algorithms and surrogates, incorporate novel ideas from numerical analysis into this setting and explore links to machine learning.
  '''

[[research_area]]
  name = "Multiscale methods"
  description = '''
  Natural or engineered materials often contain two or more constituents, arranged in a heterogeneous structure varying at different scales. Such materials are desirable because their macroscopic properties can be superior to the properties of the individual constituents. It is even possible to explicitly design them for a particular purpose by changing the composition of the constituents, e.g.  carbon fibre composites for lightweight structures and vehicles. The mathematical modelling of such heterogeneous or composite materials naturally leads to partial differential equations (PDEs) with highly oscillating coefficients. Direct numerical solution of such problems with traditional methods, such as finite elements (FE) is computationally expensive. Just to compute the correct qualitative behaviour the mesh size would need to be sufficiently small to capture all fine scale details. 
<br />
<br />
In our group, we study and develop multiscale numerical methods that do not suffer from this drawback. We are particularly interested in systems without periodic structure or scale separation and in problems with a high contrast in the constituent material properties. Such problems require custom-made approximation spaces, computable via localised boundary value or eigen-problems. There are also strong links to model order reduction and domain decomposition methods. Examples include multiscale finite elements, generalised multiscale finite elements, or the localizable orthogonal decomposition method. Target applications are again subsurface flow and carbon fibre composites, but also biological materials such as bone or cells. 
  '''

[[research_area]]
  name = "Numerical Analysis & Scientific Computing"
  description = '''
  Scientific computing and numerical simulation are playing an ever more important role in science and technology. Hardly any new developments, e.g., in engineering or the geosciences, that take place without careful mathematical modelling, analysis and optimisation. More and more complicated systems are being tackled, in particular in the life sciences and in the context of climate change. This requires continued research into efficient and robust numerical methods, especially in the context of heterogeneous or random media, and in their careful and rigorous numerical analysis. Increased efficiency requires a redesign of traditional algorithms to harness the power of modern many-core computing architectures (hardware-aware scientific computing), while data-driven (“predictive”) scientific computing poses new challenges for the robustness of existing methods.
<br />
<br />
Here, the focus of our group encompasses (a) more traditional topics, such as efficient preconditioning and discretisation methods for heterogeneous and anisotropic PDEs, or efficient algorithms for large-scale eigenproblems, as well as (b) more modern topics that arise naturally in the context of uncertainty quantification or Bayesian inference, such as high-dimensional approximation and quadrature, including Monte Carlo, quasi-Monte Carlo, sparse grid, low-rank tensor approximation or deep learning. In terms of novel software, we contribute in particular to DUNE (the Distributed and Unified Numerical Environment) and to MUQ (the MIT Uncertainty Quantification Library).
  '''
+++
 
       