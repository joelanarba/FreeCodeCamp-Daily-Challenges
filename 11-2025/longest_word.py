"""
FreeCodeCamp Daily Coding Challenge (2025-11-20)
Problem: Longest Word
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-20

Given a sentence string, return the longest word in the sentence.

Rules:
  • Words are separated by a single space.
  • Only letters (a–z, case-insensitive) count toward the word length.
  • If multiple words share the same max length, return the first one.
  • Return the actual word as it appears, but with punctuation removed.

Examples:
  longest_word("The quick red fox") → "quick"
  longest_word("Hello coding challenge.") → "challenge"
"""

def longest_word(sentence):
    words = sentence.split(" ")

    # Count only alphabetic characters
    def count_letters(word):
        return len([char for char in word if char.isalpha()])

    # Remove punctuation and return only letters
    def clean_word(word):
        return ''.join([char for char in word if char.isalpha()])

    # Find the raw word with the most alphabetic characters
    target = max(words, key=count_letters)

    return clean_word(target)

import re

def longest_word1(sentence):
    # handle empty input
    if not sentence:
        return ""
    # remove punctuation but keep letters and whitespace
    cleaned = re.sub(r'[^A-Za-z\s]', '', sentence)
    words = cleaned.split()   # splits on any whitespace
    if not words:
        return ""
    return max(words, key=len)



# Test cases
print(longest_word("The quick red fox"))                              # quick
print(longest_word("Hello coding challenge."))                        # challenge
print(longest_word("Do Try This At Home."))                           # This
print(longest_word("This sentence... has commas, ellipses, and an exlamation point!"))
print(longest_word("A tie? No way!"))                                 # tie
print(longest_word("Wouldn't you like to know."))                     # Wouldnt
