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



















