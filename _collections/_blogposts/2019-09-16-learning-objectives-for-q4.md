---
title: Learning Objectives for Quarter 4 of 2019
tags:
  - future
  - learning
  - objectives
description: My learning goals for the end of 2019
ogDescription: My learning goals for the end of 2019
---

As the final quarter of 2019 has approached us, I'm setting out some learning objectives
for the next 3 months. This post describes my learning objectives and why I've chosen those particular subjects.

<!--more-->

Why? Because I like to stay on top of the game with all things computing.

This course shouldn't be too much of a challenge for me as I already have a background in Python Development, however the 'programming with Pandas' part of the course is something I need to focus on as I have no prior experience of using this library.

IBM training


Applied Data Science with Python
Learn how to code in Python for data science, then analyze and visualize data with Python with packages like scikit-learn, matplotlib and bokeh. This is an action-packed learning path for data science enthusiasts and aspiring data scientists who want to learn data science hands-on with Python.

Proficiency in programming in Python for Data Science.
Proficiency in analyzing data using pandas.
Proficiency in creating different visualizing tools using different Python libraries, namely, Matplotlib, Seaborn, and Folium.


PY0101EN - Python for Data Science

Learning Objectives for this course:

````
What is Python and why is it useful
The application of Python
How to define variables
Sets and conditional statements in Python
The purpose of having functions in Python
How to operate on files to read and write data in Python
How to use pandas, a must have package for anyone attempting data analysis in Python.
````


Syllabus for this course:

```
Module 1 - Python Basics

Your first program
Types
Expressions and Variables
String Operations
Module 2 - Python Data Structures

Lists and Tuples
Sets
Dictionaries
Module 3 - Python Programming Fundamentals

Conditions and Branching
Loops
Functions
Objects and Classes
Module 4 - Working with Data in Python

Reading files with open
Writing files with open
Loading data with Pandas
Working with and Saving data with Pandas
````

Pandas is a popular library for data analysis. It uses the concepts of dataframes.
A dataframe is comprised of rows and columns.

We can use the method head to examine the first 5 rows of a dataframe.
````
import pandas as pd
csv_path = 'file1.csv'
df = pd.read_csv(csv_path)
df.head()

df.ix[0, "Artist"] # Nirvana
````

Numpy in 1 Dimensional (1D) arrays. Beneficial as this library uses less memory than normal Python.
Numpy is a library for scientific computing. See the official docs for more information https://docs.scipy.org/doc/numpy-1.14.0/reference/index.html


Array creating, indexing and slicing,
````
import numpy as np
a=np.array([0,1,2,3,4])
type(a)
a.size
a.shape
a.ndmin # Count of array dimensions

Slicing:
d=c[1:4] # get first 3 elements


x=np.linspace(0, 2*np.pi,100)
y=np.sin(x)

import matplotlib.pylot as plt
%matplotlib inline
plt.plot(x,y)
````


QUESTION 2 of Module 2 - Python Data Structures (1 point possible)
After applying the following method,L.append(['a','b']), the following list will only be one element longer.
The available options were True or False. I chose False as I didn't completely understand the question. Is this a mistake as I don't see no list?

Final Exam 25 of 25 possible points (25/25) 100%



Machine Learning with Python


ABOUT THIS COURSE
This Machine Learning with Python course dives into the basics of Machine Learning using Python, an approachable and well-known programming language. You'll learn about Supervised vs Unsupervised Learning, look into how Statistical Modeling relates to Machine Learning, and do a comparison of each.
Look at real-life examples of Machine Learning and how it affects society in ways you may not have guessed!

Explore many algorithms and models:

Popular algorithms: Classification, Regression, Clustering, and Dimensional Reduction.
Popular models: Train/Test Split, Root Mean Squared Error, and Random Forests.
More important, you will transform your theoretical knowledge in to practical skill using many hands-on labs.

Get ready to do more learning than your machine!

COURSE SYLLABUS
Module 1 - Introduction to Machine Learning
Applications of Machine Learning
Supervised vs Unsupervised Learning
Python libraries suitable for Machine Learning
Module 2 - Regression
Linear Regression
Non-linear Regression
Model evaluation methods
Module 3 - Classification
K-Nearest Neighbour
Decision Trees
Logistic Regression
Support Vector Machines
Model Evaluation
Module 4 - Unsupervised Learning
K-Means Clustering
Hierarchical Clustering
Density-Based Clustering
Module 5 - Recommender Systems
Content-based recommender systems
Collaborative Filtering

Learning Objectives:
````
How Statistical Modeling relates to Machine Learning and do a comparison of each.
Real-life examples of Machine learning and how it affects society in ways you may not have guessed!
In the labs: Use Python libraries for Machine Learning, such as scikit-learn.

Explore many algorithms and models:
Popular algorithms: Regression, Classification, and Clustering
Recommender Systems: Content-Based and Collaborative Filtering
Popular models: Train/Test Split, Gradient Descent, and Mean Squared Error
Get ready to do more learning than your machine!
````

Syllabus:
````
Module 1 - Machine Learning
Python for Machine Learning
Supervised vs Unsupervised
Lab & Review
Module 2 - Regression
Simple Linear Regression
Multiple Linear Regression
Model Evaluation in Regression Models
Non-Linear Regression
Lab & Review
Module 3 - Classification
K-Nearest Neighbors
Decision Trees
Evaluation Metrics in Classification
Logistic Regression vs Linear Regressin
Support Vector Machine (SVM)
Lab & Review
Module 4 - Clustering
K-Means Clustering
Hierarchical Clustering
DBSCAN
Lab & Review
Module 5 - Recommender Systems
Content-Based Recommender Systems
Collaborative Filtering
Lab & Review
Final Exam
````




Deep Learning with TensorFlow (ML0120ENv2)


The majority of data in the world is unlabeled and unstructured. Shallow neural networks cannot easily capture relevant structure in, for instance, images, sound, and textual data. Deep networks are capable of discovering hidden structures within this type of data. In this TensorFlow course you'll use Google's library to apply deep learning to different data types in order to solve real world problems.

This Deep Learning with TensorFlow course focuses on TensorFlow. If you are new to the subject of deep learning, consider taking our Deep Learning 101 course first.

Traditional neural networks rely on shallow nets, composed of one input, one hidden layer and one output layer. Deep-learning networks are distinguished from these ordinary neural networks having more hidden layers, or so-called more depth. These kind of nets are capable of discovering hidden structures within unlabeled and unstructured data (i.e. images, sound, and text), which consitutes the vast majority of data in the world.

TensorFlow is one of the best libraries to implement deep learning. TensorFlow is a software library for numerical computation of mathematical expressional, using data flow graphs. Nodes in the graph represent mathematical operations, while the edges represent the multidimensional data arrays (tensors) that flow between them. It was created by Google and tailored for Machine Learning. In fact, it is being widely used to develop solutions with Deep Learning.

In this TensorFlow course, you will be able to learn the basic concepts of TensorFlow, the main functions, operations and the execution pipeline. Starting with a simple “Hello Word” example, throughout the course you will be able to see how TensorFlow can be used in curve fitting, regression, classification and minimization of error functions. This concept is then explored in the Deep Learning world. You will learn how to apply TensorFlow for backpropagation to tune the weights and biases while the Neural Networks are being trained. Finally, the course covers different types of Deep Architectures, such as Convolutional Networks, Recurrent Networks and Autoencoders.

Notice: All the labs in this course are run through CC Labs, however, running deep learning programs usually needs a high performance platform. PowerAI speeds up deep learning and AI using GPU. Built on IBM's Power Systems, PowerAI is a scalable software platform that accelerates deep learning and AI with blazing performance for individual users or enterprises. The PowerAI platform supports popular machine learning libraries and dependencies including Tensorflow, Caffe, Torch, and Theano. You can download a free version of PowerAI here.

 

Course Syllabus

Module 1 – Introduction to TensorFlow

HelloWorld with TensorFlow
Linear Regression
Nonlinear Regression
Logistic Regression
Activation Functions
Module 2 – Convolutional Neural Networks (CNN)

CNN History
Understanding CNNs
CNN Application
Module 3 – Recurrent Neural Networks (RNN)

Intro to RNN Model
Long Short-Term memory (LSTM)
Recursive Neural Tensor Network Theory
Recurrent Neural Network Model
Module 4 - Unsupervised Learning

Applications of Unsupervised Learning
Restricted Boltzmann Machine
Collaborative Filtering with RBM
Module 5 - Autoencoders

Introduction to Autoencoders and Applications
Autoencoders
Deep Belief Network











