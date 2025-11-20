"""
FreeCodeCamp Daily Coding Challenge (2025-11-04)
Problem: Markdown Heading Converter
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-04

Given a string representing a Markdown heading, return the equivalent HTML heading.

A valid Markdown heading must:
  • Start with zero or more spaces
  • Followed by 1 to 6 hash characters (#) in a row
  • At least one space after the hashes
  • Then the heading text

The number of hash symbols determines the heading level:
  • "#"   → <h1>
  • "##"  → <h2>
  • "###" → <h3>
  • ...
  • "######" → <h6>

If the input does not follow the exact Markdown format, return "Invalid format".

Example:
  convert("# My level 1 heading") → "<h1>My level 1 heading</h1>"
"""

def convert(heading):
    if not heading:
        return "Invalid format"

    # Remove outer spaces, then split into "###" and text (only first space split)
    trimmed = heading.strip().split(" ", 1)

    # Must split into exactly two parts: hashes + text
    if len(trimmed) < 2:
        return "Invalid format"

    hashes, text = trimmed

    # Hashes must be 1–6 characters long and all must be "#"
    if not (1 <= len(hashes) <= 6) or set(hashes) != {"#"}:
        return "Invalid format"

    # Build the h-tag using the number of hashes
    level = len(hashes)
    return f"<h{level}>{text.strip()}</h{level}>"


# Test cases
print(convert("# My level 1 heading"))              # <h1>My level 1 heading</h1>
print(convert("My heading"))                        # Invalid format
print(convert("##### My level 5 heading"))          # <h5>My level 5 heading</h5>
print(convert("#My heading"))                       # Invalid format
print(convert("  ###  My level 3 heading"))         # <h3>My level 3 heading</h3>
print(convert("####### My level 7 heading"))        # Invalid format
print(convert("## My #2 heading"))                  # <h2>My #2 heading</h2>
