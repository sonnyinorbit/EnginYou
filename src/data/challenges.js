export const challenges = {
  python_basics: {
    id: 'python_basics',
    title: 'Python Fundamentals',
    description: 'Master the basics of Python programming before diving into engineering applications.',
    modules: [
      {
        id: 'variables',
        title: 'Variables & Data Types',
        description: 'Learn how to store and manipulate data in Python',
        lessons: [
          {
            id: 'variables_1',
            title: 'Hello, Variables!',
            description: 'Learn how to create variables to store information in Python. Variables are like labeled boxes where you can put different types of data.',
            difficulty: 1,
            starterCode: `# TODO: Create two variables below
# 1. Create a variable called 'name' and put your name in it
# 2. Create a variable called 'age' and put your age in it
# 
# Think about it: What type of data is a name? What type is an age?
# How do you tell Python what type of data you're storing?

# Your code goes here:


# TODO: Uncomment the line below after you create your variables
# print(f"Hello, my name is {name} and I am {age} years old!")`,
            solution: `# TODO: Create two variables below
# 1. Create a variable called 'name' and put your name in it
# 2. Create a variable called 'age' and put your age in it
# 
# Think about it: What type of data is a name? What type is an age?
# How do you tell Python what type of data you're storing?

# Your code goes here:
name = "John"
age = 25

# TODO: Uncomment the line below after you create your variables
print(f"Hello, my name is {name} and I am {age} years old!")`,
            testCases: [
              {
                input: '',
                expectedOutput: /Hello, my name is .+ and I am \d+ years old!/,
                description: 'Basic variable assignment'
              }
            ],
            hints: [
              'Variables are like labeled containers that store data',
              'To create a variable, write: variable_name = value',
              'For text (strings), put the value in quotes like: name = "John"',
              'For numbers, don\'t use quotes: age = 25'
            ],
            solutionExplanation: 'Variables are fundamental building blocks in programming. They allow us to store and reference data using meaningful names. In Python, strings (text) need quotes, while numbers don\'t.',
            reward: 10
          },
          {
            id: 'variables_2',
            title: 'Calculating with Variables',
            description: 'Learn how to use variables in mathematical calculations. This is how engineers solve real-world problems!',
            difficulty: 1,
            starterCode: `# TODO: Calculate the area and perimeter of a rectangle
# 
# We have a rectangle with:
length = 5
width = 3
# 
# Your task:
# 1. Calculate the area (length × width)
# 2. Calculate the perimeter (2 × length + 2 × width)
# 
# Think about it: What mathematical operations do you need?
# How do you write multiplication and addition in Python?

# Your calculations go here:
area = 
perimeter = 

# This will display your results - don't change it!
print(f"Rectangle: {length} × {width}")
print(f"Area: {area}")
print(f"Perimeter: {perimeter}")`,
            solution: `# TODO: Calculate the area and perimeter of a rectangle
# 
# We have a rectangle with:
length = 5
width = 3
# 
# Your task:
# 1. Calculate the area (length × width)
# 2. Calculate the perimeter (2 × length + 2 × width)
# 
# Think about it: What mathematical operations do you need?
# How do you write multiplication and addition in Python?

# Your calculations go here:
area = length * width
perimeter = 2 * length + 2 * width

# This will display your results - don't change it!
print(f"Rectangle: {length} × {width}")
print(f"Area: {area}")
print(f"Perimeter: {perimeter}")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Rectangle: 5 × 3\nArea: 15\nPerimeter: 16',
                description: 'Basic arithmetic with variables'
              }
            ],
            hints: [
              'In Python, use * for multiplication (not ×)',
              'Use + for addition',
              'Area = length × width, so area = length * width',
              'Perimeter = 2×length + 2×width, so perimeter = 2 * length + 2 * width'
            ],
            solutionExplanation: 'Variables can store the results of calculations, making your code more readable and reusable. This is exactly how engineers solve real-world problems - by breaking them down into mathematical operations.',
            reward: 15
          }
        ]
      },
      {
        id: 'loops_lists',
        title: 'Loops & Lists',
        description: 'Learn to work with collections of data and repetitive tasks',
        lessons: [
          {
            id: 'loops_1',
            title: 'Your First Loop',
            description: 'Learn how to repeat actions using loops. Loops are essential for processing multiple items efficiently.',
            difficulty: 2,
            starterCode: `# TODO: Create a loop that counts from 1 to 5
# 
# Use a for loop with the range() function
# range(1, 6) gives you numbers 1, 2, 3, 4, 5
# 
# Think about it: How do you write a for loop in Python?
# What does range() do?

# Your loop goes here:


# TODO: Uncomment the lines below after you implement your loop
# for number in range(1, 6):
#     print(f"Count: {number}")

# For now, just test your loop with a print statement
print("Testing your loop...")`,
            solution: `# TODO: Create a loop that counts from 1 to 5
# 
# Use a for loop with the range() function
# range(1, 6) gives you numbers 1, 2, 3, 4, 5
# 
# Think about it: How do you write a for loop in Python?
# What does range() do?

# Your loop goes here:
for number in range(1, 6):
    print(f"Count: {number}")

# This should print:
# Count: 1
# Count: 2
# Count: 3
# Count: 4
# Count: 5`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Count: 1\nCount: 2\nCount: 3\nCount: 4\nCount: 5',
                description: 'Basic for loop with range'
              }
            ],
            hints: [
              'A for loop repeats code for each item in a sequence',
              'range(1, 6) creates numbers 1, 2, 3, 4, 5',
              'The syntax is: for variable in sequence:',
              'Don\'t forget the colon (:) after the for statement'
            ],
            solutionExplanation: 'Loops are powerful tools that let you repeat actions without writing the same code multiple times. Engineers use loops to process data, automate tasks, and solve complex problems efficiently.',
            reward: 20
          },
          {
            id: 'lists_1',
            title: 'Working with Lists',
            description: 'Learn how to store and manipulate collections of data using Python lists.',
            difficulty: 2,
            starterCode: `# TODO: Create and work with a list of numbers
# 
# 1. Create a list called 'numbers' with values [10, 20, 30, 40, 50]
# 2. Add the number 60 to the end of the list
# 3. Print the first number in the list
# 4. Print the length of the list
# 
# Think about it: How do you create a list? How do you add items?

# Your code goes here:


`,
            solution: `# TODO: Create and work with a list of numbers
# 
# 1. Create a list called 'numbers' with values [10, 20, 30, 40, 50]
# 2. Add the number 60 to the end of the list
# 3. Print the first number in the list
# 4. Print the length of the list
# 
# Think about it: How do you create a list? How do you add items?

# Your code goes here:
numbers = [10, 20, 30, 40, 50]
numbers.append(60)

print(f"First number: {numbers[0]}")
print(f"List length: {len(numbers)}")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'First number: 10\nList length: 6',
                description: 'Basic list operations'
              }
            ],
            hints: [
              'Lists are created with square brackets: [item1, item2, item3]',
              'Use .append() to add items to the end of a list',
              'Access items by index: list[0] gets the first item',
              'Use len() to get the number of items in a list'
            ],
            solutionExplanation: 'Lists are fundamental data structures that let you store multiple values in one variable. Engineers use lists to organize data, process collections, and build complex algorithms.',
            reward: 25
          },
          {
            id: 'loops_lists_1',
            title: 'Looping Through Lists',
            description: 'Combine loops and lists to process collections of data efficiently.',
            difficulty: 3,
            starterCode: `# TODO: Calculate the sum of all numbers in a list
# 
# We have a list of test scores: [85, 92, 78, 96, 88]
# 
# Your task:
# 1. Create a variable called 'total' starting at 0
# 2. Loop through each score in the list
# 3. Add each score to the total
# 4. Calculate and print the average score
# 
# Think about it: How do you loop through a list? How do you add numbers?

# Your code goes here:


`,
            solution: `# TODO: Calculate the sum of all numbers in a list
# 
# We have a list of test scores: [85, 92, 78, 96, 88]
# 
# Your task:
# 1. Create a variable called 'total' starting at 0
# 2. Loop through each score in the list
# 3. Add each score to the total
# 4. Calculate and print the average score
# 
# Think about it: How do you loop through a list? How do you add numbers?

# Your code goes here:
scores = [85, 92, 78, 96, 88]
total = 0

for score in scores:
    total += score

average = total / len(scores)
print(f"Average score: {average}")`,
            testCases: [
              {
                input: '',
                expectedOutput: /Average score: 87\.8/,
                description: 'Loop through list to calculate sum and average'
              }
            ],
            hints: [
              'Start with total = 0',
              'Use for score in scores: to loop through each item',
              'Add each score to total: total += score',
              'Calculate average: total / len(scores)'
            ],
            solutionExplanation: 'Combining loops with lists is a powerful technique for data processing. This pattern is used in engineering for analyzing data, processing sensor readings, and solving complex problems.',
            reward: 30
          }
        ]
      },
      {
        id: 'conditionals',
        title: 'Conditionals & Logic',
        description: 'Learn to make decisions in your code using if statements and boolean logic',
        lessons: [
          {
            id: 'if_statements_1',
            title: 'Your First If Statement',
            description: 'Learn how to make decisions in your code using if statements. This is how programs respond to different conditions.',
            difficulty: 2,
            starterCode: `# TODO: Create an if statement to check if a number is positive
# 
# We have a variable called 'number' with value 7
# 
# Your task:
# 1. Check if the number is greater than 0
# 2. If it is, print "The number is positive"
# 3. If it's not, print "The number is not positive"
# 
# Think about it: How do you write an if statement? What comparison operators do you use?

# Your code goes here:


`,
            solution: `# TODO: Create an if statement to check if a number is positive
# 
# We have a variable called 'number' with value 7
# 
# Your task:
# 1. Check if the number is greater than 0
# 2. If it is, print "The number is positive"
# 3. If it's not, print "The number is not positive"
# 
# Think about it: How do you write an if statement? What comparison operators do you use?

# Your code goes here:
number = 7

if number > 0:
    print("The number is positive")
else:
    print("The number is not positive")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'The number is positive',
                description: 'Basic if-else statement'
              }
            ],
            hints: [
              'Use if condition: to start an if statement',
              'Use > for "greater than" comparison',
              'Use else: for the alternative case',
              'Don\'t forget the colon (:) after if and else'
            ],
            solutionExplanation: 'If statements let your code make decisions based on conditions. Engineers use this to create smart systems that respond differently to different inputs and situations.',
            reward: 20
          },
          {
            id: 'multiple_conditions_1',
            title: 'Multiple Conditions',
            description: 'Learn to handle multiple conditions using elif statements and logical operators.',
            difficulty: 3,
            starterCode: `# TODO: Create a grade checker using multiple conditions
# 
# We have a test score: 85
# 
# Your task:
# 1. If score is 90 or higher, print "Grade: A"
# 2. If score is 80-89, print "Grade: B"
# 3. If score is 70-79, print "Grade: C"
# 4. If score is below 70, print "Grade: F"
# 
# Think about it: How do you check ranges? How do you use elif?

# Your code goes here:


`,
            solution: `# TODO: Create a grade checker using multiple conditions
# 
# We have a test score: 85
# 
# Your task:
# 1. If score is 90 or higher, print "Grade: A"
# 2. If score is 80-89, print "Grade: B"
# 3. If score is 70-79, print "Grade: C"
# 4. If score is below 70, print "Grade: F"
# 
# Think about it: How do you check ranges? How do you use elif?

# Your code goes here:
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Grade: B',
                description: 'Multiple conditions with elif'
              }
            ],
            hints: [
              'Use elif for additional conditions after if',
              'Check ranges from highest to lowest',
              'Use >= for "greater than or equal to"',
              'The else catches any remaining cases'
            ],
            solutionExplanation: 'Multiple conditions let you handle complex decision-making. Engineers use this pattern for classification systems, error handling, and creating intelligent algorithms.',
            reward: 25
          }
        ]
      },
      {
        id: 'functions',
        title: 'Functions',
        description: 'Learn to create reusable blocks of code',
        lessons: [
          {
            id: 'functions_1',
            title: 'Your First Function',
            description: 'Learn how to create reusable blocks of code called functions. Functions help you organize your code and avoid repetition.',
            difficulty: 2,
            starterCode: `# TODO: Create a function that greets people
# 
# Functions are like recipes - they take ingredients (parameters) 
# and produce a result. Let's create a greeting recipe!
# 
# Your task: Create a function called 'greet' that:
# 1. Takes a name as a parameter
# 2. Prints "Hello, [name]!"
# 
# Think about it: How do you define a function in Python?
# What goes inside the function to make it do something?

def greet(name):
    # Your code goes here:
    # Replace this pass statement with your code
    # Example: print(f"Hello, {name}!")
    pass

# TODO: Uncomment the lines below after you implement your function
# greet("Alice")
# greet("Bob")

# For now, just test your function with one name
print(f"Testing greet('Alice'):")
greet("Alice")`,
            solution: `# TODO: Create a function that greets people
# 
# Functions are like recipes - they take ingredients (parameters) 
# and produce a result. Let's create a greeting recipe!
# 
# Your task: Create a function called 'greet' that:
# 1. Takes a name as a parameter
# 2. Prints "Hello, [name]!"
# 
# Think about it: How do you define a function in Python?
# What goes inside the function to make it do something?

def greet(name):
    # Your code goes here:
    print(f"Hello, {name}!")

# Test your function - don't change these lines!
greet("Alice")
greet("Bob")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Hello, Alice!\nHello, Bob!',
                description: 'Basic function definition and calling'
              }
            ],
            hints: [
              'Use def function_name(parameter): to define a function',
              'Inside the function, use print() to output text',
              'To use the parameter, just write its name: print(f"Hello, {name}!")',
              'The pass keyword is a placeholder - replace it with your code'
            ],
            solutionExplanation: 'Functions are reusable blocks of code that can take inputs (parameters) and perform specific tasks. They help you organize your code and avoid writing the same code multiple times.',
            reward: 20
          }
        ]
      },
      {
        id: 'problem_solving',
        title: 'Problem Solving',
        description: 'Learn to break down problems into smaller steps',
        lessons: [
          {
            id: 'problem_solving_1',
            title: 'Temperature Converter',
            description: 'Create a program that converts Celsius to Fahrenheit. This is a classic engineering problem-solving exercise!',
            difficulty: 2,
            starterCode: `# TODO: Convert Celsius to Fahrenheit
# 
# Engineers often need to convert between different units.
# The formula is: F = (C × 9/5) + 32
# 
# Your task: Create a function that converts Celsius to Fahrenheit
# 
# Think about it: What are the steps to solve this?
# 1. Take a Celsius temperature as input
# 2. Apply the formula
# 3. Return the result

def celsius_to_fahrenheit(celsius):
    # Your conversion code goes here:
    # Replace this pass statement with your conversion formula
    # Formula: F = (C × 9/5) + 32
    pass

# TODO: Uncomment the test code below after you implement your function
# print(f"0°C = {celsius_to_fahrenheit(0)}°F")
# print(f"100°C = {celsius_to_fahrenheit(100)}°F")
# print(f"37°C = {celsius_to_fahrenheit(37)}°F")

# For now, just test your function with one value
print(f"Testing celsius_to_fahrenheit(0): {celsius_to_fahrenheit(0)}")`,
            solution: `# TODO: Convert Celsius to Fahrenheit
# 
# Engineers often need to convert between different units.
# The formula is: F = (C × 9/5) + 32
# 
# Your task: Create a function that converts Celsius to Fahrenheit
# 
# Think about it: What are the steps to solve this?
# 1. Take a Celsius temperature as input
# 2. Apply the formula
# 3. Return the result

def celsius_to_fahrenheit(celsius):
    # Your conversion code goes here:
    return celsius * 9/5 + 32

# Test your function - don't change these lines!
print(f"0°C = {celsius_to_fahrenheit(0)}°F")
print(f"100°C = {celsius_to_fahrenheit(100)}°F")
print(f"37°C = {celsius_to_fahrenheit(37)}°F")`,
            testCases: [
              {
                input: '',
                expectedOutput: '0°C = 32.0°F\n100°C = 212.0°F\n37°C = 98.6°F',
                description: 'Temperature conversion function'
              }
            ],
            hints: [
              'Break this down: first multiply by 9/5, then add 32',
              'In Python, 9/5 = 1.8, so you can write: celsius * 1.8 + 32',
              'Make sure to return the result, not just print it',
              'The function should return the calculated value'
            ],
            solutionExplanation: 'This is a classic engineering problem-solving exercise. You broke down a complex formula into simple mathematical operations. Engineers do this all the time - taking real-world problems and converting them into code.',
            reward: 25
          },
          {
            id: 'problem_solving_2',
            title: 'Area Calculator',
            description: 'Create a program that calculates the area of different shapes. This teaches you how to handle multiple conditions and formulas.',
            difficulty: 2,
            starterCode: `# TODO: Calculate areas of different shapes
# 
# Engineers often need to calculate areas for:
# - Material requirements
# - Structural analysis
# - Cost estimation
# 
# Your task: Create a function that calculates area based on shape type
# 
# Formulas:
# - Circle: π × radius² (use 3.14159 for π)
# - Rectangle: length × width
# - Triangle: 0.5 × base × height

def calculate_area(shape, **dimensions):
    # Your code goes here:
    # Replace this pass statement with your area calculations
    # Check the shape type and use the appropriate formula
    pass

# TODO: Uncomment the test code below after you implement your function
# print(f"Circle (r=5): {calculate_area('circle', radius=5):.2f}")
# print(f"Rectangle (3×4): {calculate_area('rectangle', length=3, width=4)}")
# print(f"Triangle (b=6, h=8): {calculate_area('triangle', base=6, height=8)}")

# For now, just test your function with one shape
print(f"Testing calculate_area('rectangle', length=3, width=4): {calculate_area('rectangle', length=3, width=4)}")`,
            solution: `# TODO: Calculate areas of different shapes
# 
# Engineers often need to calculate areas for:
# - Material requirements
# - Structural analysis
# - Cost estimation
# 
# Your task: Create a function that calculates area based on shape type
# 
# Formulas:
# - Circle: π × radius² (use 3.14159 for π)
# - Rectangle: length × width
# - Triangle: 0.5 × base × height

def calculate_area(shape, **dimensions):
    # Your code goes here:
    if shape == 'circle':
        radius = dimensions['radius']
        return 3.14159 * radius ** 2
    elif shape == 'rectangle':
        length = dimensions['length']
        width = dimensions['width']
        return length * width
    elif shape == 'triangle':
        base = dimensions['base']
        height = dimensions['height']
        return 0.5 * base * height
    else:
        return 0

# Test your function - don't change these lines!
print(f"Circle (r=5): {calculate_area('circle', radius=5):.2f}")
print(f"Rectangle (3×4): {calculate_area('rectangle', length=3, width=4)}")
print(f"Triangle (b=6, h=8): {calculate_area('triangle', base=6, height=8)}")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Circle (r=5): 78.54\nRectangle (3×4): 12\nTriangle (b=6, h=8): 24.0',
                description: 'Multi-shape area calculation'
              }
            ],
            hints: [
              'Use if/elif/else to check the shape type',
              'For circle: area = 3.14159 * radius ** 2',
              'For rectangle: area = length * width',
              'For triangle: area = 0.5 * base * height'
            ],
            solutionExplanation: 'This challenge teaches conditional logic and multiple formulas. Engineers use this pattern constantly - different problems require different solutions based on the situation.',
            reward: 30
          },
          {
            id: 'problem_solving_3',
            title: 'Grade Calculator',
            description: 'Create a program that calculates letter grades from numerical scores. This teaches you about ranges and logical thinking.',
            difficulty: 2,
            starterCode: `# TODO: Convert numerical grades to letter grades
# 
# This is a common problem in educational software and data analysis.
# Engineers often need to categorize data into ranges.
# 
# Grading scale:
# 90-100: A
# 80-89:  B
# 70-79:  C
# 60-69:  D
# 0-59:   F
# 
# Your task: Create a function that returns the letter grade

def get_letter_grade(score):
    # Your code goes here:
    # Replace this pass statement with your grade logic
    # Check score ranges and return appropriate letter grade
    pass

# TODO: Uncomment the test code below after you implement your function
# print(f"Score 95: {get_letter_grade(95)}")
# print(f"Score 87: {get_letter_grade(87)}")
# print(f"Score 72: {get_letter_grade(72)}")
# print(f"Score 45: {get_letter_grade(45)}")

# For now, just test your function with one score
print(f"Testing get_letter_grade(95): {get_letter_grade(95)}")`,
            solution: `# TODO: Convert numerical grades to letter grades
# 
# This is a common problem in educational software and data analysis.
# Engineers often need to categorize data into ranges.
# 
# Grading scale:
# 90-100: A
# 80-89:  B
# 70-79:  C
# 60-69:  D
# 0-59:   F
# 
# Your task: Create a function that returns the letter grade

def get_letter_grade(score):
    # Your code goes here:
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

# Test your function - don't change these lines!
print(f"Score 95: {get_letter_grade(95)}")
print(f"Score 87: {get_letter_grade(87)}")
print(f"Score 72: {get_letter_grade(72)}")
print(f"Score 45: {get_letter_grade(45)}")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Score 95: A\nScore 87: B\nScore 72: C\nScore 45: F',
                description: 'Grade conversion logic'
              }
            ],
            hints: [
              'Use if/elif/else statements to check ranges',
              'Start with the highest grade (A) and work down',
              'Check if score >= 90 for A, score >= 80 for B, etc.',
              'Remember to handle edge cases (exact boundaries)'
            ],
            solutionExplanation: 'This teaches range-based logic and data categorization. Engineers use this pattern for sensor readings, quality control, and decision-making systems.',
            reward: 25
          },
          {
            id: 'problem_solving_4',
            title: 'Password Strength Checker',
            description: 'Create a program that checks password strength. This teaches you about string analysis and security concepts.',
            difficulty: 3,
            starterCode: `# TODO: Check password strength
# 
# Engineers often need to validate input data for security.
# This teaches string analysis and logical thinking.
# 
# Password requirements:
# - At least 8 characters long
# - Contains at least one uppercase letter
# - Contains at least one lowercase letter
# - Contains at least one digit
# - Contains at least one special character (!@#$%^&*)
# 
# Your task: Create a function that returns password strength

def check_password_strength(password):
    # Your code goes here:
    # Replace this pass statement with your password validation logic
    # Check length, uppercase, lowercase, digits, and special characters
    pass

# Test your function - don't change these lines!
passwords = ["weak", "Better123", "StrongP@ss1", "NoSpecialChar1"]
for pwd in passwords:
    print(f"'{pwd}': {check_password_strength(pwd)}")`,
            solution: `# TODO: Check password strength
# 
# Engineers often need to validate input data for security.
# This teaches string analysis and logical thinking.
# 
# Password requirements:
# - At least 8 characters long
# - Contains at least one uppercase letter
# - Contains at least one lowercase letter
# - Contains at least one digit
# - Contains at least one special character (!@#$%^&*)
# 
# Your task: Create a function that returns password strength

def check_password_strength(password):
    # Your code goes here:
    if len(password) < 8:
        return "Weak"
    
    has_upper = any(char.isupper() for char in password)
    has_lower = any(char.islower() for char in password)
    has_digit = any(char.isdigit() for char in password)
    has_special = any(char in "!@#$%^&*" for char in password)
    
    if has_upper and has_lower and has_digit and has_special:
        return "Strong"
    elif has_upper and has_lower and has_digit:
        return "Medium"
    else:
        return "Weak"

# Test your function - don't change these lines!
passwords = ["weak", "Better123", "StrongP@ss1", "NoSpecialChar1"]
for pwd in passwords:
    print(f"'{pwd}': {check_password_strength(pwd)}")`,
            testCases: [
              {
                input: '',
                expectedOutput: /'weak': Weak\n'Better123': Medium\n'StrongP@ss1': Strong\n'NoSpecialChar1': Medium/,
                description: 'Password strength validation'
              }
            ],
            hints: [
              'Check length first: len(password) >= 8',
              'Use password.isupper() and password.islower() for letter checks',
              'Use any(char.isdigit() for char in password) for digit check',
              'Define special chars and check if any are in password'
            ],
            solutionExplanation: 'Input validation is crucial in engineering. This teaches you to check data quality and implement security measures.',
            reward: 30
          },
          {
            id: 'problem_solving_5',
            title: 'Fibonacci Sequence',
            description: 'Generate the Fibonacci sequence. This teaches you about mathematical sequences and recursion concepts.',
            difficulty: 3,
            starterCode: `# TODO: Generate Fibonacci sequence
# 
# Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
# Each number is the sum of the two preceding ones.
# 
# This appears in:
# - Nature (spiral shells, flower petals)
# - Computer algorithms
# - Financial modeling
# - Art and architecture
# 
# Your task: Generate first 10 Fibonacci numbers

def generate_fibonacci(n):
    # Your code goes here:
    # Replace this pass statement with your Fibonacci sequence generation
    # Start with [0, 1] and build the sequence up to n numbers
    pass

# Test your function - don't change these lines!
fib_sequence = generate_fibonacci(10)
print(f"First 10 Fibonacci numbers: {fib_sequence}")`,
            solution: `# TODO: Generate Fibonacci sequence
# 
# Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
# Each number is the sum of the two preceding ones.
# 
# This appears in:
# - Nature (spiral shells, flower petals)
# - Computer algorithms
# - Financial modeling
# - Art and architecture
# 
# Your task: Generate first 10 Fibonacci numbers

def generate_fibonacci(n):
    # Your code goes here:
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    sequence = [0, 1]
    for i in range(2, n):
        sequence.append(sequence[i-1] + sequence[i-2])
    
    return sequence

# Test your function - don't change these lines!
fib_sequence = generate_fibonacci(10)
print(f"First 10 Fibonacci numbers: {fib_sequence}")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'First 10 Fibonacci numbers: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]',
                description: 'Fibonacci sequence generation'
              }
            ],
            hints: [
              'Start with [0, 1] as the first two numbers',
              'Use a loop to generate the next numbers',
              'Each new number = previous + current',
              'Append each new number to the list'
            ],
            solutionExplanation: 'The Fibonacci sequence is fundamental in mathematics and appears throughout nature and engineering. Understanding it helps with algorithm design and pattern recognition.',
            reward: 35
          }
        ]
      }
    ]
  },
  mechanical: {
    id: 'mechanical',
    title: 'Mechanical Engineering',
    description: 'Apply Python to solve mechanical engineering problems',
    modules: [
      {
        id: 'forces',
        title: 'Force Calculations',
        description: 'Calculate forces, moments, and mechanical properties',
        lessons: [
          {
            id: 'forces_1',
            title: 'Newton\'s Second Law',
            description: 'Learn how mechanical engineers calculate forces using Newton\'s Second Law. This is fundamental physics that engineers use every day!',
            difficulty: 2,
            starterCode: `# TODO: Calculate force using Newton's Second Law
# 
# Newton's Second Law: F = ma
# Force = mass × acceleration
# 
# This law is used by mechanical engineers to:
# - Design car safety systems
# - Calculate rocket thrust
# - Design bridges and buildings
# 
# Your task: Create a function that calculates force
# 
# Think about it: What units are we working with?
# - Mass in kilograms (kg)
# - Acceleration in meters per second squared (m/s²)
# - Force in Newtons (N)

def calculate_force(mass, acceleration):
    # Your calculation goes here:
    # Replace this pass statement with your force calculation
    # Use Newton's Second Law: F = ma
    pass

# Test your function - don't change these lines!
print(f"Force for 2kg, 5 m/s²: {calculate_force(2, 5)} N")
print(f"Force for 10kg, 9.8 m/s²: {calculate_force(10, 9.8)} N")`,
            solution: `# TODO: Calculate force using Newton's Second Law
# 
# Newton's Second Law: F = ma
# Force = mass × acceleration
# 
# This law is used by mechanical engineers to:
# - Design car safety systems
# - Calculate rocket thrust
# - Design bridges and buildings
# 
# Your task: Create a function that calculates force
# 
# Think about it: What units are we working with?
# - Mass in kilograms (kg)
# - Acceleration in meters per second squared (m/s²)
# - Force in Newtons (N)

def calculate_force(mass, acceleration):
    # Your calculation goes here:
    pass

# Test your function - don't change these lines!
print(f"Force for 2kg, 5 m/s²: {calculate_force(2, 5)} N")
print(f"Force for 10kg, 9.8 m/s²: {calculate_force(10, 9.8)} N")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Force for 2kg, 5 m/s²: 10.0 N\nForce for 10kg, 9.8 m/s²: 98.0 N',
                description: 'Force calculation using F = ma'
              }
            ],
            hints: [
              'The formula is: Force = mass × acceleration',
              'In Python, use * for multiplication: mass * acceleration',
              'Make sure to return the calculated value',
              'This is exactly how engineers calculate forces in real projects'
            ],
            solutionExplanation: 'Newton\'s Second Law is fundamental in mechanical engineering, relating force, mass, and acceleration. Engineers use this every day to design everything from cars to rockets to buildings.',
            reward: 25
          },
          {
            id: 'forces_2',
            title: 'Kinetic Energy Calculator',
            description: 'Calculate kinetic energy using the formula KE = ½mv². This is essential for understanding motion and energy in mechanical systems.',
            difficulty: 2,
            starterCode: `# TODO: Calculate kinetic energy
# 
# Kinetic Energy = ½ × mass × velocity²
# 
# This formula is used by mechanical engineers for:
# - Vehicle safety design
# - Impact analysis
# - Energy efficiency calculations
# - Sports equipment design
# 
# Your task: Create a function that calculates kinetic energy

def calculate_kinetic_energy(mass, velocity):
    # Your calculation goes here:
    # Replace this pass statement with your kinetic energy calculation
    # Formula: KE = 0.5 × mass × velocity²
    pass

# Test your function - don't change these lines!
print(f"KE for 2kg at 5 m/s: {calculate_kinetic_energy(2, 5)} J")
print(f"KE for 1000kg car at 20 m/s: {calculate_kinetic_energy(1000, 20)} J")`,
            solution: `# TODO: Calculate kinetic energy
# 
# Kinetic Energy = ½ × mass × velocity²
# 
# This formula is used by mechanical engineers for:
# - Vehicle safety design
# - Impact analysis
# - Energy efficiency calculations
# - Sports equipment design
# 
# Your task: Create a function that calculates kinetic energy

def calculate_kinetic_energy(mass, velocity):
    # Your calculation goes here:
    return 0.5 * mass * velocity ** 2

# Test your function - don't change these lines!
print(f"KE for 2kg at 5 m/s: {calculate_kinetic_energy(2, 5)} J")
print(f"KE for 1000kg car at 20 m/s: {calculate_kinetic_energy(1000, 20)} J")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'KE for 2kg at 5 m/s: 25.0 J\nKE for 1000kg car at 20 m/s: 200000.0 J',
                description: 'Kinetic energy calculation'
              }
            ],
            hints: [
              'The formula is: KE = 0.5 × mass × velocity²',
              'In Python, use ** for exponentiation: velocity ** 2',
              'Remember: ½ = 0.5 in decimal form',
              'Units: mass in kg, velocity in m/s, result in Joules (J)'
            ],
            solutionExplanation: 'Kinetic energy is crucial for understanding how much energy moving objects carry. This helps engineers design safer vehicles, better brakes, and more efficient systems.',
            reward: 30
          },
          {
            id: 'forces_3',
            title: 'Simple Pendulum Period',
            description: 'Calculate the period of a simple pendulum. This teaches you about physics formulas and mathematical functions.',
            difficulty: 3,
            starterCode: `# TODO: Calculate pendulum period
# 
# Period = 2π × √(length / gravity)
# 
# This is used in:
# - Clock design
# - Seismometers
# - Physics experiments
# - Structural analysis
# 
# Constants:
# - π = 3.14159
# - g = 9.81 m/s² (Earth's gravity)

import math

def calculate_pendulum_period(length):
    # Your calculation goes here:
    # Replace this pass statement with your pendulum period calculation
    # Formula: period = 2 * π * sqrt(length / 9.81)
    pass

# Test your function - don't change these lines!
print(f"Pendulum (1m): {calculate_pendulum_period(1):.2f} seconds")
print(f"Pendulum (0.5m): {calculate_pendulum_period(0.5):.2f} seconds")`,
            solution: `# TODO: Calculate pendulum period
# 
# Period = 2π × √(length / gravity)
# 
# This is used in:
# - Clock design
# - Seismometers
# - Physics experiments
# - Structural analysis
# 
# Constants:
# - π = 3.14159
# - g = 9.81 m/s² (Earth's gravity)

import math

def calculate_pendulum_period(length):
    # Your calculation goes here:
    return 2 * math.pi * math.sqrt(length / 9.81)

# Test your function - don't change these lines!
print(f"Pendulum (1m): {calculate_pendulum_period(1):.2f} seconds")
print(f"Pendulum (0.5m): {calculate_pendulum_period(0.5):.2f} seconds")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Pendulum (1m): 2.01 seconds\nPendulum (0.5m): 1.42 seconds',
                description: 'Pendulum period calculation'
              }
            ],
            hints: [
              'Use math.sqrt() for square root',
              'The formula is: period = 2 * π * sqrt(length / 9.81)',
              'Remember to import math at the top',
              'Length is in meters, result in seconds'
            ],
            solutionExplanation: 'This introduces mathematical functions and physics constants. Engineers use similar calculations for timing devices, vibration analysis, and dynamic systems.',
            reward: 35
          }
        ]
      },
      {
        id: 'materials',
        title: 'Material Properties',
        description: 'Calculate material properties and stress analysis',
        lessons: [
          {
            id: 'stress_strain_1',
            title: 'Stress Calculation',
            description: 'Learn how mechanical engineers calculate stress in materials. Stress analysis is crucial for ensuring structures don\'t fail under load.',
            difficulty: 3,
            starterCode: `# TODO: Calculate stress in a structural member
# 
# Stress = Force / Cross-sectional Area
# Engineers use this to ensure materials can handle loads safely.
# 
# We have:
# - Force: 5000 N (Newtons)
# - Cross-sectional area: 0.01 m²
# 
# Your task: Calculate the stress and determine if it's safe
# Safe stress limit for this material: 400,000 Pa (Pascals)

# Your calculations go here:
force = 5000  # N
area = 0.01   # m²

stress = 

print(f"Applied stress: {stress} Pa")

# Check if stress is within safe limits
if stress <= 400000:
    print("Status: SAFE - Stress is within limits")
else:
    print("Status: UNSAFE - Stress exceeds limits")`,
            solution: `# TODO: Calculate stress in a structural member
# 
# Stress = Force / Cross-sectional Area
# Engineers use this to ensure materials can handle loads safely.
# 
# We have:
# - Force: 5000 N (Newtons)
# - Cross-sectional area: 0.01 m²
# 
# Your task: Calculate the stress and determine if it's safe
# Safe stress limit for this material: 400,000 Pa (Pascals)

# Your calculations go here:
force = 5000  # N
area = 0.01   # m²

stress = force / area  # Pa

print(f"Applied stress: {stress} Pa")

# Check if stress is within safe limits
if stress <= 400000:
    print("Status: SAFE - Stress is within limits")
else:
    print("Status: UNSAFE - Stress exceeds limits")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Applied stress: 500000.0 Pa\nStatus: UNSAFE - Stress exceeds limits',
                description: 'Stress calculation and safety check'
              }
            ],
            hints: [
              'Stress = Force / Area',
              'Use division operator (/) to calculate stress',
              'Compare stress with the safe limit using <=',
              'Remember to check if stress is LESS THAN OR EQUAL TO the limit'
            ],
            solutionExplanation: 'Stress analysis is fundamental in mechanical engineering. Engineers must ensure that materials can safely handle the loads they will experience in real-world applications.',
            reward: 35
          },
          {
            id: 'thermal_expansion_1',
            title: 'Thermal Expansion',
            description: 'Calculate how materials expand when heated. This is crucial for designing systems that operate at different temperatures.',
            difficulty: 3,
            starterCode: `# TODO: Calculate thermal expansion of a steel beam
# 
# Thermal expansion formula: ΔL = α × L₀ × ΔT
# Where:
# - ΔL = change in length
# - α = coefficient of thermal expansion (steel: 12×10⁻⁶/°C)
# - L₀ = original length
# - ΔT = temperature change
# 
# We have a steel beam:
# - Original length: 10 meters
# - Temperature increase: 50°C
# 
# Your task: Calculate the expansion and new length

# Your calculations go here:
alpha = 12e-6  # coefficient of thermal expansion for steel
L0 = 10        # original length in meters
delta_T = 50   # temperature change in °C

delta_L = 
new_length = 

print(f"Original length: {L0} m")
print(f"Temperature change: {delta_T}°C")
print(f"Expansion: {delta_L:.6f} m")
print(f"New length: {new_length:.6f} m")`,
            solution: `# TODO: Calculate thermal expansion of a steel beam
# 
# Thermal expansion formula: ΔL = α × L₀ × ΔT
# Where:
# - ΔL = change in length
# - α = coefficient of thermal expansion (steel: 12×10⁻⁶/°C)
# - L₀ = original length
# - ΔT = temperature change
# 
# We have a steel beam:
# - Original length: 10 meters
# - Temperature increase: 50°C
# 
# Your task: Calculate the expansion and new length

# Your calculations go here:
alpha = 12e-6  # coefficient of thermal expansion for steel
L0 = 10        # original length in meters
delta_T = 50   # temperature change in °C

delta_L = alpha * L0 * delta_T  # expansion in meters
new_length = L0 + delta_L       # new length

print(f"Original length: {L0} m")
print(f"Temperature change: {delta_T}°C")
print(f"Expansion: {delta_L:.6f} m")
print(f"New length: {new_length:.6f} m")`,
            testCases: [
              {
                input: '',
                expectedOutput: /Original length: 10 m\nTemperature change: 50°C\nExpansion: 0\.006000 m\nNew length: 10\.006000 m/,
                description: 'Thermal expansion calculation'
              }
            ],
            hints: [
              'Use scientific notation: 12e-6 = 12 × 10⁻⁶',
              'ΔL = α × L₀ × ΔT',
              'New length = Original length + Expansion',
              'Use .6f format to show 6 decimal places'
            ],
            solutionExplanation: 'Thermal expansion is critical in engineering design. Engineers must account for temperature changes to prevent structural problems in bridges, buildings, and machinery.',
            reward: 40
          }
        ]
      },
      {
        id: 'dynamics',
        title: 'Dynamics & Motion',
        description: 'Analyze motion, velocity, and acceleration',
        lessons: [
          {
            id: 'projectile_motion_1',
            title: 'Projectile Motion',
            description: 'Calculate the trajectory of a projectile. This is essential for aerospace engineering, ballistics, and sports equipment design.',
            difficulty: 4,
            starterCode: `# TODO: Calculate projectile motion parameters
# 
# For a projectile launched at angle θ with initial velocity v₀:
# - Range = (v₀² × sin(2θ)) / g
# - Maximum height = (v₀² × sin²(θ)) / (2g)
# 
# Where g = 9.81 m/s² (gravitational acceleration)
# 
# We have:
# - Initial velocity: 50 m/s
# - Launch angle: 45 degrees
# 
# Your task: Calculate range and maximum height
# Note: Use math.radians() to convert degrees to radians

import math

# Your calculations go here:
v0 = 50        # initial velocity in m/s
theta_deg = 45 # launch angle in degrees
g = 9.81       # gravitational acceleration in m/s²

# Convert angle to radians
theta_rad = math.radians(theta_deg)

# Calculate range
range_distance = 

# Calculate maximum height
max_height = 

print(f"Initial velocity: {v0} m/s")
print(f"Launch angle: {theta_deg}°")
print(f"Range: {range_distance:.2f} m")
print(f"Maximum height: {max_height:.2f} m")`,
            solution: `# TODO: Calculate projectile motion parameters
# 
# For a projectile launched at angle θ with initial velocity v₀:
# - Range = (v₀² × sin(2θ)) / g
# - Maximum height = (v₀² × sin²(θ)) / (2g)
# 
# Where g = 9.81 m/s² (gravitational acceleration)
# 
# We have:
# - Initial velocity: 50 m/s
# - Launch angle: 45 degrees
# 
# Your task: Calculate range and maximum height
# Note: Use math.radians() to convert degrees to radians

import math

# Your calculations go here:
v0 = 50        # initial velocity in m/s
theta_deg = 45 # launch angle in degrees
g = 9.81       # gravitational acceleration in m/s²

# Convert angle to radians
theta_rad = math.radians(theta_deg)

# Calculate range
range_distance = (v0**2 * math.sin(2 * theta_rad)) / g

# Calculate maximum height
max_height = (v0**2 * math.sin(theta_rad)**2) / (2 * g)

print(f"Initial velocity: {v0} m/s")
print(f"Launch angle: {theta_deg}°")
print(f"Range: {range_distance:.2f} m")
print(f"Maximum height: {max_height:.2f} m")`,
            testCases: [
              {
                input: '',
                expectedOutput: /Initial velocity: 50 m\/s\nLaunch angle: 45°\nRange: 254\.84 m\nMaximum height: 63\.71 m/,
                description: 'Projectile motion calculations'
              }
            ],
            hints: [
              'Import math module for trigonometric functions',
              'Convert degrees to radians: math.radians(45)',
              'Use math.sin() for sine function',
              'Use ** for exponentiation (v0**2 = v₀²)'
            ],
            solutionExplanation: 'Projectile motion is fundamental in physics and engineering. Engineers use these calculations for rocket design, sports equipment, and understanding how objects move through air.',
            reward: 45
          },
          {
            id: 'gear_ratio_1',
            title: 'Gear Ratio Calculator',
            description: 'Calculate gear ratios for mechanical systems. This is essential for designing transmissions, motors, and mechanical drives.',
            difficulty: 3,
            starterCode: `# TODO: Calculate gear ratios
# 
# Gear ratio = Number of teeth on driven gear / Number of teeth on driving gear
# 
# This is used in:
# - Automotive transmissions
# - Industrial machinery
# - Robotics
# - Bicycle design
# 
# Your task: Calculate gear ratio and output speed

def calculate_gear_ratio(driving_teeth, driven_teeth, input_speed):
    # Calculate gear ratio
    gear_ratio = 
    
    # Calculate output speed (output = input / ratio)
    output_speed = 
    
    return gear_ratio, output_speed

# Test cases
driving_gear = 20  # teeth on driving gear
driven_gear = 40   # teeth on driven gear
input_rpm = 1000   # revolutions per minute

ratio, output_rpm = calculate_gear_ratio(driving_gear, driven_gear, input_rpm)

print(f"Driving gear: {driving_gear} teeth")
print(f"Driven gear: {driven_gear} teeth")
print(f"Gear ratio: {ratio:.2f}")
print(f"Input speed: {input_rpm} RPM")
print(f"Output speed: {output_rpm:.1f} RPM")`,
            solution: `# TODO: Calculate gear ratios
# 
# Gear ratio = Number of teeth on driven gear / Number of teeth on driving gear
# 
# This is used in:
# - Automotive transmissions
# - Industrial machinery
# - Robotics
# - Bicycle design
# 
# Your task: Calculate gear ratio and output speed

def calculate_gear_ratio(driving_teeth, driven_teeth, input_speed):
    # Calculate gear ratio
    gear_ratio = driven_teeth / driving_teeth
    
    # Calculate output speed (output = input / ratio)
    output_speed = input_speed / gear_ratio
    
    return gear_ratio, output_speed

# Test cases
driving_gear = 20  # teeth on driving gear
driven_gear = 40   # teeth on driven gear
input_rpm = 1000   # revolutions per minute

ratio, output_rpm = calculate_gear_ratio(driving_gear, driven_gear, input_rpm)

print(f"Driving gear: {driving_gear} teeth")
print(f"Driven gear: {driven_gear} teeth")
print(f"Gear ratio: {ratio:.2f}")
print(f"Input speed: {input_rpm} RPM")
print(f"Output speed: {output_rpm:.1f} RPM")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Driving gear: 20 teeth\nDriven gear: 40 teeth\nGear ratio: 2.00\nInput speed: 1000 RPM\nOutput speed: 500.0 RPM',
                description: 'Gear ratio calculation'
              }
            ],
            hints: [
              'Gear ratio = driven_teeth / driving_teeth',
              'Output speed = input_speed / gear_ratio',
              'Return both values as a tuple',
              'Use .2f format for gear ratio display'
            ],
            solutionExplanation: 'Gear ratios are fundamental in mechanical engineering. Understanding them helps engineers design efficient power transmission systems.',
            reward: 40
          },
          {
            id: 'spring_constant_1',
            title: 'Spring Constant Calculator',
            description: 'Calculate spring constants and forces. This is essential for designing suspension systems, shock absorbers, and mechanical springs.',
            difficulty: 3,
            starterCode: `# TODO: Calculate spring force using Hooke's Law
# 
# Hooke's Law: F = -kx
# Where:
# - F = force exerted by spring
# - k = spring constant (N/m)
# - x = displacement from equilibrium (m)
# 
# This is used in:
# - Car suspension systems
# - Shock absorbers
# - Mechanical watches
# - Industrial machinery
# 
# Your task: Calculate spring force for different displacements

def calculate_spring_force(spring_constant, displacement):
    # Your calculation goes here:
    pass

# Test spring system
k = 1000  # N/m (spring constant)
displacements = [0.01, 0.02, 0.05, 0.1]  # meters

print("Spring Force Calculations:")
print("Displacement (m) | Force (N)")
print("-" * 30)

for x in displacements:
    force = calculate_spring_force(k, x)
    print(f"{x:14.3f} | {force:9.1f}")`,
            solution: `# TODO: Calculate spring force using Hooke's Law
# 
# Hooke's Law: F = -kx
# Where:
# - F = force exerted by spring
# - k = spring constant (N/m)
# - x = displacement from equilibrium (m)
# 
# This is used in:
# - Car suspension systems
# - Shock absorbers
# - Mechanical watches
# - Industrial machinery
# 
# Your task: Calculate spring force for different displacements

def calculate_spring_force(spring_constant, displacement):
    # Your calculation goes here:
    return -spring_constant * displacement

# Test spring system
k = 1000  # N/m (spring constant)
displacements = [0.01, 0.02, 0.05, 0.1]  # meters

print("Spring Force Calculations:")
print("Displacement (m) | Force (N)")
print("-" * 30)

for x in displacements:
    force = calculate_spring_force(k, x)
    print(f"{x:14.3f} | {force:9.1f}")`,
            solution: `# TODO: Calculate spring force using Hooke's Law
# 
# Hooke's Law: F = -kx
# Where:
# - F = force exerted by spring
# - k = spring constant (N/m)
# - x = displacement from equilibrium (m)
# 
# This is used in:
# - Car suspension systems
# - Shock absorbers
# - Mechanical watches
# - Industrial machinery
# 
# Your task: Calculate spring force for different displacements

def calculate_spring_force(spring_constant, displacement):
    # Your calculation goes here:
    return -spring_constant * displacement

# Test spring system
k = 1000  # N/m (spring constant)
displacements = [0.01, 0.02, 0.05, 0.1]  # meters

print("Spring Force Calculations:")
print("Displacement (m) | Force (N)")
print("-" * 30)

for x in displacements:
    force = calculate_spring_force(k, x)
    print(f"{x:14.3f} | {force:9.1f}")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Spring Force Calculations:\nDisplacement (m) | Force (N)\n-{30}\n0.010 | -10.0\n0.020 | -20.0\n0.050 | -50.0\n0.100 | -100.0',
                description: 'Spring force calculation'
              }
            ],
            hints: [
              'Use Hooke\'s Law: F = -k * x',
              'The negative sign indicates restoring force',
              'Force is in Newtons (N)',
              'Use proper formatting for table output'
            ],
            solutionExplanation: 'Hooke\'s Law is fundamental in mechanical engineering. Understanding spring behavior helps engineers design suspension systems and mechanical components.',
            reward: 35
          }
        ]
      }
    ]
  },
  computer: {
    id: 'computer',
    title: 'Computer Engineering',
    description: 'Learn algorithms, data structures, and computational thinking',
    modules: [
      {
        id: 'algorithms',
        title: 'Basic Algorithms',
        description: 'Implement fundamental algorithms and data structures',
        lessons: [
          {
            id: 'algorithms_1',
            title: 'Linear Search',
            description: 'Find an element in a list using linear search',
            difficulty: 2,
            starterCode: `# Implement linear search to find a target value in a list
# Return the index of the target, or -1 if not found

def linear_search(numbers, target):
    # Your code here
    # Replace this pass statement with your linear search implementation
    # Loop through the list and return the index when you find the target
    pass

# Test cases
numbers = [4, 2, 7, 1, 9, 3]
print(f"Searching for 7: {linear_search(numbers, 7)}")
print(f"Searching for 5: {linear_search(numbers, 5)}")`,
            solution: `# Implement linear search to find a target value in a list
# Return the index of the target, or -1 if not found

def linear_search(numbers, target):
    # Your code here
    for i, num in enumerate(numbers):
        if num == target:
            return i
    return -1

# Test cases
numbers = [4, 2, 7, 1, 9, 3]
print(f"Searching for 7: {linear_search(numbers, 7)}")
print(f"Searching for 5: {linear_search(numbers, 5)}")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Searching for 7: 2\nSearching for 5: -1',
                description: 'Linear search implementation'
              }
            ],
            hints: [
              'Loop through each element in the list',
              'Compare each element with the target',
              'Return the index when you find a match'
            ],
            solutionExplanation: 'Linear search is the simplest search algorithm, checking each element sequentially until the target is found.',
            reward: 30
          },
          {
            id: 'algorithms_2',
            title: 'Find Maximum Value',
            description: 'Find the maximum value in a list. This teaches you about loops and comparison logic.',
            difficulty: 2,
            starterCode: `# TODO: Find the maximum value in a list
# 
# This is a fundamental algorithm used in:
# - Data analysis
# - Statistics
# - Machine learning
# - Performance optimization
# 
# Your task: Create a function that finds the maximum value

def find_maximum(numbers):
    # Your code goes here:
    # Replace this pass statement with your maximum finding logic
    # Loop through the list and keep track of the largest number
    pass

# TODO: Uncomment the lines below after you implement your function
# numbers1 = [3, 7, 2, 9, 1, 5]
# numbers2 = [-5, -2, -10, -1]
# print(f"Max of {numbers1}: {find_maximum(numbers1)}")
# print(f"Max of {numbers2}: {find_maximum(numbers2)}")

# For now, just test your function with one list
print(f"Testing find_maximum([3, 7, 2, 9, 1, 5]): {find_maximum([3, 7, 2, 9, 1, 5])}")`,
            solution: `# TODO: Find the maximum value in a list
# 
# This is a fundamental algorithm used in:
# - Data analysis
# - Statistics
# - Machine learning
# - Performance optimization
# 
# Your task: Create a function that finds the maximum value

def find_maximum(numbers):
    # Your code goes here:
    max_val = numbers[0]
    for num in numbers:
        if num > max_val:
            max_val = num
    return max_val

# Test your function - don't change these lines!
numbers1 = [3, 7, 2, 9, 1, 5]
numbers2 = [-5, -2, -10, -1]
print(f"Max of {numbers1}: {find_maximum(numbers1)}")
print(f"Max of {numbers2}: {find_maximum(numbers2)}")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Max of [3, 7, 2, 9, 1, 5]: 9',
                description: 'Maximum value finding'
              }
            ],
            hints: [
              'Start with the first number as the maximum',
              'Loop through each number and compare',
              'If a number is larger, update the maximum',
              'Handle the case of negative numbers'
            ],
            solutionExplanation: 'This teaches the fundamental pattern of finding extremes in data. Computer scientists use this for optimization, data analysis, and algorithm design.',
            reward: 25
          },
          {
            id: 'algorithms_3',
            title: 'Count Occurrences',
            description: 'Count how many times a value appears in a list. This teaches you about data analysis and loops.',
            difficulty: 2,
            starterCode: `# TODO: Count occurrences of a value in a list
# 
# This algorithm is used in:
# - Text analysis
# - Data mining
# - Quality control
# - Statistical analysis
# 
# Your task: Create a function that counts occurrences

def count_occurrences(numbers, target):
    # Your code goes here:
    # Replace this pass statement with your occurrence counting logic
    # Loop through the list and count how many times target appears
    pass

# TODO: Uncomment the lines below after you implement your function
# numbers = [1, 2, 3, 2, 4, 2, 5, 2]
# print(f"Count of 2 in {numbers}: {count_occurrences(numbers, 2)}")
# print(f"Count of 7 in {numbers}: {count_occurrences(numbers, 7)}")

# For now, just test your function with one value
print(f"Testing count_occurrences([1, 2, 2, 3], 2): {count_occurrences([1, 2, 2, 3], 2)}")`,
            solution: `# TODO: Count occurrences of a value in a list
# 
# This algorithm is used in:
# - Text analysis
# - Data mining
# - Quality control
# - Statistical analysis
# 
# Your task: Create a function that counts occurrences

def count_occurrences(numbers, target):
    # Your code goes here:
    count = 0
    for num in numbers:
        if num == target:
            count += 1
    return count

# Test your function - don't change these lines!
numbers = [1, 2, 3, 2, 4, 2, 5, 2]
print(f"Count of 2 in {numbers}: {count_occurrences(numbers, 2)}")
print(f"Count of 7 in {numbers}: {count_occurrences(numbers, 7)}")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Count of 2 in [1, 2, 2, 3]: 3\nCount of 7 in [1, 2, 2, 3]: 0',
                description: 'Occurrence counting'
              }
            ],
            hints: [
              'Initialize a counter variable to 0',
              'Loop through each number in the list',
              'If the number equals the target, increment counter',
              'Return the final count'
            ],
            solutionExplanation: 'This teaches data analysis fundamentals. Computer engineers use this pattern for frequency analysis, pattern recognition, and data processing.',
            reward: 25
          }
        ]
      },
      {
        id: 'data_structures',
        title: 'Data Structures',
        description: 'Implement and use fundamental data structures',
        lessons: [
          {
            id: 'stack_implementation',
            title: 'Stack Implementation',
            description: 'Implement a stack data structure. Stacks are used in programming for function calls, undo operations, and parsing.',
            difficulty: 3,
            starterCode: `# TODO: Implement a simple stack class
# 
# A stack is a LIFO (Last In, First Out) data structure
# Operations: push (add), pop (remove), peek (view top)
# 
# This is used in:
# - Function call management
# - Undo/redo operations
# - Expression parsing
# - Memory management

class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        # Add item to top of stack
        # Replace this pass statement with your push implementation
        pass
    
    def pop(self):
        # Remove and return top item
        # Replace this pass statement with your pop implementation
        pass
    
    def peek(self):
        # Return top item without removing
        # Replace this pass statement with your peek implementation
        pass
    
    def is_empty(self):
        # Check if stack is empty
        # Replace this pass statement with your is_empty implementation
        pass

# Test your stack - don't change these lines!
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(f"Peek: {stack.peek()}")
print(f"Pop: {stack.pop()}")
print(f"Peek after pop: {stack.peek()}")`,
            solution: `# TODO: Implement a simple stack class
# 
# A stack is a LIFO (Last In, First Out) data structure
# Operations: push (add), pop (remove), peek (view top)
# 
# This is used in:
# - Function call management
# - Undo/redo operations
# - Expression parsing
# - Memory management

class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        # Add item to top of stack
        self.items.append(item)
    
    def pop(self):
        # Remove and return top item
        if not self.items:
            return None
        return self.items.pop()
    
    def peek(self):
        # Return top item without removing
        if not self.items:
            return None
        return self.items[-1]
    
    def is_empty(self):
        # Check if stack is empty
        return len(self.items) == 0

# Test your stack - don't change these lines!
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(f"Peek: {stack.peek()}")
print(f"Pop: {stack.pop()}")
print(f"Peek after pop: {stack.peek()}")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Peek: 3\nPop: 3\nPeek after pop: 2',
                description: 'Stack operations'
              }
            ],
            hints: [
              'Use a list to store stack items',
              'push: append item to the end of the list',
              'pop: remove and return the last item',
              'peek: return the last item without removing it'
            ],
            solutionExplanation: 'Stacks are fundamental data structures used throughout computer science. Understanding them helps with algorithm design and system architecture.',
            reward: 40
          },
          {
            id: 'binary_search',
            title: 'Binary Search',
            description: 'Implement binary search algorithm. This is one of the most efficient search algorithms for sorted data.',
            difficulty: 4,
            starterCode: `# TODO: Implement binary search
# 
# Binary search works on SORTED arrays
# Time complexity: O(log n) - very efficient!
# 
# Algorithm:
# 1. Compare target with middle element
# 2. If equal, return index
# 3. If target < middle, search left half
# 4. If target > middle, search right half
# 5. Repeat until found or array exhausted

def binary_search(arr, target):
    # Your code here
    # Replace this pass statement with your binary search implementation
    # Use left and right pointers to divide and conquer
    pass

# TODO: Uncomment the lines below after you implement your function
# sorted_numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
# print(f"Searching for 7: {binary_search(sorted_numbers, 7)}")
# print(f"Searching for 10: {binary_search(sorted_numbers, 10)}")

# For now, just test your function with one value
print(f"Testing binary_search([1, 3, 5, 7, 9], 7): {binary_search([1, 3, 5, 7, 9], 7)}")`,
            solution: `# TODO: Implement binary search
# 
# Binary search works on SORTED arrays
# Time complexity: O(log n) - very efficient!
# 
# Algorithm:
# 1. Compare target with middle element
# 2. If equal, return index
# 3. If target < middle, search left half
# 4. If target > middle, search right half
# 5. Repeat until found or array exhausted

def binary_search(arr, target):
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1  # Not found

# Test your function - don't change these lines!
sorted_numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
print(f"Searching for 7: {binary_search(sorted_numbers, 7)}")
print(f"Searching for 10: {binary_search(sorted_numbers, 10)}")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Testing binary_search([1, 3, 5, 7, 9], 7): 3',
                description: 'Binary search implementation'
              }
            ],
            hints: [
              'Keep track of left and right boundaries',
              'Calculate middle: (left + right) // 2',
              'Compare target with middle element',
              'Adjust boundaries based on comparison'
            ],
            solutionExplanation: 'Binary search is a cornerstone algorithm in computer science. Its logarithmic time complexity makes it essential for efficient data retrieval in large datasets.',
            reward: 45
          },
          {
            id: 'sorting',
            title: 'Sorting Algorithms',
            description: 'Implement and understand sorting algorithms',
            lessons: [
              {
                id: 'bubble_sort',
                title: 'Bubble Sort',
                description: 'Implement bubble sort algorithm. While not the most efficient, it\'s a great way to understand sorting concepts.',
                difficulty: 3,
                starterCode: `# TODO: Implement bubble sort
# 
# Bubble sort repeatedly steps through the list,
# compares adjacent elements, and swaps them if needed
# 
# Time complexity: O(n²) - not efficient but simple to understand
# 
# Algorithm:
# 1. Compare adjacent elements
# 2. Swap if they are in wrong order
# 3. Repeat until no swaps needed

def bubble_sort(arr):
    # Your code here
    # Replace this pass statement with your bubble sort implementation
    # Compare adjacent elements and swap if needed
    pass

# Test your function - don't change these lines!
numbers = [64, 34, 25, 12, 22, 11, 90]
sorted_numbers = bubble_sort(numbers.copy())
print(f"Original: {numbers}")
print(f"Sorted: {sorted_numbers}")`,
                solution: `# TODO: Implement bubble sort
# 
# Bubble sort repeatedly steps through the list,
# compares adjacent elements, and swaps them if needed
# 
# Time complexity: O(n²) - not efficient but simple to understand
# 
# Algorithm:
# 1. Compare adjacent elements
# 2. Swap if they are in wrong order
# 3. Repeat until no swaps needed

def bubble_sort(arr):
    n = len(arr)
    
    for i in range(n):
        # Flag to optimize - if no swaps, array is sorted
        swapped = False
        
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap elements
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        
        # If no swapping occurred, array is sorted
        if not swapped:
            break
    
    return arr

# Test your function - don't change these lines!
numbers = [64, 34, 25, 12, 22, 11, 90]
sorted_numbers = bubble_sort(numbers.copy())
print(f"Original: {numbers}")
print(f"Sorted: {sorted_numbers}")`,
                testCases: [
                  {
                    input: '',
                    expectedOutput: 'Original: [64, 34, 25, 12, 22, 11, 90]\nSorted: [11, 12, 22, 25, 34, 64, 90]',
                    description: 'Bubble sort implementation'
                  }
                ],
                hints: [
                  'Use nested loops to compare adjacent elements',
                  'Swap elements if they are in wrong order',
                  'Use a flag to optimize - stop if no swaps occur',
                  'The largest element "bubbles up" to the end'
                ],
                solutionExplanation: 'Bubble sort teaches fundamental sorting concepts. While not practical for large datasets, understanding it helps with more efficient algorithms.',
                reward: 35
              },
              {
                id: 'palindrome_checker',
                title: 'Palindrome Checker',
                description: 'Check if a string is a palindrome. This teaches string manipulation and algorithm thinking.',
                difficulty: 2,
                starterCode: `# TODO: Check if a string is a palindrome
# 
# A palindrome reads the same forwards and backwards
# Examples: "racecar", "level", "radar", "anna"
# 
# This is used in:
# - Text processing
# - Data validation
# - Algorithm design
# - Natural language processing
# 
# Your task: Create a function that returns True if palindrome

def is_palindrome(text):
    # Your code goes here:
    # Replace this pass statement with your palindrome checking logic
    # Compare the string with its reverse
    pass

# TODO: Uncomment the lines below after you implement your function
# test_words = ["racecar", "hello", "level", "python", "anna"]
# for word in test_words:
#     print(f"'{word}': {is_palindrome(word)}")

# For now, just test your function with one word
print(f"Testing is_palindrome('racecar'): {is_palindrome('racecar')}")`,
                solution: `# TODO: Check if a string is a palindrome
# 
# A palindrome reads the same forwards and backwards
# Examples: "racecar", "level", "radar", "anna"
# 
# This is used in:
# - Text processing
# - Data validation
# - Algorithm design
# - Natural language processing
# 
# Your task: Create a function that returns True if palindrome

def is_palindrome(text):
    # Your code goes here:
    return text == text[::-1]

# TODO: Uncomment the lines below after you implement your function
# test_words = ["racecar", "hello", "level", "python", "anna"]
# for word in test_words:
#     print(f"'{word}': {is_palindrome(word)}")

# For now, just test your function with one word
print(f"Testing is_palindrome('racecar'): {is_palindrome('racecar')}")`,
                testCases: [
                  {
                    input: '',
                    expectedOutput: "'racecar': True\n'hello': False\n'level': True\n'python': False\n'anna': True",
                    description: 'Palindrome checking'
                  }
                ],
                hints: [
                  'Compare the string with its reverse',
                  'You can reverse a string with text[::-1]',
                  'Ignore case by converting to lowercase first',
                  'Remove spaces if needed: text.replace(" ", "")'
                ],
                solutionExplanation: 'Palindrome checking teaches string manipulation and algorithm design. This pattern is used in text processing and data validation.',
                reward: 25
              },
              {
                id: 'prime_number_checker',
                title: 'Prime Number Checker',
                description: 'Check if a number is prime. This teaches mathematical algorithms and optimization.',
                difficulty: 3,
                starterCode: `# TODO: Check if a number is prime
# 
# A prime number is only divisible by 1 and itself
# Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31
# 
# This is used in:
# - Cryptography
# - Number theory
# - Computer security
# - Mathematical algorithms
# 
# Your task: Create a function that returns True if prime

def is_prime(number):
    # Your code goes here:
    # Replace this pass statement with your prime number checking logic
    # Check if the number is only divisible by 1 and itself
    pass

# TODO: Uncomment the lines below after you implement your function
# test_numbers = [2, 3, 4, 17, 25, 29, 30, 31]
# for num in test_numbers:
#     print(f"{num}: {is_prime(num)}")

# For now, just test your function with one number
print(f"Testing is_prime(7): {is_prime(7)}")`,
                solution: `# TODO: Check if a number is prime
# 
# A prime number is only divisible by 1 and itself
# Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31
# 
# This is used in:
# - Cryptography
# - Number theory
# - Computer security
# - Mathematical algorithms
# 
# Your task: Create a function that returns True if prime

def is_prime(number):
    # Your code goes here:
    if number <= 1:
        return False
    if number <= 3:
        return True
    if number % 2 == 0 or number % 3 == 0:
        return False
    i = 5
    while i * i <= number:
        if number % i == 0 or number % (i + 2) == 0:
            return False
        i += 6
    return True

# Test your function - don't change these lines!
test_numbers = [2, 3, 4, 17, 25, 29, 30, 31]
for num in test_numbers:
    print(f"{num}: {is_prime(num)}")`,
                testCases: [
                  {
                    input: '',
                    expectedOutput: '7: True',
                    description: 'Prime number checking'
                  }
                ],
                hints: [
                  'Check if number is less than 2 (not prime)',
                  'Check if number is 2 (prime)',
                  'Check if number is even and greater than 2 (not prime)',
                  'Check odd divisors up to square root of number'
                ],
                solutionExplanation: 'Prime number checking is fundamental in computer science. Understanding this helps with cryptography, security, and mathematical algorithms.',
                reward: 30
              }
            ]
          }
        ]
      }
    ]
  },
  bioengineering: {
    id: 'bioengineering',
    title: 'Bioengineering',
    description: 'Apply programming to biological and medical problems',
    modules: [
      {
        id: 'biostatistics',
        title: 'Biostatistics',
        description: 'Analyze biological data using Python',
        lessons: [
          {
            id: 'biostatistics_1',
            title: 'Calculate DNA Base Frequencies',
            description: 'Count the frequency of each DNA base in a sequence',
            difficulty: 2,
            starterCode: `# Calculate the frequency of each DNA base (A, T, G, C)
# Return a dictionary with base counts

def count_dna_bases(dna_sequence):
    # Your code here
    # Replace this pass statement with your DNA base counting logic
    # Create a dictionary to count A, T, G, C bases
    pass

# TODO: Uncomment the lines below after you implement your function
# dna = "ATCGATCGATCG"
# result = count_dna_bases(dna)
# print(f"DNA sequence: {dna}")
# print(f"Base counts: {result}")

# For now, just test your function with one sequence
print(f"Testing count_dna_bases('ATCG'): {count_dna_bases('ATCG')}")`,
            solution: `# Calculate the frequency of each DNA base (A, T, G, C)
# Return a dictionary with base counts

def count_dna_bases(dna_sequence):
    # Your code here
    base_counts = {'A': 0, 'T': 0, 'G': 0, 'C': 0}
    for base in dna_sequence:
        if base in base_counts:
            base_counts[base] += 1
    return base_counts

# Test your function - don't change these lines!
dna = "ATCGATCGATCG"
result = count_dna_bases(dna)
print(f"DNA sequence: {dna}")
print(f"Base counts: {result}")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'DNA sequence: ATCGATCGATCG\nBase counts: {\'A\': 3, \'T\': 3, \'C\': 3, \'G\': 3}',
                description: 'DNA base frequency calculation'
              }
            ],
            hints: [
              'Use a dictionary to store counts',
              'Loop through each character in the sequence',
              'Initialize counts to 0 for each base'
            ],
            solutionExplanation: 'DNA analysis is fundamental in bioengineering, helping us understand genetic information and patterns.',
            reward: 35
          },
          {
            id: 'biostatistics_2',
            title: 'Calculate Average',
            description: 'Calculate the average (mean) of a list of numbers. This is essential for statistical analysis in biology.',
            difficulty: 2,
            starterCode: `# TODO: Calculate the average of a list of numbers
# 
# Average = sum of all numbers ÷ count of numbers
# 
# This is used in bioengineering for:
# - Clinical trial analysis
# - Population studies
# - Laboratory measurements
# - Quality control
# 
# Your task: Create a function that calculates the average

def calculate_average(numbers):
    # Your calculation goes here:
    # Replace this pass statement with your average calculation
    # Formula: sum of all numbers ÷ count of numbers
    pass

# TODO: Uncomment the lines below after you implement your function
# test_scores = [85, 92, 78, 96, 88, 91]
# heights = [165, 172, 168, 175, 170]
# print(f"Average test score: {calculate_average(test_scores):.1f}")
# print(f"Average height: {calculate_average(heights):.1f} cm")

# For now, just test your function with one list
print(f"Testing calculate_average([1, 2, 3]): {calculate_average([1, 2, 3])}")`,
            solution: `# TODO: Calculate the average of a list of numbers
# 
# Average = sum of all numbers ÷ count of numbers
# 
# This is used in bioengineering for:
# - Clinical trial analysis
# - Population studies
# - Laboratory measurements
# - Quality control
# 
# Your task: Create a function that calculates the average

def calculate_average(numbers):
    # Your calculation goes here:
    return sum(numbers) / len(numbers)

# Test your function - don't change these lines!
test_scores = [85, 92, 78, 96, 88, 91]
heights = [165, 172, 168, 175, 170]
print(f"Average test score: {calculate_average(test_scores):.1f}")
print(f"Average height: {calculate_average(heights):.1f} cm")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Average test score: 88.3\nAverage height: 170.0 cm',
                description: 'Average calculation'
              }
            ],
            hints: [
              'First, calculate the sum of all numbers',
              'Then divide by the count of numbers',
              'Use len() to get the count of items in a list',
              'Use sum() to add all numbers in a list'
            ],
            solutionExplanation: 'Statistical analysis is crucial in bioengineering. This teaches the fundamental concept of central tendency, used in clinical research and data analysis.',
            reward: 25
          },
          {
            id: 'biostatistics_3',
            title: 'Check for Duplicates',
            description: 'Check if a list contains duplicate values. This is important for data validation in biological research.',
            difficulty: 2,
            starterCode: `# TODO: Check if a list has duplicate values
# 
# This is used in bioengineering for:
# - Data validation
# - Sample tracking
# - Quality assurance
# - Research integrity
# 
# Your task: Create a function that returns True if duplicates exist

def has_duplicates(numbers):
    # Your code goes here:
    # Replace this pass statement with your duplicate detection logic
    # Check if any number appears more than once in the list
    pass

# Test your function - don't change these lines!
sample1 = [1, 2, 3, 4, 5]
sample2 = [1, 2, 3, 2, 4]
print(f"Sample 1 has duplicates: {has_duplicates(sample1)}")
print(f"Sample 2 has duplicates: {has_duplicates(sample2)}")`,
            solution: `# TODO: Check if a list has duplicate values
# 
# This is used in bioengineering for:
# - Data validation
# - Sample tracking
# - Quality assurance
# - Research integrity
# 
# Your task: Create a function that returns True if duplicates exist

def has_duplicates(numbers):
    # Your code goes here:
    seen = set()
    for num in numbers:
        if num in seen:
            return True
        seen.add(num)
    return False

# Test your function - don't change these lines!
sample1 = [1, 2, 3, 4, 5]
sample2 = [1, 2, 3, 2, 4]
print(f"Sample 1 has duplicates: {has_duplicates(sample1)}")
print(f"Sample 2 has duplicates: {has_duplicates(sample2)}")`,
            testCases: [
              {
                input: '',
                expectedOutput: 'Sample 1 has duplicates: False\nSample 2 has duplicates: True',
                description: 'Duplicate detection'
              }
            ],
            hints: [
              'Compare each number with all other numbers',
              'Use nested loops to check each pair',
              'If you find any two equal numbers, return True',
              'If no duplicates found after checking all, return False'
            ],
            solutionExplanation: 'Data validation is essential in bioengineering research. This teaches you to check data integrity and ensure research quality.',
            reward: 30
          }
        ]
      },
      {
        id: 'medical_imaging',
        title: 'Medical Imaging Analysis',
        description: 'Process and analyze medical imaging data',
        lessons: [
          {
            id: 'image_processing_1',
            title: 'Image Pixel Analysis',
            description: 'Analyze pixel values in medical images. This is fundamental for understanding image processing in medical diagnostics.',
            difficulty: 3,
            starterCode: `# TODO: Analyze pixel values in a medical image
# 
# Medical images are represented as 2D arrays of pixel values
# Each pixel has an intensity value (0-255 for grayscale)
# 
# Your task: Calculate statistics for a medical image region
# 
# This is used in:
# - X-ray analysis
# - MRI interpretation
# - Ultrasound processing
# - Medical diagnostics

# Simulated medical image data (pixel intensities)
image_region = [
    [120, 135, 140, 125],
    [130, 145, 150, 135],
    [125, 140, 145, 130],
    [115, 130, 135, 120]
]

# Your analysis goes here:
def analyze_image_region(image):
    # Your code here
    # Replace this pass statement with your image analysis logic
    # Calculate total pixels, average intensity, min, and max values
    pass

# Analyze the image region
results = analyze_image_region(image_region)

print(f"Image Analysis Results:")
print(f"Total pixels: {results['total_pixels']}")
print(f"Average intensity: {results['average_intensity']:.1f}")
print(f"Intensity range: {results['min_intensity']} - {results['max_intensity']}")`,
            solution: `# TODO: Analyze pixel values in a medical image
# 
# Medical images are represented as 2D arrays of pixel values
# Each pixel has an intensity value (0-255 for grayscale)
# 
# Your task: Calculate statistics for a medical image region
# 
# This is used in:
# - X-ray analysis
# - MRI interpretation
# - Ultrasound processing
# - Medical diagnostics

# Simulated medical image data (pixel intensities)
image_region = [
    [120, 135, 140, 125],
    [130, 145, 150, 135],
    [125, 140, 145, 130],
    [115, 130, 135, 120]
]

# Your analysis goes here:
def analyze_image_region(image):
    # Calculate total number of pixels
    total_pixels = len(image) * len(image[0])
    
    # Calculate sum of all pixel values
    total_intensity = 0
    for row in image:
        for pixel in row:
            total_intensity += pixel
    
    # Calculate average intensity
    average_intensity = total_intensity / total_pixels
    
    # Find minimum and maximum values
    min_intensity = min(min(row) for row in image)
    max_intensity = max(max(row) for row in image)
    
    return {
        'total_pixels': total_pixels,
        'average_intensity': average_intensity,
        'min_intensity': min_intensity,
        'max_intensity': max_intensity
    }

# Analyze the image region
results = analyze_image_region(image_region)

print(f"Image Analysis Results:")
print(f"Total pixels: {results['total_pixels']}")
print(f"Average intensity: {results['average_intensity']:.1f}")
print(f"Intensity range: {results['min_intensity']} - {results['max_intensity']}")`,
            testCases: [
              {
                input: '',
                expectedOutput: /Image Analysis Results:\nTotal pixels: 16\nAverage intensity: 132\.5\nIntensity range: 115 - 150/,
                description: 'Medical image analysis'
              }
            ],
            hints: [
              'Use nested loops to process 2D array',
              'Calculate sum of all pixel values',
              'Use min() and max() functions with nested comprehensions',
              'Divide total intensity by total pixels for average'
            ],
            solutionExplanation: 'Medical image analysis is crucial in bioengineering. Understanding pixel-level data helps engineers develop better diagnostic tools and imaging software.',
            reward: 40
          }
        ]
      },
      {
        id: 'drug_delivery',
        title: 'Drug Delivery Systems',
        description: 'Model drug delivery and pharmacokinetics',
        lessons: [
          {
            id: 'concentration_calculation',
            title: 'Drug Concentration Over Time',
            description: 'Calculate drug concentration in the body over time using exponential decay. This models how drugs are metabolized.',
            difficulty: 4,
            starterCode: `# TODO: Model drug concentration over time
# 
# Drug concentration follows exponential decay: C(t) = C₀ × e^(-kt)
# Where:
# - C(t) = concentration at time t
# - C₀ = initial concentration
# - k = elimination rate constant
# - t = time
# 
# This is used in:
# - Drug dosing calculations
# - Pharmacokinetic modeling
# - Clinical trial design
# - Personalized medicine

import math

def calculate_drug_concentration(initial_concentration, elimination_rate, time):
    # Your calculation goes here:
    # Replace this pass statement with your drug concentration calculation
    # Formula: C(t) = C₀ × e^(-kt)
    pass

# Model parameters
initial_conc = 100  # mg/L (initial drug concentration)
elimination_rate = 0.1  # per hour (how fast drug is eliminated)
time_points = [0, 2, 4, 6, 8, 10]  # hours

# TODO: Uncomment the lines below after you implement your function
# print("Drug Concentration Over Time:")
# print("Time (hr) | Concentration (mg/L)")
# print("-" * 35)
# for time in time_points:
#     concentration = calculate_drug_concentration(initial_conc, elimination_rate, time)
#     print(f"{time:8.1f} | {concentration:14.2f}")

# For now, just test your function with one value
print(f"Testing calculate_drug_concentration(100, 0.1, 0): {calculate_drug_concentration(100, 0.1, 0)}")`,
            solution: `# TODO: Model drug concentration over time
# 
# Drug concentration follows exponential decay: C(t) = C₀ × e^(-kt)
# Where:
# - C(t) = concentration at time t
# - C₀ = initial concentration
# - k = elimination rate constant
# - t = time
# 
# This is used in:
# - Drug dosing calculations
# - Pharmacokinetic modeling
# - Clinical trial design
# - Personalized medicine

import math

def calculate_drug_concentration(initial_concentration, elimination_rate, time):
    # Your calculation goes here:
    return initial_concentration * math.exp(-elimination_rate * time)

# Model parameters
initial_conc = 100  # mg/L (initial drug concentration)
elimination_rate = 0.1  # per hour (how fast drug is eliminated)
time_points = [0, 2, 4, 6, 8, 10]  # hours

# Test your function - don't change these lines!
print("Drug Concentration Over Time:")
print("Time (hr) | Concentration (mg/L)")
print("-" * 35)
for time in time_points:
    concentration = calculate_drug_concentration(initial_conc, elimination_rate, time)
    print(f"{time:8.1f} | {concentration:14.2f}")`,
            testCases: [
              {
                input: '',
                expectedOutput: /Drug Concentration Over Time:\nTime \(hr\) \| Concentration \(mg\/L\)\n-{35}\n0\.0 \| 100\.00\n2\.0 \| 81\.87\n4\.0 \| 67\.03\n6\.0 \| 54\.88\n8\.0 \| 44\.93\n10\.0 \| 36\.79/,
                description: 'Drug concentration modeling'
              }
            ],
            hints: [
              'Use math.exp() for exponential function',
              'Formula: concentration = initial_conc * exp(-rate * time)',
              'Import math module at the top',
              'Use proper formatting for table output'
            ],
            solutionExplanation: 'Pharmacokinetic modeling is essential in bioengineering. Understanding how drugs behave in the body helps engineers design better drug delivery systems and optimize dosing.',
            reward: 45
          },
          {
            id: 'bmi_calculator',
            title: 'BMI Calculator',
            description: 'Calculate Body Mass Index (BMI). This is essential for health assessments and medical diagnostics.',
            difficulty: 2,
            starterCode: `# TODO: Calculate BMI and health category
# 
# BMI = weight (kg) / height (m)²
# 
# BMI Categories:
# - Underweight: < 18.5
# - Normal: 18.5 - 24.9
# - Overweight: 25.0 - 29.9
# - Obese: ≥ 30.0
# 
# This is used in:
# - Clinical assessments
# - Health screenings
# - Research studies
# - Public health programs

def calculate_bmi(weight_kg, height_m):
    # Calculate BMI
    # Replace this pass statement with your BMI calculation
    # Formula: BMI = weight (kg) / height (m)²
    pass

def get_bmi_category(bmi):
    # Determine health category
    # Replace this pass statement with your BMI category logic
    # Check BMI ranges to determine health category
    pass

# TODO: Uncomment the lines below after you implement your functions
# patients = [
#     {"name": "Alice", "weight": 65, "height": 1.70},
#     {"name": "Bob", "weight": 80, "height": 1.75},
#     {"name": "Carol", "weight": 55, "height": 1.60}
# ]
# print("BMI Analysis:")
# print("Name  | Weight (kg) | Height (m) | BMI  | Category")
# print("-" * 55)
# for patient in patients:
#     bmi = calculate_bmi(patient["weight"], patient["height"])
#     category = get_bmi_category(bmi)
#     print(f"{patient['name']:5} | {patient['weight']:11} | {patient['height']:9.2f} | {bmi:4.1f} | {category}")

# For now, just test your function with one patient
print(f"Testing calculate_bmi(65, 1.70): {calculate_bmi(65, 1.70)}")`,
            solution: `# TODO: Calculate BMI and health category
# 
# BMI = weight (kg) / height (m)²
# 
# BMI Categories:
# - Underweight: < 18.5
# - Normal: 18.5 - 24.9
# - Overweight: 25.0 - 29.9
# - Obese: ≥ 30.0
# 
# This is used in:
# - Clinical assessments
# - Health screenings
# - Research studies
# - Public health programs

def calculate_bmi(weight_kg, height_m):
    # Calculate BMI
    bmi = weight_kg / (height_m ** 2)
    return bmi

def get_bmi_category(bmi):
    # Determine health category
    if bmi < 18.5:
        return "Underweight"
    elif bmi < 25.0:
        return "Normal"
    elif bmi < 30.0:
        return "Overweight"
    else:
        return "Obese"

# Test your function - don't change these lines!
patients = [
    {"name": "Alice", "weight": 65, "height": 1.70},
    {"name": "Bob", "weight": 80, "height": 1.75},
    {"name": "Carol", "weight": 55, "height": 1.60}
]
print("BMI Analysis:")
print("Name  | Weight (kg) | Height (m) | BMI  | Category")
print("-" * 55)
for patient in patients:
    bmi = calculate_bmi(patient["weight"], patient["height"])
    category = get_bmi_category(bmi)
    print(f"{patient['name']:5} | {patient['weight']:11} | {patient['height']:9.2f} | {bmi:4.1f} | {category}")`,
            testCases: [
              {
                input: '',
                expectedOutput: /BMI Analysis:\nName  \| Weight \(kg\) \| Height \(m\) \| BMI  \| Category\n-{55}\nAlice \| 65 \| 1\.70 \| 22\.5 \| Normal\nBob   \| 80 \| 1\.75 \| 26\.1 \| Overweight\nCarol \| 55 \| 1\.60 \| 21\.5 \| Normal/,
                description: 'BMI calculation and categorization'
              }
            ],
            hints: [
              'BMI = weight / (height²)',
              'Use ** for exponentiation: height ** 2',
              'Check BMI ranges to determine category',
              'Use if/elif/else for category determination'
            ],
            solutionExplanation: 'BMI calculation is fundamental in healthcare and bioengineering. Understanding this helps with health assessments and medical diagnostics.',
            reward: 30
          },
          {
            id: 'heart_rate_analyzer',
            title: 'Heart Rate Analyzer',
            description: 'Analyze heart rate data to determine health status. This teaches data analysis and medical diagnostics.',
            difficulty: 3,
            starterCode: `# TODO: Analyze heart rate data
# 
# Heart rate zones:
# - Resting: 60-100 bpm (normal resting)
# - Light exercise: 90-120 bpm
# - Moderate exercise: 120-150 bpm
# - Intense exercise: 150-180 bpm
# - Maximum: > 180 bpm
# 
# This is used in:
# - Fitness tracking
# - Medical monitoring
# - Sports science
# - Health assessments

def analyze_heart_rate(heart_rate):
    # Determine heart rate zone
    # Replace this pass statement with your heart rate zone logic
    # Check heart rate ranges to determine exercise zone
    pass

def calculate_average_heart_rate(heart_rates):
    # Calculate average heart rate
    # Replace this pass statement with your average calculation
    # Formula: sum of all heart rates ÷ count of readings
    pass

# Test data - heart rate readings over time
heart_rate_data = [72, 85, 95, 110, 125, 140, 155, 170, 145, 120, 95, 78]

# TODO: Uncomment the test code below after you implement your functions
# print("Heart Rate Analysis:")
# print("Reading | Rate (bpm) | Zone")
# print("-" * 35)

# for i, rate in enumerate(heart_rate_data, 1):
#     zone = analyze_heart_rate(rate)
#     print(f"{i:7} | {rate:10} | {zone}")

# # Calculate statistics
# avg_rate = calculate_average_heart_rate(heart_rate_data)
# max_rate = max(heart_rate_data)
# min_rate = min(heart_rate_data)

# print(f"\nStatistics:")
# print(f"Average heart rate: {avg_rate:.1f} bpm")
# print(f"Maximum heart rate: {max_rate} bpm")
# print(f"Minimum heart rate: {min_rate} bpm")

# For now, just test your functions individually
print("Testing your functions...")
print(f"analyze_heart_rate(72) should return 'Resting': {analyze_heart_rate(72)}")
print(f"calculate_average_heart_rate([72, 85, 95]) should return 84.0: {calculate_average_heart_rate([72, 85, 95])}")`,
            solution: `# TODO: Analyze heart rate data
# 
# Heart rate zones:
# - Resting: 60-100 bpm (normal resting)
# - Light exercise: 90-120 bpm
# - Moderate exercise: 120-150 bpm
# - Intense exercise: 150-180 bpm
# - Maximum: > 180 bpm
# 
# This is used in:
# - Fitness tracking
# - Medical monitoring
# - Sports science
# - Health assessments

def analyze_heart_rate(heart_rate):
    # Determine heart rate zone
    if heart_rate < 60:
        return "Below normal"
    elif heart_rate <= 100:
        return "Resting"
    elif heart_rate <= 120:
        return "Light exercise"
    elif heart_rate <= 150:
        return "Moderate exercise"
    elif heart_rate <= 180:
        return "Intense exercise"
    else:
        return "Maximum effort"

def calculate_average_heart_rate(heart_rates):
    # Calculate average heart rate
    return sum(heart_rates) / len(heart_rates)

# Test data - heart rate readings over time
heart_rate_data = [72, 85, 95, 110, 125, 140, 155, 170, 145, 120, 95, 78]

print("Heart Rate Analysis:")
print("Reading | Rate (bpm) | Zone")
print("-" * 35)

for i, rate in enumerate(heart_rate_data, 1):
    zone = analyze_heart_rate(rate)
    print(f"{i:7} | {rate:10} | {zone}")

# Calculate statistics
avg_rate = calculate_average_heart_rate(heart_rate_data)
max_rate = max(heart_rate_data)
min_rate = min(heart_rate_data)

print(f"\nStatistics:")
print(f"Average heart rate: {avg_rate:.1f} bpm")
print(f"Maximum heart rate: {max_rate} bpm")
print(f"Minimum heart rate: {min_rate} bpm")`,
            testCases: [
              {
                input: '',
                expectedOutput: /Heart Rate Analysis:\nReading \| Rate \(bpm\) \| Zone\n-{35}\n1 \| 72 \| Resting\n2 \| 85 \| Resting\n3 \| 95 \| Resting\n4 \| 110 \| Light exercise\n5 \| 125 \| Moderate exercise\n6 \| 140 \| Moderate exercise\n7 \| 155 \| Intense exercise\n8 \| 170 \| Intense exercise\n9 \| 145 \| Moderate exercise\n10 \| 120 \| Light exercise\n11 \| 95 \| Resting\n12 \| 78 \| Resting\n\nStatistics:\nAverage heart rate: 115\.8 bpm\nMaximum heart rate: 170 bpm\nMinimum heart rate: 72 bpm/,
                description: 'Heart rate analysis and statistics'
              }
            ],
            hints: [
              'Use if/elif/else to check heart rate ranges',
              'Use sum() and len() for average calculation',
              'Use max() and min() for statistics',
              'Format output with proper spacing'
            ],
            solutionExplanation: 'Heart rate analysis is crucial in bioengineering and healthcare. Understanding this helps with fitness tracking, medical monitoring, and health assessments.',
            reward: 35
          }
        ]
      }
    ]
  }
};

export const getChallengeById = (id) => {
  // Search through all challenges to find the one with matching id
  for (const category of Object.values(challenges)) {
    for (const module of category.modules) {
      for (const lesson of module.lessons) {
        if (lesson.id === id) {
          return {
            ...lesson,
            category: category.id,
            categoryTitle: category.title,
            moduleId: module.id,
            moduleTitle: module.title
          };
        }
      }
    }
  }
  return null;
};

export const getAllChallenges = () => {
  const allChallenges = [];
  for (const category of Object.values(challenges)) {
    for (const module of category.modules) {
      for (const lesson of module.lessons) {
        allChallenges.push({
          ...lesson,
          category: category.id,
          categoryTitle: category.title,
          moduleId: module.id,
          moduleTitle: module.title
        });
      }
    }
  }
  return allChallenges;
}; 