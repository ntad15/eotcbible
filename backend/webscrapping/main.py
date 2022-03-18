# This code goes through all the html files in amharicbible directory
# and extracts all the books with their chapters and verses
# and saves it into one text file

from bs4 import BeautifulSoup

address = ['gen_toc.htm', 'exo_toc.htm', 'lev_toc.htm', 'deu_toc.htm', 'jos_toc.htm',
           'jdg_toc.htm', 'rut_toc.htm', '1sa_toc.htm', '2sa_toc.htm', '1ki_toc.htm',
           '2ki_toc.htm', '1ch_toc.htm', '2ch_toc.htm', 'ezr_toc.htm', 'neh_toc.htm',
           'est_toc.htm', 'job_toc.htm', 'psa_toc.htm', 'pro_toc.htm', 'ecc_toc.htm',
           'sos_toc.htm', 'isa_toc.htm', 'jer_toc.htm', 'lam_toc.htm', 'eze_toc.htm',
           'dan_toc.htm', 'hos_toc.htm', 'joe_toc.htm', 'amo_toc.htm', 'oba_toc.htm',
           'jon_toc.htm', 'mic_toc.htm', 'nah_toc.htm', 'hab_toc.htm', 'zep_toc.htm',
           'hag_toc.htm', 'zec_toc.htm', 'mal_toc.htm', 'mat_toc.htm', 'mar_toc.htm',
           'luk_toc.htm', 'joh_toc.htm', 'act_toc.htm', 'rom_toc.htm', '1co_toc.htm',
           '2co_toc.htm', 'gal_toc.htm', 'eph_toc.htm', 'php_toc.htm', 'col_toc.htm',
           '1th_toc.htm', '2th_toc.htm', '1ti_toc.htm', '2ti_toc.htm', 'tit_toc.htm',
           'phi_toc.htm', 'heb_toc.htm', 'jam_toc.htm', '1pe_toc.htm', '2pe_toc.htm',
           '1jo_toc.htm', '2jo_toc.htm', '3jo_toc.htm', 'jud_toc.htm', 'rev_toc.htm',
           ]

# A text file to hold each chapter and verses
filename = open(f'books.txt', 'w', encoding='utf8')

for book_addy in address:

    with open(f'amharicbible/{book_addy}', 'r') as file:
        content = file.read()
        soup = BeautifulSoup(content, 'lxml')
        chapter_list = soup.find_all('p', class_='bodytext')
        for chapter in chapter_list:
            chapter_link = chapter.a.get("href")
            arr = chapter_link.split("#")

            # Address of each chapter of a book stored at index 0
            chapter_addrs = arr[0]

            # opens specific book on a chapter
            # gets the all the verse off of the chapter
            # converts the verses with the chapter number to text file
            with open(f'amharicbible/{chapter_addrs}') as f:
                html_file = BeautifulSoup(f, 'lxml')
                chapter = html_file.find('h1')
                book_name = html_file.title
                filename.write(f'{book_name.text}\n')
                filename.write(f'{chapter.text}\n')
                for v in html_file.find_all('p'):
                    filename.write(f'{v.text}\n')

filename.close()
