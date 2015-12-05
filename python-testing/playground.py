import json
import urllib

def getUserInput():
    user_input = raw_input("Some input please: ")
    if len(user_input) > 0:
        googleSearch(user_input)

def googleSearch(search_query):
    query = urllib.urlencode({'q': search_query})
    url = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&%s' % query
    search_response = urllib.urlopen(url)
    search_results = search_response.read()
    results = json.loads(search_results)
    data = results['responseData']
    print data['results'][0]['titleNoFormatting'] + " from " +  data['results'][0]['visibleUrl']

while True:
    getUserInput()
