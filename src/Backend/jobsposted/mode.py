import requests
import pyuser_agent
from bs4 import BeautifulSoup
import csv
ua = pyuser_agent.UA()


 
from fake_useragent import UserAgent
  
  
ua = UserAgent()
def search_job(job_type,location_preferred):
    
    headers = {
      "User-Agent" : ua.random
    }

    URL="https://www.linkedin.com/jobs/search/?&keywords="+str(job_type)+"&location="+str(location_preferred)
    r = requests.get(URL,headers=headers)
    

    soup = BeautifulSoup(r.content , 'html.parser')


    company = soup.find_all(class_="base-search-card__subtitle")

    companies = []

    for i in company:
        if len(companies)==10:
            break
        else:
            s = i.text 

            s = s.replace("\n","")

            s = s.strip()

            companies.append(s)


    location = soup.find_all(class_="job-search-card__location")

    locations = []

    for i in location:
        if len(locations)==10:
            break
        else:
            s = i.text
            s = s.replace("\n","")

            s = s.strip()

            locations.append(s)

    time_old = soup.find_all(class_="job-search-card__listdate")
    time_new = soup.find_all(class_="job-search-card__listdate--new")
    time = time_old + time_new

    times_posted = []

    for i in time:
        if len(times_posted)==10:
            break
        else:
            s = i.text 
            s = s.replace("\n","")
            s = s.strip()

            times_posted.append(s)

    job = soup.find_all(class_="base-search-card__title")
    job_name = []

    for i in job:
        if len(job)==10:
            break
        else:
            s = i.text
            s = s.replace("\n", "")
            s = s.strip()
            job_name.append(s)
        
        
    
    atags = soup.find_all('a', {'class':'base-card__full-link'})
    links = [atag['href'] for atag in atags]
    ref_links = []
    
    for i in links:
        if len(links)==10:
            break
        else:
            ref_links.append(i)
        
    #print(ref_links)
    
    
    #src="https://media-exp1.licdn.com/dms/image/C510BAQFUu_Xv3DgXVQ/company-logo_100_100/0/1550552088271?e=2147483647&v=beta&t=7LQY24WE0626bDWTHOddteBuq1WOgiDv2IuzzdRrzIM"
    
        

    all_info = []
    
    for jb,cp,locate,time,ref_link in zip(job_name,companies,locations,times_posted,ref_links):
        
        all_info.append([jb,cp,locate,time,ref_link])
    return all_info
