---
title: "Coalgebraic Logic Programming, Structural Resolution, Type Class Resolution."
draft: false
description: "Coalgebraic Logic Programming, Structural Resolution, Type Class Resolution."
slug: "Coalgebraic Logic Programming, Structural Resolution, Type Class Resolution."
tags: ["Recently Completed Projects"]
showDateUpdated: true
---

This page supports the EPSRC grant Coalgebraic Logic Programming for Type Inference: parallelism and corecursion for a new generation of programming languages, 2013-2017. Joint with John Power, University of Bath.

## A Brief Description

This research project arose from our studies of coalgebraic semantics for logic programming and SLD-resolution proposed in research papers on Coalgebraic Logic Programming (CoALP) cf. [Komendantskaya and Power, 2011] below.
In the course of this project, CoALP helped us to discover a method of ``Structural Resolution" - a proof method for Horn Clause Logic that is hybrid between Term-rewriting and First-order resolution. This new kind of resolution allowed us to give a structural reformulation for proof-search algorithms in logic programming.

Towards the second half of the project, we have been working on type-theoretic semantics of logic programming and its applications to Type Class inference in Haskell; as well as refinements of categorical (coalgebraic) semantics of Horn Clause logic.

### See also:
Workshop on Coalgebra, Horn Clause Logic Programming and Types, 28-29 November 2016, Edinburgh, UK.
Workshop on Type inference and Automated Proving, 12 May 2015, Dundee, UK.

### Past and Present Project members:

- Katya Komendantskaya, Heriot-Watt University, PI
- John Power, University of Bath, co-PI
- Peng Fu, RA in Dundee and Heriot-Watt 2013-2016
- Martin Schmidt, visiting PhD student in Dundee in 2013, RA at Heriot-Watt in 2016
- Frantisek Farka, PhD student, Heriot-Watt university and university of St Andrews, 2015-2017
- Yue Li, PhD student, Heriot-Watt University, 2016-2019
- Jonathan Heras, University of Rioja, former RA, in 2013
- Vladimir Komendantsky, Moixa UK , London, RA at Dundee in 2013
- Andrew Pond, internship student at Dundee in 2014, 2015

### Project partners:

- Davide Ancona, Genova University
- Tarmo Uustalu, Tallinn University of Technology
- Kevin Hammond, University of St Andrews
- Neil Ghani,University of Strathclyde
- Gopal Gupta, University of Texas at Dallas

### Project Software and Prototype Implementations

- Coalgebraic Logic Programming, Main page on GitHub, 2016. Martin Schmidt, Katya Komendantskaya, Yue Li.

#### Older prototypes and experiments:

- Structural resolution (three-tier calculus for proofs in first-order Horn logic programming): Productivity Checker and Coinductive Proof Inference implementation in Haskell, by Frantisek Farka. (2015)
- Structural resolution and Productivity Checker implementation in parallel Go , by Martin Schmidt. (2015)
- First Haskell implementation of CoALP. By Vladimir Komendantsky, Jonathan Heras, Andrew Pond. (2013-2015)
- Prototype-2: CoALP implemented in Parallel Go; used for studying parallelism. By Martin Schmidt. (2012-2014)
- Prototype-1: CoALP implemented in Prolog. By Martin Schmidt. (2011-2012)

### CoALP and Structural Resolution full bibliography:

- Luca Franceschini, Davide Ancona and Ekaterina Komendantskaya. Structural Resolution for Abstract Compilation of Object-Oriented Languages. Workshop on Coalgebra, Horn Clause Logic Programming and Types, 28-29 November, Edinburgh, full version appeared as MSc thesis of L.Franceschini, U.Genova, 2016.
- E.Komendantskaya and J.Power. Logic programming: laxness and saturation. Submitted to Journal of Logic and Algebraic Methods in Programming. 30 pages, 2016.
- F.Farka, E.Komendantskaya, K.Hammond and P.Fu. Coinductive Soundness of Corecursive Type Class Resolution. Pre-proceedings of LOPSTR'16, Edinburgh, UK.
- E.Komendantskaya, P.Johann and M.Schmidt. A Productivity Checker for Logic Programming. Pre-proceedings of LOPSTR'16, Edinburgh, UK.
- P.Fu and E.Komendantskaya. Operational Semantics of Resolution and Productivity in Horn Clause Logic. Journal ``Formal Aspect of Computing", 22 pages, 2017.
- E.Komendantskaya and J.Power. Category theoretic semantics for theorem proving in logic programming: embracing the laxness. Coalgebaric methods in Computer Sceince (CMCS'16).
- E.Komendantskaya, John Power and Martin Schmidt. Coalgebraic Logic Programming: from Semantics to Implementation. 39 pages. Journal of Logic and Computation 2016 26 (2): 745-78.
- E.Komendantskaya and P.Johann. Structural Resolution: a Framework for Coinductive Proof Search and Proof Construction in Horn Clause Logic. Submitted to ACM Transcations in Computational Logic. 36 pages, November 2015.

## Contact

Please address any queries about this project to ek19 at hw.ac.uk