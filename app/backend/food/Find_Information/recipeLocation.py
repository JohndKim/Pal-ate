#!/usr/bin/python3

import requests

URL_SEARX = "https://searx.ndlug.org/search"

payload = {
    'q':'none',
    'format' : 'json'
}

headers = {
    "accept": "application/json",
    "Authorization": "Bearer K1A7_fWq2R8Lx2GlTR1n4Pv2exjA0B6BLubxhW9eb1e6PArlpJn3CmxH0onyhbT_JD15L2p9jyJEK62OddGFnt_c4H_W-SQPLdhheQgjYnqePsYEaRKPh2t0e_QaZnYx"
}


def find_recipe(url: str, food: str) -> list:
    '''
    Function that will find the top three recipies (URL and Description) of a specific food
    Uses searx search engine
    '''
    payload['q'] = food + ' recipe'
    response = requests.get(url, params=payload).json()['results']

    new_data = []
    for item in response:
        content = {
            'url': item['url'],
            'title': item['title'],
            'content': item['content'],
            'score': item['score']
        }
        new_data.append(content)
    sorted(new_data, key=lambda r: (-r['score'], r['title']))
    return new_data[:3]


def find_location(food: str) -> list:
    '''
    Function that will find the top three locations (URL and Description) of a specific food
    Uses Yelp API
    '''
    string = '%20'.join(food.split())
    url = 'https://api.yelp.com/v3/businesses/search?location=South%20Bend%2C%20IN&term=' + string + '&radius=40000&categories=restaurant&price=1&price=2&price=3&price=4&sort_by=best_match&limit=3'
    response = requests.get(url, headers=headers).json()['businesses']

    new_data = []
    for item in response:
        content = {
            'name': item['name'],
            'url': item['url'],
            'rating': item['rating'],
            'address': item['location']['address1']
        }
        new_data.append(content)
    return new_data

def get_info(food: str) -> dict:
    '''
    Function that calls both find_recipe and find_location and puts them into one dict for reference later
    '''
    return {
        'recipes': find_recipe(URL_SEARX, food),
        'location': find_location(food)
    }


def main() -> None:
    test1 = get_info('fried calamari')
    test2 = get_info('bibimbap')
    test3 = get_info('baklava')
    print(test1)
    print(test2)
    print(test3)

if __name__ == "__main__":
    main()