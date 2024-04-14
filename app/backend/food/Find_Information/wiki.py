import requests
from bs4 import BeautifulSoup
import re
from .searx import search_searx

URL_WIKI = "http://en.wikipedia.org/w/api.php"

def search_wiki(params):
    info1 = search_wiki_info(params)
    info2 = search_wiki_culture(params)
    return {**info1, **info2}


def search_wiki_culture(params):
    search_term = params.replace(' ', '_')
    wiki_url = f"https://en.wikipedia.org/wiki/{search_term}"

    try:
        # Send a GET request to the Wikipedia page
        response = requests.get(wiki_url)
        response.raise_for_status()  # Raise an exception for HTTP errors
        
        # Parse the HTML content of the page using BeautifulSoup
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Find the section of the Wikipedia page that contains information about the dish
        # You may need to inspect the HTML structure of the Wikipedia page to locate relevant content
        culture_section = soup.find('span', {'id': 'Culture'})
        
        if culture_section:
            # Extract text from the culture section
            culture_text = culture_section.find_next('p').get_text()
            return {'culture': culture_text.strip()}
        else:
            return {'culture': "Culture information not found for this dish on Wikipedia."}
    
    except requests.exceptions.RequestException as e:
        return {'culture': f"Error fetching Wikipedia page: {e}"}


#To get the history of an object, item description
def search_wiki_info(params):
    payload = {
        "action": "query",
        "format": "json",
        "prop": "extracts",
        "titles": params,
        "explaintext": True
    }

    information = {
        "intro": "",
        "history": "",
    }

    try:
        response = requests.get(URL_WIKI, params=payload)
        data = response.json()
        pageid = list(data['query']['pages'].keys())[0]
        try:
            content = data['query']['pages'][pageid]['extract']
            if content == '':
                return {'message': 'intro and history not found'}
        except:
            return {'message': 'intro and history not found'}
        
        parsed_content = [ i for i in content.split('\n') if i != '']
        
        information['intro'] = '.'.join(parsed_content[1].split('.')[:3])
        for index, i in enumerate(parsed_content):
            if i == '== History ==':
                information['history'] = '.'.join(parsed_content[index + 1].split('.')[:5])
                break
        return information

    except requests.exceptions.RequestException as e:
        return None