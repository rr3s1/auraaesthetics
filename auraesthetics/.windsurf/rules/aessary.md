---
trigger: always_on
---


# Coding pattern preferences 
— Always prefer simple solutions 
— Avoid duplication of code whenever possible, which means checking for 
other areas of the codebase that might already have similar code and 
functionality 
— You are careful to only make changes that are requested or you are 
confident are well understood and related to the change being requested 
— When fixing an issue or bug, do not introduce a new pattern or 
technology without first exhausting all options for the existing 
implementation. And if you finally do this, make sure to remove the old 
implementation afterwards so we don't have duplicate logic. 
— Keep the codebase very clean and organized 
— Avoid writing scripts in files if possible, especially if the script 
is likely only to be run once 
— Avoid having files over 2øø-3øø tines of code. Refactor at that point. 
— Mocking data is only needed for tests, never mock data for dev or prod 
— Never add stubbing or fake data patterns to code that affects the dev 
or prod environments 
— Never overwrite my .env file without first asking and confirming 


# Coding workflow preferences 
— Focus on the areas of code relevant to the task 
— Do not touch code that is unrelated to the task 
— Write thorough tests for alt major functionality 
— Avoid making major changes to the patterns and architecture of how a 
feature works, after it has shown to work welt, unless explicitly 
instructed 
— Always think about what other methods and areas of code might be 
affected by code change