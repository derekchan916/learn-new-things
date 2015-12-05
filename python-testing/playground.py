import json
import urllib

def getUserInput():
    user_input = raw_input("Some input please: ")
    if len(user_input) > 0:
        googleSearch(user_input)
