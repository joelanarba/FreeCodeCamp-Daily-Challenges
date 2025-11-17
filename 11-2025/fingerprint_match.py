"""
FreeCodeCamp Daily Coding Challenge (2025-11-02)
Problem: Fingerprint Test
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-02

Given two fingerprint strings (lowercase a-z), determine if they are a match.

Matching Rules:
  • Fingerprints must be the same length.
  • Count the number of positions where characters differ.
  • They match if the number of differences is not more than
    ten percent of the fingerprint length.

Example:
  fingerprint_a = "helloworld"
  fingerprint_b = "jelloworld"
  differences = 1 out of 10 → 1 ≤ 1 → True
"""

def is_match(fingerprint_a, fingerprint_b):
    if len(fingerprint_a) != len(fingerprint_b):
        return False

    dif_count = 0
    for i in range(len(fingerprint_a)):
        if fingerprint_a[i] != fingerprint_b[i]:
            dif_count += 1

    return dif_count <= len(fingerprint_a) * 0.10

def is_match1(a, b):
    if (len(a) != len(b)):
        return False
    
    dif_count = sum(x != y for x,y in zip(a, b))
    return dif_count <= len(a) * 0.1

# Test cases
print(is_match("helloworld", "helloworld"))  # True
print(is_match("helloworld", "helloworlds")) # False
print(is_match("helloworld", "jelloworld"))  # True
print(is_match("thequickbrownfoxjumpsoverthelazydog",
               "thequickbrownfoxjumpsoverthelazydog"))  # True
print(is_match("theslickbrownfoxjumpsoverthelazydog",
               "thequickbrownfoxjumpsoverthehazydog"))  # True
print(is_match1("thequickbrownfoxjumpsoverthelazydog",
               "thequickbrownfoxjumpsoverthehazycat"))  # False
