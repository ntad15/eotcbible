import json


filename = "./txtfileofbooks/exodus1.txt"

book = {}
chap = {}

with open(filename) as fh:
    bookname = fh.readline()

    for line in fh:
        verse = line.split("፤", 1)
        # print(verse)
        if verse[0] != "\n":
            chap[verse[0]] = verse[1]
    
    book[bookname] = chap

    #json_string = json.dumps(dict1, ensure_ascii = False).encode('utf8')
    # print(json_string.decode())

with open("jsonbooks/exodus1.json", "w", encoding='utf8') as json_file:
    json.dump(book, json_file, ensure_ascii=False)
# json_file.close()