"""
FreeCodeCamp Daily Coding Challenge (2025-11-03)
Problem: 100 Characters
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-03

Given a string, repeat its characters until the result is exactly 100 characters long.
If repeating goes beyond 100 characters, trim the extra so the final output is exactly 100 characters.

Example:
  one_hundred("One hundred ")
  → "One hundred " repeated enough times, trimmed to 100 characters.
"""

def one_hundred(chars):
    max_length = 100

    # Repeat the string enough times (one extra repetition ensures coverage)
    repeated = (chars * ((max_length // len(chars)) + 1))[:max_length]

    return repeated


# Test cases
print(one_hundred("One hundred "))
print(one_hundred("freeCodeCamp "))
print(one_hundred("daily challenges "))
print(one_hundred("!"))
