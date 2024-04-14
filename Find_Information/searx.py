import requests

URL_SEARX = "https://searx.ndlug.org/search"

def search_searx(params):
    payload1 = {
        'q': f'What does {params} taste like?',
        'format': 'json'
    }

    keywords = params.split(' ')
    print(keywords)
    payload2 = {
        'q': f'What dishes in other countries are like {params}',
        'format': 'json'
    }
    taste = search_searx_taste(payload1)
    related = search_searx_related(payload2)

    # print(related)
    return taste


#To get the other information
def search_searx_taste(payload1):
    try:
        response = requests.get(URL_SEARX, params=payload1)
        data = response.json()['results']

        search_results = []
        for search in data:
            content = {
                'url': search['url'],
                'title': search['title'],
                'content': search['content'],
                'score': search['score'],
            }
            if 'content_full' in search:
                content['content_full'] = search['content_full']

            search_results.append(content)
            search_results.append(content)
        search_results = sorted(search_results, key=lambda r: (-r['score'], r['title']))
        return search_results[0]

    except requests.exceptions.RequestException as e:
        return None
    
def search_searx_related(payload2):
    try:
        response = requests.get(URL_SEARX, params=payload2)
        data = response.json()['results']

        search_results = []
        for search in data:
            content = {
                'url': search['url'],
                'title': search['title'],
                'content': search['content'],
                'score': search['score'],
            }
            if 'content_full' in search:
                content['content_full'] = search['content_full']

            search_results.append(content)
            search_results.append(content)
        search_results = sorted(search_results, key=lambda r: (-r['score'], r['title']))
        return search_results

    except requests.exceptions.RequestException as e:
        return None